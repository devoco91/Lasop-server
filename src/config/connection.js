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
require('dotenv').config();
const mongoose = require('mongoose');

const connection = async ({ app }) => {
  const dbURL = process.env.MONGO_DB;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbURL, { autoIndex: true });
    console.log('✅ Connected to database');
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
  }
};

module.exports = connection;
