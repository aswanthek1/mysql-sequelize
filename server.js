const express = require('express')
const cors = require('cors')
const port = 4000
const app = express()

const productRouter = require('./routes/product')

// var corsOptions = {
//     origin:'http://localhost:8000'
// }

// app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/', productRouter)


app.listen(port,() => {
    try {
        console.log(`port runnning at ${port}`)
    } catch (error) {
        console.log('errorfoundt at app',error)
    }
} )