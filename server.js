const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var path = require("path");
const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "")));
app.use(express.static(path.join(__dirname, "public")));



const User = mongoose.model("User", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = mongoose.model("Task", {
    user: {
        userEmail: String,
        firstName: String,
        lastName: String,
        imgUrl: String,
        password: String
    },
    taskTitle: String,
    taskContent: String,
    done: Boolean
})

//check if the user exsit in DB  Login
app.get('/checkUserExist', function (req, res) {
    const NewUser = { userEmail, firstName, lastName, imgUrl, password } = req.body;
    let { success } = false;
    console.log("Check User Exist after register");
    User.find({ userEmail: userEmail }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            User.create(NewUser).then(docs => { console.log('save to DB') })
            res.send([{ success: false }])
        } else {
            res.send([{ success: true }, { doc: doc }])
        }
    })
})


//Register 
app.post('/Register', function (req, res) {
    const { userEmail, password } = req.body;
    let { success } = false;
    console.log("Check User Exist...");
    User.find({ userEmail: userEmail, password: password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            console.log("not found...");
            res.send([{ success: false }])
        } else {
            res.send([{ success: true }, { doc: doc }])
        }
    })
})




// get Family Users
app.get('/get/Family', function (req, res) {
    const lastName = req.body.lastName;
    User.find({ lastName: lastName }, function (err, doc) {
        res.send(doc)
    })
})
// get todo Task
app.get('/get/toDo', function (req, res) {
    const lastName = req.body.lastName;
    Task.find({ "user.lastName": lastName }, function (err, doc) {
        res.send(doc)
    })
})

//edit Task and update it 
app.put('/Update/Todo', function (req, res) {
    const { taskTitle, taskContent, done, TaskId } = req.body;
    let { success } = false;
    console.log("Updated ToDo");
    await Task.findOneAndUpdate({ _id, TaskId }, { $set: { taskTitle: taskTitle, taskContent: taskContent, done: done } });
})

//add Todo 
//edit Task and update it 
app.put('/Update/Todo', function (req, res) {
    const { userEmail, firstName, lastName, imgUrl,password,taskTitle,taskContent,done } = req.body;
    let { success } = false;
    console.log("Updated ToDo");
    await Task.findOneAndUpdate({ _id, TaskId }, { $set: { taskTitle: taskTitle, taskContent: taskContent, done: done } });
})
 

//Remove Todo






app.listen(port, () => { console.log('server Listen on port', port) }); 