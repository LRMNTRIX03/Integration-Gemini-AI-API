const express = require("express");
const aiRoutes = require("./routes/aiRoutes");



const app = express();
app.use(express.json());



app.use("/ai", aiRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;
