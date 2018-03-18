/**
 * [totallyTrivialTrivia object that holds all the functions of the game]
 * @type {Object}
 */
let intervalId;
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let clockRunning = false;
let $question = $('#question');
let $answerUl = $('.answers ul');
let $results = $('#results');
let $time = $('#time');
let $itemArea = $('.item-area');
let totallyTrivialTrivia = {
    count: 0,
    time: 31,
    numberOfQuestions: function() {
        return totallyTrivialTrivia.items.length;
    },
    "items": [{
        "question": "Mr. Feeny was the teacher in which popular TV show?",
        "answer": "Boy Meets World",
        "image": "assets/images/mrfeeny.jpg",
        "answers": [
            "Fresh Prince of Bel-Air",
            "Saved By The Bell",
            "Boy Meets World",
            "Beverly Hills, 90210"
        ]
    }, {
        "question": "Britney Spears' first song was . . . ",
        "answer": "Baby One More Time",
        "image": "assets/images/britneyspears.jpg",
        "answers": [
            "You Drive Me Crazy",
            "Toxic",
            "Sometimes",
            "Baby One More Time"
        ]
    }, {
        "question": "What was Tommy's last name in 'Rugrats?'",
        "answer": "Pickles",
        "image": "assets/images/tommypickles.jpg",
        "answers": [
            "DeVille",
            "Finster",
            "Pickles"
        ]
    }, {
        "question": "Who wrote the book series 'Goosebumps?'",
        "answer": "R.L. Stein",
        "image": "assets/images/rlstein.jpg",
        "answers": [
            "Dav Pilkey",
            "R.L. Stein",
            "Lois Lowry"
        ]
    }, {
        "question": "The original flavour of the Dunkaroos cookies was . . .",
        "answer": "Cinnamon",
        "image": "assets/images/dunkaroos.jpg",
        "answers": [
            "Chocolate",
            "Vanilla",
            "Cinnamon"
        ]
    }, {
        "question": "What flavour soda was Surge?",
        "answer": "Citrus",
        "image": "assets/images/surge.png",
        "answers": [
            "Grapefruit",
            "Orange",
            "Citrus"
        ]
    }, {
        "question": "'Tamagotchi' is a Japanese portmanteau of what two words?",
        "answer": "Egg + Watch",
        "image": "assets/images/Tamagotchi.jpeg",
        "answers": [
            "Egg + Watch",
            "Egg + Computer",
            "Egg + Pet",
            "Egg + Friend"
        ]
    }, {
        "question": "Amanda Bynes got her start on the Nickelodeon show . . .",
        "answer": "All That",
        "image": "assets/images/amandabynes.jpg",
        "answers": [
            "All That",
            "The Wild Thornberrys",
            "Unfabulous",
            "The Secret World of Alex Mack"
        ]
    }, {
        "question": "'You are my fire, the one desire' are the first words of which Backstreet Boys' song?",
        "answer": "I Want It That Way",
        "image": "assets/images/backstreet.jpg",
        "answers": [
            "Drowning",
            "Quit Playing Games",
            "I Want It That Way",
            "Everybody"
        ]
    }, {
        "question": "Rocko from 'Rocko's Modern Life' was what kind of animal?",
        "answer": "Wallaby",
        "image": "assets/images/racko.png",
        "answers": [
            "Wallaby",
            "Dog",
            "Armadillo",
            "Kangaroo"
        ]
    }, {
        "question": "Which company made Oreo O's?",
        "answer": "Post",
        "image": "assets/images/oreo.jpeg",
        "answers": [
            "Post",
            "General Mills",
            "Kellog's"
        ]
    }, {
        "question": "Jagged Little Pill is the album by which singer?",
        "answer": "Alanis Morissette",
        "image": "assets/images/alanis.jpg",
        "answers": [
            "Mariah Carey",
            "Christina Aguilera",
            "Whitney Houston",
            "Alanis Morissette"
        ]
    }, {
        "question": "In Spice Girls, Mel B was known as . . .",
        "answer": "Scary Spice",
        "image": "assets/images/Scary-Spice.jpg",
        "answers": [
            "Sporty Spice",
            "Posh Spice",
            "Scary Spice"
        ]
    }, {
        "question": "Which of the following was NOT a player in Super Mario Cart?",
        "answer": "Crash",
        "image": "assets/images/Crash.png",
        "answers": [
            "Crash",
            "Toad",
            "Luigi",
            "Princess Peach"
        ]
    }, {
        "question": "'White Mystery' was a flavor of which candy?",
        "answer": "Airheads",
        "image": "assets/images/airheads.jpg",
        "answers": [
            "Airheads",
            "Laffy Taffy",
            "Warheads",
            "Dums Dums"
        ]
    }, {
        "question": "Full House took place in which city?",
        "answer": "San Francisco",
        "image": "assets/images/fullhouse.jpeg",
        "answers": [
            "Chicago",
            "San Francisco",
            "Los Angeles",
            "New York City"
        ]
    }],
    /**
     * [start adds the start button and event handler to that start button.
     * Click of the start button runs functions to show the next question,
     * show the next questions answer choices, and start the timer]
     */
    start: function() {
        $itemArea.append('<button class="start">Start</button>');

        $(document.body).on('click', '.start', function() {
            $(this).remove();
            totallyTrivialTrivia.showQuestion();
        });
    },
    /**
     * [showAnswerChoices adds the answer choices to the page]
     */
    showAnswerChoices: function() {
        let answerChoices = totallyTrivialTrivia.items[totallyTrivialTrivia.count].answers,
            html = '';

        answerChoices.forEach(function(element) {
            html += `
                <li class="answer-choice">` + element + `</li>
            `;
        });
        $answerUl.empty().append(html);
    },
    /**
     * [getAnswer gets the current answer]
     */
    getAnswer: function() {
        let answer = totallyTrivialTrivia.items[totallyTrivialTrivia.count].answer;
        return answer;
    },
    /**
     * [getImage gets the current image]
     */
    getImage: function() {
        let image = totallyTrivialTrivia.items[totallyTrivialTrivia.count].image;
        return image;
    },
    /**
     * [checkAnswer stops the timer, and checks if the user was correct or not]
     * @param  {[string]} choice [user answer selected]
     */
    checkAnswer: function(choice) {
        let answer = totallyTrivialTrivia.getAnswer(),
            image = totallyTrivialTrivia.getImage();
        if (answer === choice) {
            totallyTrivialTrivia.userWasCorrect(answer);
        } else {
            totallyTrivialTrivia.userWasNotCorrect(answer, image);
        }
    },
    /**
     * [outOfTime When the user is out of time, this function is ran]
     */
    outOfTime: function() {
        let answer = totallyTrivialTrivia.getAnswer(),
            image = totallyTrivialTrivia.getImage(),
            html = `
            <div>Out of time!</div>
            <div>The correct answer was: ` + answer + `</div>
            <div><img src="` + image + `"></div>
        `;
        totallyTrivialTrivia.count++;
        unanswered++;
        $answerUl.empty();
        $question.html(html);
        totallyTrivialTrivia.showTriviaQuestionAgain();
    },
    /**
     * [userWasCorrect empty the list of answers, replace the question div with the
     *  messaging and image]
     * @param  {[string]} ans [answer]
     */
    userWasCorrect: function(ans) {
        let image = totallyTrivialTrivia.getImage(),
            html = `
            <div>Correct!</div>
            <div><img src="` + image + `"></div>
        `;
        $answerUl.empty();
        $question.html(html);
        correct++;
        totallyTrivialTrivia.count++;
        totallyTrivialTrivia.stop();
        totallyTrivialTrivia.showTriviaQuestionAgain();
    },
    /**
     * [userWasNotCorrect if the user was not correct, display a div, increment the 
     * incorrect count, increment the total count, stop the timer, and play another question]
     */
    userWasNotCorrect: function(ans, img) {
        let image = img,
            answer = ans,
            html = `
            <div>Nope!</div>
            <div>The correct answer was: ` + answer + `</div>
            <div><img src="` + image + `"></div>
        `;
        $answerUl.empty();
        $question.html(html);
        incorrect++;
        totallyTrivialTrivia.count++;
        totallyTrivialTrivia.stop();
        totallyTrivialTrivia.showTriviaQuestionAgain();
    },
    /**
     * [showTriviaQuestionAgain show another question in 5 seconds]
     */
    showTriviaQuestionAgain: function() {
        setTimeout(totallyTrivialTrivia.showQuestion, 5000);
    },
    /**
     * [showQuestion creates the div and adds it to the page.]
     */
    showQuestion: function() {
        totallyTrivialTrivia.time = 31;
        var numOfQuestions = totallyTrivialTrivia.numberOfQuestions();
        if (numOfQuestions === totallyTrivialTrivia.count) {
            totallyTrivialTrivia.displayResults();
        } else {
            var question = totallyTrivialTrivia.items[totallyTrivialTrivia.count].question;
            var html = `
                <div>` + question + `</div>
            `;

            $question.html(html);
            totallyTrivialTrivia.showAnswerChoices();
            totallyTrivialTrivia.timer();
            if (!clockRunning) {
                intervalId = setInterval(function() {
                    totallyTrivialTrivia.timer();
                }, 1000);
                clockRunning = true;
            }
        }
    },
    /**
     * [timer set up the timer to decrement from 60 seconds]
     */
    timer: function() {
        totallyTrivialTrivia.time--;
        let currentTime = totallyTrivialTrivia.timeConverter(totallyTrivialTrivia.time);
        if (currentTime === '00:00') {
            totallyTrivialTrivia.outOfTime();
            totallyTrivialTrivia.stop();
        }

        $time.html(currentTime);
    },
    /**
     * [stop clear the interval and set clock running to false]
     */
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },
    /**
     * [timeConverter converts the time to 00:00]
     * @param  {[num]} t [the current time]
     */
    timeConverter: function(t) {
        let minutes = Math.floor(t / 60),
            seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
    /**
     * [displayResults add the final accumulated results to the page]
     */
    displayResults: function() {
        let html = `
            <div>All done, heres how you did!</div>
            <div>Correct Answers: ` + correct + `</div>
            <div>Incorrect Answers: ` + incorrect + `</div>
            <div>Unanswered: ` + unanswered + `</div>
            <div class="start-over">Start Over?</div>
        `;
        $('#question, .answers ul').empty();
        $results.append(html);
    },
    /**
     * [reset resets variables to zero]
     */
    reset: function() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    },
    /**
     * [eventHandlers add event handlers to elements on the page]
     */
    eventHandlers: function() {
        $(document.body).on('click', '.answer-choice', function() {
            let userChoice = $(this).text();
            totallyTrivialTrivia.checkAnswer(userChoice);
        });
        $(document.body).on('click', '.start-over', function() {
            totallyTrivialTrivia.count = 0;
            $results.empty();
            totallyTrivialTrivia.reset();
            totallyTrivialTrivia.showQuestion();
        });
    },
    /**
     * [init initalizes the functions that need to be started]
     */
    init: function() {
        totallyTrivialTrivia.start();
        totallyTrivialTrivia.eventHandlers();
    }
}


totallyTrivialTrivia.init();