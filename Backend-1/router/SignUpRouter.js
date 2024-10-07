const express = require('express');
const SignupController = require('../controller/SignupController')

const router = express.Router();

router.post('/up', SignupController.signUp);
router.post('/lo', SignupController.login);
router.post('/out', SignupController.logout)

module.exports = router;