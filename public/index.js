const socket = io.connect()
const products = document.getElementById('products')
const sendData = document.getElementById('sendData')
const sendMessage = document.getElementById('sendMessage')
const messagesChat = document.getElementById('messagesChat')

function render(data) {
    const datos = data.map((product) => {
        return   `<tr>
                      <td>${product.Id}</td>
                      <td>${product.name}</td>
                      <td>${product.price}</td>
                      <td>${product.description}</td>
                 </tr>
                                `
        })
        
    products.innerHTML = datos.join('')
}

sendData.addEventListener('click', (e) => {    
    const inputName = document.getElementById('inputName')
    const inputPrice = document.getElementById('inputPrice')
    const inputDesc = document.getElementById('inputDesc')
    
    const firstProdu = {
        name: inputName.value,
        price: inputPrice.value,
        description: inputDesc.value
    }


    socket.emit('new-produ', firstProdu)

    e.preventDefault()
})


socket.on('all-products', (data) => {
    render(data)
})


sendMessage.addEventListener('click', (e) => {
    e.preventDefault()
    const inputMessage = document.getElementById('inputMessage')
    const inputEmail = document.getElementById('inputEmail')
    const fecha  = new Date().toLocaleString()
    const date = new Date()
    const hora = `${date.getHours()}:${date.getMinutes()}`


    const newMessage = {
        message : inputMessage.value,
        email : inputEmail.value,
        date: `${fecha} - ${hora}`
    }

    socket.emit('new-message',newMessage)
})      


socket.on('all-messages', (data) => {
    let datos = data.map((message) => {
        return   `<p>${message.email} - ${message.message}</p>`
    })

    messagesChat.innerHTML = datos.join('');
})


