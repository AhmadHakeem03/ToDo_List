import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var tasks = [];
var homeworks = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    tasks = [];
    homeworks = [];
    res.render("today.ejs" )
});

app.get("/school", (req, res) => {
    res.render("school.ejs")
});

app.get("/today", (req, res) => {
    res.render("today.ejs");
});


app.post("/today", (req, res) => {
    const task = req.body["fName"];
    if(tasks.length < 7 ) {
    tasks.push(task);}
    console.log(tasks);
    res.render("today.ejs", { tasks: tasks,
                              task: task });
  });
  app.post("/school", (req, res) => {
    const homework = req.body["fName"];
    if(homeworks.length < 7 ) {
    homeworks.push(homework);}
    console.log(homeworks);
    res.render("school.ejs", { homeworks: homeworks,
                               homework: homework });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });