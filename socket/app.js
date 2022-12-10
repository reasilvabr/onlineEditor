const express = require('express')
const app = express()
const http = require('http')
const request = require('request')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3002",
        methods: ["GET", "POST"]
    }
});
const port = 3000

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('UpdateDocument', (msg) => {
        console.log('message received')
        //call the api to update the document
        
        io.to(msg.documentId).emit('DocumentUpdated', msg)
    })
    socket.on('JoinDocument', async (docId) => {
        console.log(`joining ${docId}`)
        socket.join(docId)
        const response = await request.get({method:'GET', uri: `http://localhost:3001/document/${docId}`}, function(error, response, body){
            console.log(body)
            const json = JSON.parse(body)
            io.to(docId).emit('DocumentUpdated', json)
        })
    })
})

server.listen(port, () => {
    console.log(`app ok on port ${port}`)
})