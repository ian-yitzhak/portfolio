const express = require('express')
const app = express()
const indexRoute = require('./routes/index')

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.use('/', indexRoute)

const port =process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app running on ${port}`))