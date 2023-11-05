const mongoose = require('mongoose')

const schema1 = new mongoose.Schema(
    {
        email:String,
        name:String,
        password:String
    }
)

const model12 = mongoose.model("talha",schema1)

module.exports = model12
