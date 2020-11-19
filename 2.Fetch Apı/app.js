//ajaxa alternatif veri alma veri gönderme işine yarar fetch apı

//verimizi asenkron şekilde alalım texti
function getTextFile(){
    fetch("example.txt")//example.txt'ye gittim
    .then(response=>response.text())//textini aldım
    .then(data=>console.log(data))//burada yakaladım yazdırdım
    .catch(err=>console.log(err))//hata varsa burada yazdırırırm
}
getTextFile();

function getJsonFile(){
    fetch("example.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

getJsonFile();

//https://api.exchangeratesapi.io/latest

function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

getExternalAPI();