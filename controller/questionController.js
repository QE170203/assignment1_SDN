const Question = require('../models/question');

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new question
exports.createQuestion = async (req, res) => {
    const { text, options, keywords, correctAnswerIndex } = req.body;
    try {
        const newQuestion = new Question({ text, options, keywords, correctAnswerIndex });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update question by ID
exports.updateQuestion = async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(
            req.params.questionId,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.questionId);
        res.status(200).json({ message: 'Question deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
