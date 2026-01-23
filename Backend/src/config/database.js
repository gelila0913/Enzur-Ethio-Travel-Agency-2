// used to invite the MongoDB 

const { MongoClient } = require('mongodb');
// link from MongodbAtlas
const MONGODB_URI = 'mongodb+srv://gelilasintayehu79_db_user:enzur@cluster0.5tbmeaf.mongodb.net/enzur-travel?retryWrites=true&w=majority';

let db;

const connectDB = async () => {
    try {
        //wait untill the confirmation sent from
        const client = await MongoClient.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB Atlas');
        db = client.db('enzur-Ethio-travel');
        console.log('📊 Using database: enzur-Ethio-travel');
        return db;
    } catch (error) {
        console.error('❌ MongoDB Atlas connection failed:', error.message);
        console.log('💡 Check your password and network access in MongoDB Atlas');
        process.exit(1);
    }
};

const getDB = () => db;

module.exports = { connectDB, getDB };