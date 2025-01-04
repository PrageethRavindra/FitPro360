const { db } = require('../../firebase/firestore');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const snapshot = await db.collection('packages').get();
  const packages = snapshot.docs.map(doc => doc.data());
  res.json(packages);
});

module.exports = router;
