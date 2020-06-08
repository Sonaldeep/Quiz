/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //  question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        //  options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
//  questions here
var questions = [
    new Question("The tallest building in the world is located in which city?", ["New york", "Hong Kong","Dubai", "Sydney"], "Dubai"),
    new Question("Which year was the original Toy Story film released in the US?", ["1995", "1992", "2002", "1999"], "1995"),
    new Question("How many hearts does an octopus have?", ["8", "2","5", "3"], "3"),
    new Question("Which former US first lady wrote a memoir-turned-Netflix documentary called Becoming?", ["Rosalynn Carter", "Michelle Obama", "Laura Bush", "Hillary Clinton"], "Michelle Obama"),
    new Question("Name the longest river in the UK.", ["River Severn", "River Tees","River Great", "River Avon"], "River Severn")
];
 
// creating quiz
var quiz = new Quiz(questions);
 
// displaying quiz
populate();

