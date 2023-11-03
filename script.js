import express from "express"

const app=express()
app.use(express.json());
app.use(express.json( { extended: true} ));
app.get("/pr",(req,res)=>{
    res.send("helloits me sahva")
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

