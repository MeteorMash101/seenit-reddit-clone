// Connecting to MongoDB ATLAS cloud db
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB Connected!: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const closeDB = () => {
  mongoose.connection.close();
}

module.exports.connectDB = connectDB
module.exports.closeDB = closeDB