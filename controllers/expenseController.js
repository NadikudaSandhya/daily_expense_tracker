const Expense = require('../models/Expense');
const { generateBalanceSheet } = require('../utils/balanceSheet');

exports.addExpense = async (req, res) => {
    const { userId, totalAmount, splitMethod, participants } = req.body;
    try {
        const expense = new Expense({
            userId,
            totalAmount,
            splitMethod,
            participants
        });
        await expense.save();

        res.status(201).json({ message: 'Expense added successfully', expense });
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense', error });
    }
};

exports.getUserExpenses = async (req, res) => {
    const userId = req.params.userId;
    try {
        const expenses = await Expense.find({ userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user expenses', error });
    }
};

exports.downloadBalanceSheet = async (req, res) => {
    const userId = req.params.userId;
    try {
        const filePath = await generateBalanceSheet(userId);
        res.download(filePath);
    } catch (error) {
        res.status(500).json({ message: 'Error generating balance sheet', error });
    }
};
