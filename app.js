import express from 'express';
import createError from 'http-errors';
import { configDotenv } from 'dotenv';
import router from './routes/users.js';
import dbConnection from './models/mongodb-conn.js';

// Determine which .env file to load based on NODE_ENV
const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

// Load the correct .env file
configDotenv({ path: `./${envFile}` });

//  * Get port from environment and store in Express.
const port = process.env.PORT || '3000';

var app = express();
dbConnection();
app.use('/', router);
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(
    `Express server running on port ${port}. Launch http://localhost:${port}`
  );
});
