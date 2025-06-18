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
// src/config/firebaseConfig.js
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

const raw = process.env.FIREBASE_CREDENTIALS;
console.log("[firebaseConfig] First 80 chars of FIREBASE_CREDENTIALS:", raw?.slice(0, 80));

if (!raw) {
  throw new Error("❌ FIREBASE_CREDENTIALS env not set.");
}

let serviceAccount = JSON.parse(raw);

// Fix only the private_key field
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "lasop-test.appspot.com",
});

const storage = getStorage(app);
module.exports = { storage };
