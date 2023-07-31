module.exports = thefn =>(req,res,next)=>{
    Promise.resolve(thefn(req, res, next)).catch(next);
}