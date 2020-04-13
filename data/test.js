require("./db")();

const universityDao = require('./daos/university.dao.server');


universityDao.truncateDatabase()
    .then(() => universityDao.populateDatabase())
    .then(() => universityDao.findAllStudents())
    .then(() => testStudentsInitialCount())
    .then(() => testQuestionsInitialCount())
    .then(() => testAnswersInitialCount())
    .then(() => testDeleteAnswer())
    .then(() => testDeleteQuestion())
    .then(() => testDeleteStudent());


const testStudentsInitialCount = () => {
    return universityDao.findAllStudents()
        .then(result => console.log("Students Initial Count: " + result.length))
};

const testQuestionsInitialCount = () => {
    return universityDao.findAllQuestions()
        .then(result => console.log("Questions Initial Count: " + result.length))
};

const testAnswersInitialCount = () => {
    return universityDao.findAllAnswers()
        .then(result => console.log("Answers Initial Count: " + result.length))
};

const testDeleteAnswer = () => {
    universityDao.deleteAnswer(890)
        .then(() => universityDao.findAllAnswers())
        .then(allAnswers => {
            console.log("Total Number Of Answers After Deletion: " + allAnswers.length);
            return universityDao.findAnswersByStudent(234)
        })
        .then(bobsAnswer => console.log("Total Number Of Bob's Answer After Deletion: " + bobsAnswer.length))
};

const testDeleteQuestion = () => {
    universityDao.deleteQuestion(321)
        .then(() => universityDao.findAllQuestions())
        .then(allQuestions => console.log("Total Number Of Questions After Deletion: " + allQuestions.length))
};

const testDeleteStudent = () => {
    universityDao.deleteStudent(234)
        .then(() => universityDao.findAllStudents())
        .then(allStudents => console.log("Total Number Of Students After Deletion: " + allStudents.length))
};