const Koa =require('koa')
const axios = require('axios')
const {host} =require('./config/index.js')

const app=new Koa()

app.use(async ctx=>{
 let s= await axios.get(`http://${host}:3001${ctx.url}`)
 console.log(s.data)
 ctx.body=s.data
})

app.listen(3000)