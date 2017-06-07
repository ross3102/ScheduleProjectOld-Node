const express   = require('express'),
      app       = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
   res.send("<h1>Homepage</h1>")
});

var scheduleTest = {
    title: "Homework",
    items: [
        {
            title: "Study",
            duration: "01:00"
        },
        {
            title: "French Worksheet",
            duration: "00:20"
        },
        {
            title: "Math Worksheet",
            duration: "00:30"
        }
    ]
}

app.get("/schedule/:id/view", (req, res) => {
    var id = req.params["id"];
    var schedule = scheduleTest;
    res.render("schedule_view", {schedule: schedule, id:id})
});

app.get("/schedule/:id/start", (req, res) => {
    var id = req.params["id"];
    var schedule = scheduleTest;
    res.render("schedule_start", {schedule: schedule, id:id});
});

app.get("/schedule/:id/go", (req, res) => {
    var id = req.params["id"];
    var schedule = scheduleTest;
    res.render("schedule_go", {schedule: schedule, id:id});
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});