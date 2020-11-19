class Request{

    async get(url){
        // return new Promise((resolve,reject)=>{
        //  fetch(url)
        //  .then(response=>response.json())
        //  .then(data=>resolve(data))
        //  .catch(err=>reject(err));
        // })}
        const response=await fetch(url);//response objemi elde ettim

        const resdata=await response.json();// JSON objemiz
        return resdata;
    }
 
    async post(url,data){
        //  return new Promise((resolve,reject)=>{
        //      fetch(url, {
        //          method: 'POST',
        //          body: JSON.stringify(data),
        //          headers: {
        //            'Content-type': 'application/json; charset=UTF-8',
        //          },
        //        })
        //        .then(response=>response.json())
        //        .then(data=>resolve(data))
        //        .catch(err=>reject(err));
        //  })
        const response= await fetch(url, {
                      method: 'POST',
                      body: JSON.stringify(data),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }});
        const resdata=await response.json();
        return resdata;
     }
 
     async put(url,data){
        //  return new Promise((resolve,reject) =>{
        //      fetch(url, {
        //          method: 'PUT',
        //          body: JSON.stringify(data),
        //          headers: {
        //            'Content-type': 'application/json; charset=UTF-8',
        //          },
        //      }).then(response=>response.json())
        //      .then(response2=>resolve(response2))
        //      .catch(err=>reject(err))
        //  })
        const response= await fetch(url, {
                      method: 'PUT',
                      body: JSON.stringify(data),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }});
        const resdata=await response.json();
        return resdata;
     }
 
     async delete(url){
        //  return new Promise((resolve,reject)=>{
        //      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //      method: 'DELETE',
        //      }).then(response=>resolve("Veri Silme İşlemi Başarılı"))
        //      .catch(err=>reject(err));
        //  });
        const response=await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                  method: 'DELETE',
                  });
        // const data=await response.json();
        return "Veri Silme İşlemi Başarılı";
     }
 }
 
 const request=new Request();
 //--GET
 request.get("https://jsonplaceholder.typicode.com/albums")
 .then(albums=>console.log(albums))
 .catch(err=>console.log(err));
 //THEN-CATCH yine kullanırız. yukarıda hata verirse resolveye otomatik düşer ve burada catche düşer
 //--POST
 request.post("https://jsonplaceholder.typicode.com/albums",{
     userId:1,
     title:"Thrailler"
 })
 .then(response=>console.log(response))
 .catch(err=>console.log(err));
 
 //--PUT
 request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:10,title:"Tarkan Karma"})
 .then(data=>console.log(data))
 .catch(err=>console.log(err));
 
 //--DELETE
 
 request.delete('https://jsonplaceholder.typicode.com/albums/1')
 .then(message=>console.log(message))
 .catch(err=>console.log(err));