
// const socket = io('http://localhost:8000');
// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp');
// const messageContainer = document.querySelector('.container');
// var audio = new Audio('ting.mp3.mp3');

// const append = (message, position) => {
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageContainer.append(messageElement);
//     if (position === 'left') {
//         audio.play();
//     }
// };

// const name = prompt('Enter your name to join');
// socket.emit('new-user-joined', name );

// socket.on('user-joined', (name) => {
//     append(`${name} joined the chat`, 'left');
// });

// socket.on('receive', (data) => {
//     append(`${data.name}: ${data.message}`, 'left');
// });

// socket.on('left', (name) => {
//     append(`${name} left the chat`, 'left');
// });

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const message = messageInput.value;
//     append(`you: ${message}`, 'right');
//     socket.emit('send', message);
//     messageInput.value = '';
// });

const socket = io("http://localhost:8000", { transports: ["websocket"] });

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
var audio = new Audio('ting.mp3.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position === 'left') {
        audio.play();
    }
};

const userName = prompt('Enter your name to join'); // Renamed 'name' to 'userName'
socket.emit('new-user-joined', userName); // Renamed 'name' to 'userName'

socket.on('user-joined', (name) => {
    append(`${name} joined the chat`, 'left');
});

socket.on('receive', (data) => {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', (name) => {
    append(`${name} left the chat`, 'left');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`you: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});


