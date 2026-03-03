//Activity 4:
// index.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/labDB');
const studentSchema = new mongoose.Schema({
name: { type: String, required: true },
age: { type: Number, required: true, min: 18, max: 60 },
grade: { type: String, required: true }
});
const Student = mongoose.model(Student, studentSchema);
const newStudent = new Student({
name: "ALI",
age: 18, // Invalid age, should be >=18
grade: 'A'
});
newStudent.save()
.then(() => console.log('Student saved!'))
.catch(err => console.log('Validation Error:', err));