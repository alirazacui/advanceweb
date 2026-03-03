//index.js
const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/labDB')
.then(()=>{
    console.log('Connected to MongoDB successfully');
})
.catch((err)=>{
    console.error('Error while connecting to MongoDB',err);
});