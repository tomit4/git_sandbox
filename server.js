const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({ msg: 'hello world' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    // This is just a simple note to add in development
    console.log(`server started on ${port}`)
})
