const {connect} = require('mongoose');

const connectDB = async(uri) => {
    try{
        await connect(uri)
        console.log('Connected to database');
    }
    catch(err){
        console.log('error connecting to db',err);
    }
}

module.exports = connectDB;