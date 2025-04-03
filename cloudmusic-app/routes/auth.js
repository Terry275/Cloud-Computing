const express = require('express');
const router = express.Router();

// Dummy login check
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@example.com' && password === 'password123') {
    res.json({ success: true, username: 'admin' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
