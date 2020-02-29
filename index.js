const express = require("express")
const welcomeRouter = require("./welcome/welcomeRouter");
const carRouter = require("./cars/carRouter")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use("/", welcomeRouter)
server.use("/cars", carRouter)

server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "Where'd it go?..."
    })
})

server.listen(port, () =>{
    console.log(`Server listening on http://localhost:${port}`)
})