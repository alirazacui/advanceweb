// index.js
// activity 5
const { MongoClient, ObjectId } = require('mongodb');

async function main() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('labDB');
    const courses = db.collection('courses');
    const students = db.collection('students');

    const courseRes = await courses.insertOne({ name: 'Mathematics', duration: '6 months' });
    const courseId = courseRes.insertedId;

    const studentRes = await students.insertOne({
      name: 'Ali',
      age: 22,
      grade: 'B',
      enrolledCourse: courseId
    });
    console.log('Students with course:', studentRes);

    // 2. Query the student and manually populate the course
    const student = await students.findOne({ name: 'Ali' });
    const course = await courses.findOne({ _id: student.enrolledCourse });
    console.log('Student with populated course:', { ...student, enrolledCourse: course });

  } catch (err) {
    console.log('Error:', err);
  } finally {
    await client.close();
  }
}

main();