import {config} from "dotenv";

config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});
export const {
    PORT ,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_KEY,
    ARCJET_SECRET,

} = process.env;

// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2M3MzFkYzE4MzcyMTVkZmFiYmNkZjMiLCJpYXQiOjE3NDExMDc2NzYsImV4cCI6MTc0MTE5NDA3Nn0.Bpv8pAhbTq7nEKvxkdQ9Nh4yglc6QkY7g6CgPuWfu1U
// _id = 67c731dc1837215dfabbcdf3