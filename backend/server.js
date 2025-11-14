require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db');
const events = require('./src/routes/events');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', events);

const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch(err => {
  console.error('DB connect error', err);
});
