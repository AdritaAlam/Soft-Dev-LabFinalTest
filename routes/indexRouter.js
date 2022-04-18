const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
    res.send("Wrong endpoint.Please do visit localhost:3000/cats.")
});


module.exports = router;