const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/', quizController.getAllQuizzes);
router.post('/', quizController.createQuiz);
router.get('/:quizId', quizController.getQuizById);
router.put('/:quizId', quizController.updateQuiz);
router.delete('/:quizId', quizController.deleteQuiz);

module.exports = router;
