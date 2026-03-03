//Activity 3:
//index.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/labDB');
const studentSchema = new mongoose.Schema({
name: String,
age: Number, grade: String
});
const Student = mongoose.model(Student, studentSchema);
// 1. Insert multiple students
const students = [
{ name: 'Ali', age: 21, grade: 'B' },
{ name: 'Charlie', age: 23, grade: 'C' }
];
Student.insertMany(students)
.then(() => console.log('Students inserted!'))
.catch(err => console.log('Error:', err));
// 2. Read and display all students
Student.find()
.then(students => console.log('All Students:', students))
.catch(err => console.log('Error:', err));
// 3. Update a student’s grade
Student.updateOne({ name: 'Ali' }, { $set: { grade: 'A+' } })
.then(() => console.log('Student updated!'))
.catch(err => console.log('Error:', err));
// 4. Delete a student by ID
Student.findByIdAndDelete('student_id_here') // Replace with actual student ID
.then(() => console.log('Student deleted!'))
.catch(err => console.log('Error:', err));