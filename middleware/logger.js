const log = (req, res,next)=>{
    console.log(req.method, req.originUrl, new Date().toLocaleDateString());
    next();
}
module.exports = log;