//Promisleri çok daha efektif kullanmamızı sağlar async ve await
//async ile yazılmış bir function mutlaka ve mutlaka promise döndürmek zorunda
//biz promise yazmasak bile o kendi içinde promise döndürür
/*
async function test(data){
    return data;
}

test("Merhaba").then(response=>console.log(response));
*/

/*
--await ise aslında bir promisenin resolve etmesini yani olumlu dönüş yapmasını bekleyen bir anahtar kelimemiz.

async function test(data){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Bu bir değerdir");
        }, 2000);
    });
    let response=await promise;//promise objemiz ve bu 5 sn sonra resolve edecek yani bu satır burada 5 sn. bekler.
    console.log(response);
    console.log("Naber");
   -- NOT: await sadece async fonksiyonun içinde çalışır.
}

test("Merhaba");
*/

/*şimdi responseyi returnla dönelim
async function test(data){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Bu bir değerdir");
        }, 2000);
    });
    let response=await promise;
    return response;//döndürdük ve aşağıda yakalayacağız
}

test("Merhaba").then(response=>console.log(response));//yukarıdan returnla geleni yakaladım ve response ile yazdırdım
*/

/*şimdi herhangi bir hata alma durumundaki işlemlere bakalım

async function testData(data){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof data==="string")
            {
                resolve(data);
            }
            else
            {
                reject(new Error("Lütfen string bir değer girin"));
            }
        }, 2000);
    });
    const response=await promise;//5 sn. sonra çalışır

    return response;//thriller ile döndürür aşağıda yakalarız
}

testData("thriller")//thrielleri gönderdim
.then(data=>console.log(data))//yukarıdan gelen thrilleri yakalarız
.catch(err=>console.log(err));
*/
async function getCurreny(url){
    const response=await fetch(url);//response döner
    const data=await response.json();//json objemiz
    console.log(data);
}

getCurreny('https://api.exchangeratesapi.io/latest');