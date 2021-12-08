const mongoose =require("mongoose");

const coinSchema= new mongoose.Schema({
    id:{
        type: String,
        required: [true]
    },
    name:{
        type: String,
        required: [true]
    },
    symbol:{
        type: String,
        required: [true]
    },
    price:{
        type: Number,
        required: [true]
    },
    marketcap:{
        type: Number,
        required: [true]
    },
    percent:{ 
        type: Number,
        required: [true]

    }
})

module.exports= mongoose.model('Wcoin',coinSchema);