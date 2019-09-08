const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 5000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
http.listen(port, () => console.log(`listening on port ${port}`))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
const AuthRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('connected'))

// routes
// app.get('/', (req, res) => {res.sendFile(__dirname + "/index.html");})
// app.get('/', (req, res, next) => {console.log('on da road');next();})
app.get('/chat', (req, res) => {res.render('chat')})

//routes middleware
// app.use(express.static('public/'))
app.use('/', AuthRoute)

//listen on port 3000

function getOnlineUsers() {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients)
    let users = sockets.map(s => s.user)
    console.log('getVisitors', users)
    return users.filter(u => u!=undefined);
}

function emitOnlineUsers() {
    socket.broadcast.emit("users", getOnlineUsers())
}

function getVisitors() {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients)
    let users = sockets.map(s => s.user)
    console.log('getVisitors', users)
    return users;
}

function emitVisitors() {
    io.sockets.emit("visitors", getVisitors())
}

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')
    //default username
    
    socket.username = 'Anonymous'
    socket.on('new_visitor', user => {
        
        socket.user = user;
        console.log('user :', socket.username)
        // socket.username = 
        socket.emit('change_username', {username : 'Anonymous'})
        emitVisitors();
    })
    socket.on('new_message', user => {
        io.sockets.emit('new_message', {message : user.message, username : socket.username})
    })
    socket.on('change_username', user => { 
        socket.username = user.username
    })

    socket.on('typing', ({room}) => {
        socket.to(room).emit('typing', 'Someone is typing')
    })

    socket.on('stopped_typing', ({room}) => {
        socket.to(room).emit('stopped_typing')
    })
    
    socket.on('add_user', user => {
        socket.emit('server_message', {
            name:"Creator",
            message:"Welcome to the Chat"
        })

        socket.broadcast.emit('server_message', {
            name:"Creator",
            message:`${user.name} just join the chat`
        })
        socket.user = user
        emitOnlineUsers()
    })
    
    socket.on('disconnect', ({user}) => {

        if (user){
            socket.broadcast.emit('server_message', {
                name:"Creator",
                message:`${user.name} just left the chat`
            })
        }
    })

})
        