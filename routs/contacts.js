const express = require('express');
const { getAll, getOne, deleteOne, update, postOne } = require('../controllers/contactsController');
const router = express.Router();

router.route('/').get(getAll).post(postOne);
router.route('/:id').get(getOne).patch(update).delete(deleteOne);

module.exports = router;
