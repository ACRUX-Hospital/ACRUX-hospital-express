const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


const connect = mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/skyscan?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))



app.use('/department' , require('./routes/departments'))
app.use('/doctors' , require('./routes/doctors'))
app.use('/users' , require('./routes/users'))


// for deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
      })
}

app.use((req,res) => {
    res.send('not found')
})

// for deployment
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})