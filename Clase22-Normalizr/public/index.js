const socket = io()
const inputs = document.getElementsByClassName('infoMessage')
const button = document.getElementById('sendMessage')

let user ={
        autor: {
            name:"",
            surname:"",
            age:"",
            alias:"",
            avatar:"",
            email:""
        },
        text: ""
   }

button.addEventListener('click',()=>{ 

    const arrayValue = Object.values(inputs)


    arrayValue.forEach(element=>{
        switch(element.placeholder){
            case "Nombre": user.autor.name = element.value
                break;
            case "Apellido": user.autor.surname = element.value
                break;
            case "Edad":  user.autor.age = element.value 
                break;
            case "Alias":  user.autor.alias = element.value
                break;
            case "Avatar":  user.autor.avatar = element.value
                break;
            case "Email":  user.autor.email = element.value
                break;
            case "Mensaje": user.text = element.value
        }  
    })

        socket.emit('message',user) 
})
