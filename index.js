const Koa =require('koa')
const axios = require('axios')
const app=new Koa()

app.use(async ctx=>{
 let s= await axios.get('http://127.0.0.1:3001'+ctx.url)
 console.log(s.data)
 ctx.body=s.data
})

app.listen(3000)