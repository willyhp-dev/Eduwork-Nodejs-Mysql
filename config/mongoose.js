const mongoose = require('mongoose');

mongoose.connect('mongodb://EduworkWilly:pontianak1@localhost:27017/List?authSource=admin');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Server database terhubung'));