const express = require("express");
const cors = require("cors");
const db = require("./models");
const food = require("./routes/foodRoute");
const order = require("./routes/orderRoute");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync()
    .then(() => {
        console.log("Synced DB.");
    })
    .catch((err) => {
        console.log("Failed to sync DB: " + err.message);
    });


// To drop tables and resync DB on each npm run start, use below instead

/* 

    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    }); 

*/


app.use("/api/v1/food", food);
app.use("/api/v1/order", order);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});