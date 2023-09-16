const express = require("express")
const router = express.Router()
const {create} = require("../controllers/bookingController")

router.get('/booking',create)

module.exports=router