// // config/firebaseConfig.js
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getStorage } = require('firebase-admin/storage');
// const serviceAccount = require('../../lasop-test-firebase-adminsdk-ql9js-4913b23920.json');

// const app = initializeApp({
//   credential: cert(serviceAccount),
//   storageBucket: 'lasop-test.appspot.com', // Replace with your actual bucket name
// });

// // Export the storage instance
// const storage = getStorage(app);
// module.exports = { storage };


// config/firebaseConfig.js
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const keyPath = process.env.FIREBASE_KEY_PATH || './lasop-firebase.json';

if (!fs.existsSync(keyPath)) {
  throw new Error(`❌ Firebase service account file not found at ${keyPath}`);
}

const serviceAccount = require(path.resolve(keyPath));

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'lasop-test.appspot.com',
});

const storage = getStorage(app);
module.exports = { storage };
