const express = require("express");
const router = express.Router();

const Cats = require("../models/catsSchema.js")

router.get("/",(req,res) =>{
    Cats.find().then((catsList) =>{
        console.log(catsList);
        res.send(catsList);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });
});

router.get("/:catId",(req,res) =>{
    const index = req.params.catId;
    Cats.findById(index).then((cat) =>{
        console.log(cat);
        res.send(cat);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest/error.html");
        //res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });
});
router.post("/",(req,res) =>{
    const new_cat = new Cats(req.body);
    new_cat.save().then(() =>{
        console.log("Adding a cat . ");
        res.send("A cat is added");
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });
});

router.put("/:catId",(req,res) =>{
    const index = req.params.catId;
    Cats.findByIdAndUpdate(index,req.body).then((cat) =>{
        console.log("A cat is updated at index :"+ index);
        res.send("A cat is updated");
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });

});
router.delete("/",(req,res) =>{
    Cats.remove({}).then(() =>{
        console.log("All cats are deleted :(");
        res.send("All cats are deleted :(");
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });

});
router.delete("/:catId",(req,res) =>{
    const index = req.params.catId;
    Cats.findByIdAndDelete(index).then(() =>{
        console.log("A cat is deleted");
        res.send("A cat is deleted from cats at index : " + index);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/LabTest.error.html");
        console.log("__error__");
    });
});
module.exports = router;