var express=require("express");
var app=express();
var PORT=3000;
/*app.get("/",function(req,res)
{
    res.send("Merhaba EXPRESS");
})*/
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
app.use(middleware.logger);
app.get("/hakkimda",middleware.requireAuthentication,function(req,res)
{
    res.send("Merhaba EXPRESS HAKKIMDA");
})

app.use(express.static(__dirname +"/public"));
app.listen(PORT,function(){
    console.log("BAŞARILI ŞEKİLDE "+PORT +" nolu porta bağlandınız");
});
