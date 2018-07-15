var middleware=
{
    requireAuthentication: function(req,res,next)
    {
        console.log("ÖZEL ROUTE GİRİLDİ");
        next();
    },logger:function(req,res,next)
    {
        console.log(req.method+" ile"+req.originalUrl+" sayfasına girildi");
        next();
    }
}
module.exports=middleware;