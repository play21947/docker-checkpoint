const fastify = require('fastify')
const app = fastify()
const env = require('dotenv').config().parsed
const axios = require('axios')


app.get("/api/products", async(req, res)=>{

    let products = await axios.get('https://fakestoreapi.com/products').then((res)=>{
        return res.data
    })

    res.send(products)
})


app.listen(env.PORT, ()=>{
    console.log(`Server is running on port ${env.PORT}`)
})