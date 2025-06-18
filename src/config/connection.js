// require('dotenv').config();
// const mongoose = require('mongoose');

// const connection = ({ app, port }) => {
//     const dbURL = process.env.MONGO_DB

//     mongoose.connect(dbURL, { autoIndex: true })
//     .then(() => {
//         app.listen(port);
//         console.log('Connected to database');
//         console.log('Server running on port ' + port);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// module.exports = connection



// src/config/connection.js
// src/config/connection.js
// src/config/connection.js
const mongoose = require("mongoose");

const connection = () => {
  if (!process.env.MONGO_DB) throw new Error("MONGO_DB is not set");
  mongoose
    .connect(process.env.MONGO_DB, { strictQuery: true })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
      console.error("❌ DB connection error:", err.message);
      process.exit(1);
    });
};

module.exports = connection;
