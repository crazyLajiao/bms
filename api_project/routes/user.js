import express from 'express'
import User from '../controller/user/user'
const router = express.Router()

router.get('/list/add', User.addAllUser);
router.get('/list', User.getAllUser);
router.get('/count', User.getUserCount);

export default router