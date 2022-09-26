const title = document.querySelector('#titleSession').textContent

const titleReform = title.split(" ");


console.log(typeof titleReform[1])

if(!titleReform[1]){
    fetch('http://localhost:8080/productos',{
        method: 'POST',
        headers: {
            "Content-Type": "aplicattion/json"
        },
        body: '{"band":"false"}'
    })
}


