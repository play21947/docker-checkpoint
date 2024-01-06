const fastify = require('fastify')
const app = fastify()
const env = require('dotenv').config().parsed
const axios = require('axios')


app.get("/api/products", async(req, res)=>{

    let products = await axios.get('https://fakestoreapi.com/products').then((res)=>{
        return res.data
    })

    res.send({status: 200, ...products})
})


app.get("/api/products/:id", async(req, res)=>{

    let {id} = req.params

    let products = await axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        return res.data
    })


    if(id && products){
        res.send({status: 200, ...products})
    }else{
        res.send({status: 400})
    }
})


app.listen(env.PORT, ()=>{
    console.log(`Server is running on port ${env.PORT}`)
})