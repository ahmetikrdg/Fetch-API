/*
function getData(data){//promise objesi döndüren fonksiyonumuz
    return new Promise(function(resolve,reject){//olumluyu resolve olumsuzu reject ile döneriz bu hazırdır
        setTimeout(function(){
            reject("Olumlu Sonuç");
        },2000);
    });
}
*/
// getData("Merhaba").then(function(response){//then kullanırsak resolve ile bir değer döndüğünde bu then bloğu çalışır ve bu then bloğu içie callback functionu alır ve biz responsevimizi yakalayabiliriz.Yukarıda resolve ile olumlu sonuç döndüğüm için gelir ve response eşitlenir
//     console.log(response);
// });
/* -- Catchdede olumsuz döner
getData("Merhaba").catch(function(err){//reject err in yerine geçer aynı şekilde yazdırırız
    console.log(err);
});
*/
/*
function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data==="string")
            {
                resolve(data);
            }
            else
            {
                reject(new Error("Lütfen String Bir Değer Girin"));//new erroru js hata mesajı gibi göstermek için yazdım
            }
        },2000);
    });
}*/
/*
getData(23).then(function(response){
    console.log("Gelen Değer "+response);
}).catch(function(err){
    // console.log(err);
    console.error(err);//jsdeki hata gibi olsun diye yaptım
});
*/
/*- KODU BİRAZ DAHA PROFLAŞTIRALIM ARROWLARLA

getData(23)
.then(response=> console.log("Gelen Değer "+response))
.catch(err=>console.error(err));//TEK BİR İŞLEM YAPTIĞIM İÇİN SÜSLÜ PARANTEZLERE VB İHTİYACIM YOK
*/

function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof number==="number")
            {
                resolve(number+2);
            }
            else
            {
                reject(new Error("Lütfen bir sayı giriniz."))
            }
        }, 3000);
    });
}

addTwo(10)
.then(Response=>{
    console.log(Response);//burada 12 döner
    return Response+2;//burada farklı bir promise yapısı ile gelir bunuda farklı bir thenle yakalamam gerek
}).then(Response2=>console.log(Response2))//14 ü burada yakalayıp yazdırırım
.catch(err=>console.error(err));
//Yalnız 1 tane cath - birden çok then kullanabiliriz birden fazla thenle Promise Chain yapabiliriz