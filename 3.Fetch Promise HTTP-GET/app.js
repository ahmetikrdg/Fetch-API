class Request{
    /*
    get(url){
        fetch(url)//buvurlye göre json döner
        .then(response=>response.text())//sayesinde urlyi alıcaz
        .then(data=>console.log(data))//yakala yazdır
        .catch(err=>console.log(err));
    }
    */
   get(url){
       return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err));
       })
 
}
}

const request=new Request();
/*
request.get("https://jsonplaceholder.typicode.com/albums");
*/

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums=>{
    console.log(albums);
})
.catch(err=>console.log(err));
