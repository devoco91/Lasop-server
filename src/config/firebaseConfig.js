const admin = require('firebase-admin');

let credentials;

try {
  credentials = JSON.parse(
    Buffer.from(process.env.FIREBASE_CREDENTIALS_BASE64, 'base64').toString('utf8')
  );
} catch (err) {
  throw new Error("❌ FIREBASE_CREDENTIALS_BASE64 env not set or invalid.");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials)
  });
}

module.exports = admin;
