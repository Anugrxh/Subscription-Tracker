import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"],
        trim : true,
        minLength : 2,
        maxLength : 100,
    },
    price : {
        type : Number,
        required : [true, "Price is required"],
        min : [0, "Price must be greater than 0"],
    },
    currency : {
        type : String,
        enum : ["USD", "EUR", "GBP" , "INR"],
        default : "INR",
    },
    frequency : {
        type : String,
        enum : ["daily", "weekly", "monthly", "yearly"],
        // default : "monthly",
    },
    category : {
        type : String,
        enum : ["sports", "entertainment", "politics", "technology", "general", "news" , "lifestyle","other"],
        required : true,
    }, 
    paymentMethod : {
        type : String,
        required : true,
        trim : true,
    },
    status : {
        type : String,
        enum : ["active", "cancelled", "expired"],
        default : "active",
    },
    startDate : {
        type : Date,
        required : true,
        validate : {
            validator : (value)=> value<=new Date(),
            message : "Start Date must be in the past",
        },
    },
    renewalDate : {
        type : Date,
        validate : {
            validator : function (value) {
                return value > this.startDate;
                },
                message : "Renewal Date must be after the Start Date",
            },
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        index : true,
    },

},{timestamps : true});

//auto calculate renewal date if missing
subscriptionSchema.pre("save",function(next){
    if (!this.renewalDate) {
        const renewalPeriod = {
            daily : 1,
            weekly : 7,
            monthly : 30,
            yearly : 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }
    // auto set status if renewal date is passed
    if (this.renewalDate < new Date()){
        this.status = "expired";
    }
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;