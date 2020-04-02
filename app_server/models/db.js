const mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production')
{
  dbURI = process.env.MONGODB_URI;
  console.log('Production Mode');
}
const readLine = require('readline');

mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

mongoose.connection.on('connected', () =>
{
    console.log('Mongoose connected');
});
  
mongoose.connection.on('error', err =>
{
    console.log('Mongoose connection error:', err);
});
  
mongoose.connection.on('disconnected', () =>
{
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) =>
{
  mongoose.connection.close( () =>
  {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () =>
{
  gracefulShutdown('nodemon restart', () =>
  {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', () =>
{
  gracefulShutdown('app termination', () =>
  {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', () =>
{
  gracefulShutdown('Heroku app shutdown', () =>
  {
    process.exit(0);
  });
});

require('./locations');