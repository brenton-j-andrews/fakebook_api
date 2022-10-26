let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoDB = process.env.MONGODB_URL;
mongoose.connect( mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    ('Connected to your database.');
});