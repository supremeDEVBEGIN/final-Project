const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()
const port = process.env.PORT
const bookingRoute = require("./routes/booking")
// connect cloud database
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(() => {
    console.log("connect DB Success!")
}).catch((err) => {
    console.log(err)
});



// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// route
app.use('/api',bookingRoute)

app.listen(port,()=>{
    console.log(`start server in port ${port}`)
})


