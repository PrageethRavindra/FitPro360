const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };
