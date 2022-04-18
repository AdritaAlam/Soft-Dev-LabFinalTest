const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    title : String,
    catId : String,

});


const Cats = mongoose.model("Cats",schema);
module.exports = Cats;