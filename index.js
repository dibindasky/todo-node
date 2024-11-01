const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express()
dotenv.config()

const userRoutes = require('./routes/users/user_route')
const todoRoutes = require('./routes/todos/todo_route')

app.use(express.json({ limit: '500mb' }));
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URL).then((v) => {
    console.log('db connection successfull');
}).catch((e) => {
    console.log('db connection error');
});

app.listen(process.env.PORT, () => { console.log('server running'); });
