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
require('dotenv').config();
const mongoose = require('mongoose');

const connection = ({ app, port }) => {
  const dbURL = process.env.MONGO_DB;

  mongoose.set("strictQuery", true);
  mongoose.connect(dbURL, { autoIndex: true })
    .then(() => {
      app.listen(port || process.env.PORT || 5000);
      console.log('✅ Connected to database');
      console.log('🚀 Server running on port ' + (port || process.env.PORT || 5000));
    })
    .catch((err) => {
      console.error('❌ Database connection error:', err.message);
    });
};

module.exports = connection;
