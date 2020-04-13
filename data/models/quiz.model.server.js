const mongoose = require('mongoose');
const quizWidgetSchema = require('./quiz.schema.server');
const quizWidgetModel = mongoose.model('QuizWidgetModel', quizWidgetSchema);

module.exports = quizWidgetModel;