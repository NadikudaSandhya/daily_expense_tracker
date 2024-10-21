const express = require('express');
const { addExpense, getUserExpenses, downloadBalanceSheet } = require('../controllers/expenseController');

const router = express.Router();

router.post('/', addExpense);
router.get('/:userId', getUserExpenses);
router.get('/:userId/balance-sheet', downloadBalanceSheet);

module.exports = router;
