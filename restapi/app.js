const express = require('express')
const { repository }  = require('./repositories')
const crypto = require('crypto')
const db = new repository()
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3001

app.post('/document', (req, res) => {
    docId = crypto.randomBytes(16).toString("hex");
    const result = db.CreateDocument(docId)
    res.json(result)
})

app.put('/document', (req, res) => {
     //inserts a new version of the document
})

app.get('/document/:documentId', (req, res) => {
    const result = db.GetDocument(req.params.documentId)
    res.json(result)
})

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(port, () => {
    console.log(`app ok on port ${port}`)
})