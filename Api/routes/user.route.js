import pkg from 'body-parser';
const { json } = pkg;
import express from 'express'
import { test } from '../controllers/user.controller.js';
const router=express.Router();
router.get('/test',test
);

export default router;