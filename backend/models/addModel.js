const mongoose = require('mongoose')


const addSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a Employee name"]
        },
        age: {
            type: Number,
            required: true,
            default: 0
        },
        role: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    {
    timestamp:true
    }
)


const Add = mongoose.model('Add',addSchema);


module.exports = Add;