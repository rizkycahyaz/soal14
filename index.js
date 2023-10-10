const express = require('express')
const app = express()
const port = 3001

//app.get('/',(req,res) => {
  //  res.send('halo love dek')
//})

const bodyPs =require('body-parser');
app.use(bodyPs.urlencoded({extended: false}));
app.use(bodyPs.json());

const transmisiRouter = require ('./router/transmisi');
app.use('/api/transmisi',transmisiRouter);
const kendaraanRouter = require("./router/kendaraan.js");
app.use("/api/kendaraan", kendaraanRouter);

app.listen(port,() => {
    console.log(`aplikasi berjalan di http::localhost:${port}`)
})