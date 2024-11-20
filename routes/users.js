import express from 'express';
import * as user_controller from '../controllers/userController.js';
var router = express.Router();

router.get('/users', user_controller.user_list);

router.get('/user/:id', user_controller.user_detail);

export default router;
