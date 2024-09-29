const Quiz = require('../models/quiz');

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find().populate('questions');
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
    const { title, description, questions } = req.body;
    try {
        const newQuiz = new Quiz({ title, description, questions });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.quizId).populate('questions');
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update quiz by ID
exports.updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.quizId,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedQuiz);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete quiz by ID
exports.deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.quizId);
        res.status(200).json({ message: 'Quiz deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
