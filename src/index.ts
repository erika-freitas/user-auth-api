import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Server
app.listen(3000, () => {
  console.log('App running on port 3000');
});

// App config (global middlewares)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(statusRoute);
app.use(usersRoute);
app.use(authorizationRoute);

// Error handler
app.use(errorHandler)