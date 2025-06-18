const admin = require('firebase-admin');

let credentials;

try {
  const decoded = Buffer.from(process.env.FIREBASE_CREDENTIALS_BASE64, 'base64').toString('utf8');

  // 🐞 Debug: check the PEM key format
  console.log('[firebaseConfig] Decoded base64:\n', decoded);

  credentials = JSON.parse(decoded);
} catch (err) {
  throw new Error("❌ FIREBASE_CREDENTIALS_BASE64 env not set or invalid.");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials)
  });
  console.log("[firebaseConfig] Firebase Admin initialized ✅");
}

module.exports = admin;
