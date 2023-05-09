const express = require('express');
const app = express();
const vhost = require('vhost');



// Create subdomain dynamically
app.use('/:subdomain', (req, res, next) => {
  const subdomain = req.params.subdomain;
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send(`Hello from subdomain ${subdomain}`);
  });
  app.use(vhost(`${subdomain}.localhost:3000`, router));
  next();
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


