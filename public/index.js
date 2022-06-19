const socket = io.connect()
const products = document.getElementById('products')
const sendData = document.getElementById('sendData')
const sendMessage = document.getElementById('sendMessage')
const messagesChat = document.getElementById('messagesChat')
const inputEmail = document.getElementById('inputEmail')



sendData.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('inputName')
    const inputPrice = document.getElementById('inputPrice')
    const inputDesc = document.getElementById('inputDesc')
    
    const firstProdu = {
        name: inputName.value,
        price: inputPrice.value,
        desc: inputDesc.value
    }

    console.log(firstProdu)

    socket.emit('new-produ', firstProdu)

})


