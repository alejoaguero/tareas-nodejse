const data = {band:false}
const url = 'localhost:8080/logout'





fetch(url,{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringfy(data)
}).then((res) => {
   res.json()
}).catch((err) => {
    console.log('Error: ',err)
})
.then((res)=>{
    console.log('Success: ' res)
})