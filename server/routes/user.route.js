import express from 'express';

import {
    test,
    getUser,
    updateUser,
    deleteUser,
}from'../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.get('/:id',getUser);