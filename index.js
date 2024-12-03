import express from "express";
import aboutmiddleware from "./middleware/aboutmiddleware.js";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

 app.get("/about" , aboutmiddleware  , (req , res)=>{
    res.send("Middleware statement  befaure executed ")
    
 })
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
