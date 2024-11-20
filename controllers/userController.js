import { User } from '../models/user.js';
import asyncHandler from 'express-async-handler';

const user_list = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: GET /users`);
});

const user_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: GET /user/:id for User ${req.params.id}`);
});

export { user_list, user_detail };
