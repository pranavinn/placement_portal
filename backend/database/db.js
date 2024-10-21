// db.js 

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://chilledouthere17:qwerty123456@cluster0.ttkna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
