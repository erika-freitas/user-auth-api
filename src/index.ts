import express from 'express';
import jwtBearerAuthenticationMiddleware from './middlewares/jwt-bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// App config (global middlewares)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(statusRoute);
app.use(jwtBearerAuthenticationMiddleware, usersRoute);
app.use(authorizationRoute);

// Error handler
app.use(errorHandler)

// Server
app.listen(3000, () => {
  console.log('App running on port 3000');
});