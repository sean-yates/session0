const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/session0', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});