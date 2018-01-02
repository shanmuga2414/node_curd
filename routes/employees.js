const express = require('express');
const router = express.Router();
const employee = require('../controllers/EmployeeController.js');

router.get('/', employee.list);
router.get('/create', employee.create);
router.post('/save', employee.save);
router.post('/update/:id', employee.update);
router.get('/show/:id', employee.show);
router.get('/delete/:id', employee.delete);
router.get('/edit/:id', employee.edit);

module.exports = router;
