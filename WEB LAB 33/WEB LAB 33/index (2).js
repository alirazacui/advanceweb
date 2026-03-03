//Activity 2:
//index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/labDB');
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});
const Student = mongoose.model('Student', studentSchema);
const newStudent = new Student({
  name: 'Ayesha',
  age: 21,
  grade: 'B'
});
newStudent.save()
  .then(() => console.log('Student saved! successfulyy'))
  .catch(err => console.log('Error:', err));