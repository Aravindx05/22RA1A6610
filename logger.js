const logger=(req,res,next)=>{
    const Time= new Date().toISOString();
    console.log(`[${Time}] ${req.method} ${req.originalUrl}`);
    next();
};
module.exports=logger;