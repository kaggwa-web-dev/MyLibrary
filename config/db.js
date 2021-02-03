
const mongoose = require('mongoose')

// New additional code - by: Tony - Wed 03-Feb-2021

mongoose.set("useNewUrlParser", true)
mongoose.set("useCreateIndex", true)
mongoose.set("useUnifiedTopology", true)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB