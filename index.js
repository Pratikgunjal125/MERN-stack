const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
 // res.send('Hello World! India')
 res.sendStatus(404)
 res.json({
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery"
})
})
app.get('/product', (req, res) => {
    // res.send('Hello World! India')
    res.sendStatus(403)
    res.json({
       "id": 5,
       "title": "John Hardy Women's Leg",
       "price": 695
      
   })
   })
   app.get('/user', (req, res) => {
    // res.send('Hello World! India')
    res.sendStatus(500);
    res.download('./index.js');
    res.json({
       "id": 5,
       "title": "John Hardy Women's Leg",
       "price": 695
   })
   })
   app.post('/postdata', (req, res) => {
//    res.send('data received'+req.body);
const{email,name}=req.body
   console.log(req.body);
   res.send("data received from "+email);

   })
   app.get('/user', (req, res) => {
    // res.send('Hello World! India')
    res.sendStatus(500);
    res.download('./index.js');
    res.json({
       "id": 5,
       "title": "John Hardy Women's Leg",
       "price": 695
   })
   })

   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})