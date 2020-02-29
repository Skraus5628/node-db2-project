const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) =>{
    res.json({
        message: "We're all mad here...."
    })
})

module.exports = router