const express = require('express')
const path = require('path')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: path.join(__dirname)})
})

app.get('/:docId', (req, res) => {
    res.sendFile('./index.html', {root: path.join(__dirname)})
})

app.listen(port, () => {
    console.log(`app ok on port ${port}`)
})