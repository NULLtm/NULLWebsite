const socket = io('http://localhost:3000')
const messageForm = $('#chat-footer')
const chatContainer = $('#chat-container')
const chatInput = $('#text-input')

let intersectionOptions = {
    root: null,
    threshold: 1.0
}

let messages = []

const username = prompt("What is your username?")
socket.emit('new-user', username)

socket.on('user-connected', data => {
    console.log(data)
})

function createMessage(data) {

    

    let message = $('<p></p>')
    message.css("font", "bold 20px Verdana, sans-serif")
    message.css("text-align", "left")
    message.css("color", "#D3D3D3")
    message.css("margin-top", "5px")
    message.css("margin-bottom", "5px")
    message.text(data)

    messages.push(message)
    chatContainer.append(message)

    if(messages.length > 17) {
        messages[0].remove()
        messages.shift()
    }
}

socket.on('join-message', message => {
    createMessage(message)
})

socket.on('user-disconnected', user => {
    createMessage(user+" has disconnected!")
})


messageForm.on('submit', e => {
    e.preventDefault()

    socket.emit('send-message', chatInput.val())

    createMessage("You: "+chatInput.val())

    chatInput.val("")
})

socket.on('chat-message', data => {

    createMessage(data.username+": "+data.message)
})