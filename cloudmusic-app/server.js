const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

// 1. Serve all static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// 2. Define the root route to the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});



// 3. Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
