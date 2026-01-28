// Creation and configuration of the Express APP

const express = require("express");
const aiRoutes = require("./routes/aiRoutes");





const app = express();
app.use(express.json());


// Route configuration
// Example:
// const apiRoutes = require('./routes/api.routes');
// app.use('/api', apiRoutes);

app.use("/ai", aiRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;
