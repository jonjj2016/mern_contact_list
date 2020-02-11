const express = require('express');
const { check } = require('express-validator');
const { protect } = require('../midleware/auth');
const { getAll, getOne, deleteOne, update, postOne } = require('../controllers/contactsController');
const router = express.Router();

router.route('/').get(protect, getAll).post([ check('name', 'Please add name').not().isEmpty() ], protect, postOne);
router.route('/:id').get(getOne).patch(update).delete(deleteOne);

module.exports = router;
