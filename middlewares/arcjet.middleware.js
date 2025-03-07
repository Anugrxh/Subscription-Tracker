import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decison = await aj.protect(req,{requested : 1});
    if (decison.isDenied()) {
      if (decison.reason.isRateLimit()) return res.status(429).json({ error: "Rate limit exceeded" });
      if (decison.reason.isBot()) return res.status(403).json({ error: "Bot detected" });
      return res.status(403).json({ error: "Access denied" });
    }
    next();
    
  } catch (error) {
    console.error(`Arcjet Middleware Error: ${error}`);
    next(error); 
  }
};
 

export default arcjetMiddleware;