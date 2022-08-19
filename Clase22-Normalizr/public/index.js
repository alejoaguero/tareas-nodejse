const socket = io()
const inputs = document.querySelectorAll('input')
const button = document.querySelector('#sendMessage')

let message,idChat;

socket.on('chat', chats => {
    idChat = chats.length
    console.log(chats)
})



button.addEventListener('click', () => {

    message = {
        autor: {
            name: inputs[0].value,
            surname: inputs[1].value,
            age: inputs[2].value,
            alias: inputs[3].value,
            avatar: inputs[4].value,
            email: inputs[5].value
        }, 
        messages: {
            name: inputs[0].value,
            surname: inputs[1].value,
            age: inputs[2].value,
            alias: inputs[3].value,
            avatar: inputs[4].value,
            email: inputs[5].value,
            message: inputs[6].value
        }  
    }

    console.log(message)    
    socket.emit('message', message)


    inputs.forEach(input => {
        input.value = ''    
    }
    )
})