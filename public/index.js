const socket = io.connect()
const products = document.getElementById('products')
const sendData = document.getElementById('sendData')
const sendMessage = document.getElementById('sendMessage')
const messagesChat = document.getElementById('messagesChat')
const inputEmail = document.getElementById('inputEmail')



sendData.addEventListener('click', () => {
    const inputName = document.getElementById('inputName')
    const inputPrice = document.getElementById('inputPrice')
    const inputDesc = document.getElementById('inputDesc')
    
    const firstProdu = {
        name: inputName.value,
        price: inputPrice.value,
        desc: inputDesc.value
    }

    socket.emit('new-produ', firstProdu)

})


socket.on('productos', (data) => {

    products.innerHTML =  data.map((product,index) => {
            return(` <th scope="row">${index+1}</th>
                          <td>${product.name}</td>
                          <td>${product.price}</td>
                          <td>${product.desc}</td>
                    </tr>`
            )
        }).join(' ')
})

sendMessage.addEventListener('click', () => {
    const messageIntro = document.getElementById('inputMessage')
    const email = document.getElementById('inputEmail')
    
    if(messageIntro.value !== '' && email.value !== ''){
        message = {
            mensaje: messageIntro.value,
            email: email.value
        }

    socket.emit('new-message', message)
    }


})

socket.on('messages', (data) => {
    const fecha = new Date().toLocaleDateString()
    const hora = new Date().toLocaleTimeString()

    messagesChat.innerHTML = data.map((message) => {
            return(`<p>${message.email} [${fecha}] - [${hora}]: ${message.mensaje}</p>`)
    }).join(' ')
})

