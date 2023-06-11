const express = require('express');

const app = express();

const teacherRoute = require('./routes/teacher');
const studentRoute = require('./routes/student');

app.use('/student',studentRoute);
app.use('/teacher',teacherRoute);

app.listen(5000,()=>{
    console.log('Server started on port http://localhost:5000');
})

