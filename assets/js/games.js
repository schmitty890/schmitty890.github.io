let words = {
        numberOfCategories: function() {
            let catNum = 0;
            for (let key of Object.keys(words.category)) {
                catNum++;
            }
            return catNum;
        },
        numberOfQuestions: function() {
            let questionNum = 0;
            for (let key of Object.keys(words.category)) {
                for (var i = 0; i < words.category[key].length; i++) {
                    questionNum++;
                }
            }
            return questionNum;
        },
        "category": {
            "html": [{
                    "answer": "Hyper",
                    "hints": [
                        "_____ Text Markup Language"
                    ]
                },
                {
                    "answer": "Inline",
                    "hints": [
                        "What elements are normally displayed without starting a new line."
                    ]
                },
                {
                    "answer": "Block",
                    "hints": [
                        "What elements are normally displayed with starting a new line."
                    ]
                },
                {
                    "answer": "Required",
                    "hints": [
                        "In HTML, which attribute is used to specify that an input field must be filled out?"
                    ]
                }
            ],
            "css": [{
                    "answer": "CSS",
                    "hints": [
                        "Cascading Style Sheets is known as ___"
                    ]
                },
                {
                    "answer": "head",
                    "hints": [
                        "Where in an HTML document is the correct place to refer to an external style sheet?"
                    ]
                },
                {
                    "answer": "style",
                    "hints": [
                        "Which HTML attribute is used to define inline styles?"
                    ]
                },
                {
                    "answer": "color",
                    "hints": [
                        "Which CSS property is used to change the text color of an element?"
                    ]
                },
                {
                    "answer": "id",
                    "hints": [
                        "The following selects the __ of demo. #demo?"
                    ]
                },
                {
                    "answer": "class",
                    "hints": [
                        "The following selects the _____ of demo. .demo?"
                    ]
                },
                {
                    "answer": "comma",
                    "hints": [
                        "You group selectors with a _____."
                    ]
                },
                {
                    "answer": "static",
                    "hints": [
                        "What is the default value of the position property?"
                    ]
                }
            ],
            "javascript": [{
                    "answer": "script",
                    "hints": [
                        "Inside which HTML element do we put a JavaScript?"
                    ]
                },
                {
                    "answer": "alert",
                    "hints": [
                        "The following is a what box.  alert('Hello World');"
                    ]
                },
                {
                    "answer": "calls",
                    "hints": [
                        "The following _____ a function named 'myFunction'.  myFunction()?"
                    ]
                },
                {
                    "answer": "for",
                    "hints": [
                        "What type of loop iterates?"
                    ]
                },
                {
                    "answer": "Array",
                    "hints": [
                        "var colors = ['red', 'green', 'blue']; this is an _____."
                    ]
                },
                {
                    "answer": "onclick",
                    "hints": [
                        "Which event occurs when the user clicks on an HTML element?"
                    ]
                },
                {
                    "answer": "declares",
                    "hints": [
                        "var carName; this _______ a javascript variable."
                    ]
                }
            ],
            "bootstrap": [{
                    "answer": "fixed",
                    "hints": [
                        ".container class provides a responsive _____ width container?"
                    ]
                },
                {
                    "answer": "columns",
                    "hints": [
                        "The Bootstrap grid system is based on 12 ________?"
                    ]
                },
                {
                    "answer": "jumbotron",
                    "hints": [
                        "Which class is used to create a big box for calling extra attention?"
                    ]
                },
                {
                    "answer": "Carousel",
                    "hints": [
                        "Which plugin is used to cycle through elements, like a slideshow?"
                    ]
                },
                {
                    "answer": "Tooltip",
                    "hints": [
                        "Which plugin is used to create a tooltip?"
                    ]
                }
            ],
            "jQuery": [{
                    "answer": "Library",
                    "hints": [
                        "jQuery is a JavaScript _______"
                    ]
                },
                {
                    "answer": "selectors",
                    "hints": [
                        "jQuery uses CSS __________ to select elements?"
                    ]
                },
                {
                    "answer": "jQuery",
                    "hints": [
                        "the $ sign is a shortcut for ________."
                    ]
                },
                {
                    "answer": "Client",
                    "hints": [
                        "Is jQuery a library for client scripting or server scripting?"
                    ]
                },
                {
                    "answer": "JavaScript",
                    "hints": [
                        "What scripting language is jQuery written in?"
                    ]
                }
            ],
            "JSON": [{
                    "answer": "colon",
                    "hints": [
                        "Keys and values are separated by a ______."
                    ]
                },
                {
                    "answer": "comma",
                    "hints": [
                        "Each key/value pair is separated by a _____."
                    ]
                },
                {
                    "answer": "curly",
                    "hints": [
                        "JSON objects are surrounded by _____ braces {}."
                    ]
                },
                {
                    "answer": "dot",
                    "hints": [
                        "You can access the object values by using ___ notation:"
                    ]
                },
                {
                    "answer": "JavaScript",
                    "hints": [
                        "What scripting language is jQuery written in?"
                    ]
                }
            ],
            "students": [{
                    "answer": "Adam",
                    "hints": [
                        "Lead Sales Engineer at Validic",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/adam.png"
                },
                {
                    "answer": "Adnan",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/adnan.png"
                },
                {
                    "answer": "Allison",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/allison.png"
                },
                {
                    "answer": "Anthony",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/anthony.png"
                },
                {
                    "answer": "Benjamin",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/benjamin.png"
                },
                {
                    "answer": "Berk",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/berk.png"
                },
                {
                    "answer": "Chelsea",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/chelsea.png"
                },
                {
                    "answer": "Chris",
                    "hints": [
                        "TA / Web Dev",
                        "TA in the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/chris.png"
                },
                {
                    "answer": "Cory",
                    "hints": [
                        "TA",
                        "TA in the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/cory.png"
                },
                {
                    "answer": "Edward",
                    "hints": [
                        "Ned",
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/edward.png"
                },
                {
                    "answer": "Emily",
                    "hints": [
                        "Music Teacher",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/emily.png"
                },
                {
                    "answer": "Eric",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/eric.png"
                },
                {
                    "answer": "Eric",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/eric-1.png"
                },
                {
                    "answer": "Faith",
                    "hints": [
                        "Registered Nurse Always Learning",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/faith.png"
                },
                {
                    "answer": "Greg",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/greg.png"
                },
                {
                    "answer": "Henry",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/henry.png"
                },
                {
                    "answer": "Jake",
                    "hints": [
                        "Logistics",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/jake.png"
                },
                {
                    "answer": "Jamie",
                    "hints": [
                        "Design admin assistant at Glen Raven"
                    ],
                    "image": "assets/images/jamie.png"
                },
                {
                    "answer": "Jason",
                    "hints": [
                        "The guy who made this",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/jason.png"
                },
                {
                    "answer": "Jeannie",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/jeannie.png"
                },
                {
                    "answer": "Jiban",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/jiban.png"
                },
                {
                    "answer": "Joe",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/joe.png"
                },
                {
                    "answer": "John",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/john.png"
                },
                {
                    "answer": "Joselyn",
                    "hints": [
                        "Professional Customer at Starbucks",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/joselyn.png"
                },
                {
                    "answer": "Josh",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/josh.png"
                },
                {
                    "answer": "Joshua",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/joshua.png"
                },
                {
                    "answer": "Justin",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/justin.png"
                },
                {
                    "answer": "Justin",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/justin.png"
                },
                {
                    "answer": "Jyothsna",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/jyothsna.png"
                },
                {
                    "answer": "Kevin",
                    "hints": [
                        "substitute"
                    ],
                    "image": "assets/images/kevin.png"
                },
                {
                    "answer": "Lisa",
                    "hints": [
                        "Student Success Manager"
                    ],
                    "image": "assets/images/lisa.png"
                },
                {
                    "answer": "Lucy",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/lucy.png"
                },
                {
                    "answer": "Luis",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/luis.png"
                },
                {
                    "answer": "Marcus",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/marcus.png"
                },
                {
                    "answer": "Maria",
                    "hints": [
                        "TA"
                    ],
                    "image": "assets/images/maria.png"
                },
                {
                    "answer": "Mark",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/mark.png"
                },
                {
                    "answer": "Matthew",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/matthew.png"
                },
                {
                    "answer": "Matthew",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/matthew-1.png"
                },
                {
                    "answer": "Mitchell",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/mitchell.png"
                },
                {
                    "answer": "Neeni",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/neeni.png"
                },
                {
                    "answer": "Nehal",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/nehal.png"
                },
                {
                    "answer": "Paul",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/paul.png"
                },
                {
                    "answer": "Rishikesh",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/rishikesh.png"
                },
                {
                    "answer": "Rob",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/rob.png"
                },
                {
                    "answer": "Roderick",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/roderick.png"
                },
                {
                    "answer": "Salem",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/salem.png"
                },
                {
                    "answer": "Sharon",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/sharon.png"
                },
                {
                    "answer": "Shreedhar",
                    "hints": [
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/shreedhar.png"
                },
                {
                    "answer": "Stacy",
                    "hints": [
                        "Photographer/Maker",
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/stacy.png"
                },
                {
                    "answer": "Stephen",
                    "hints": [
                        "M/W Instructor",
                        "Teaches the Monday/Wednesday class"
                    ],
                    "image": "assets/images/stephen.png"
                },
                {
                    "answer": "Steve",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/steve.png"
                },
                {
                    "answer": "Taylor",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/taylor.png"
                },
                {
                    "answer": "Tim",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/tim.png"
                },
                {
                    "answer": "Tj",
                    "hints": [
                        "Currently I'm in retail management, hopefully transitioning to a coding profession shortly.",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/tj.png"
                },
                {
                    "answer": "Tommy",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/tommy.png"
                },
                {
                    "answer": "Tony",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/tony.png"
                },
                {
                    "answer": "Travis",
                    "hints": [
                        "Operations Specialist @ Sprint",
                        "In the Monday/Wednesday class"
                    ],
                    "image": "assets/images/travis.png"
                },
                {
                    "answer": "Waleed",
                    "hints": [
                        "IT Analyst",
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/waleed.png"
                },
                {
                    "answer": "Will",
                    "hints": [
                        "code stuff",
                        "Teaches the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/will.png"
                },
                {
                    "answer": "William",
                    "hints": [
                        "In the Tuesday/Thursday class"
                    ],
                    "image": "assets/images/william.png"
                }
            ]
        }
    },
    userChoice,
    selection = [],
    answer = [],
    wins = 0,
    guesses = 6,
    emptyAnswer = [],
    word = [],
    lettersGuessed = [],
    winningAudio = new Audio("assets/audio/yay.mp3"),
    wrongGuess = new Audio("assets/audio/wrong.mp3"),
    length = Object.keys(words.category),
    categoryPicked = Object.keys(words.category),
    hint = document.getElementById('hint'),
    pic = document.getElementById('pic'),
    winLoseIndicator = document.getElementById("win-lose-indicator"),
    categoryNumber = document.getElementById("category-num"),
    questionNumber = document.getElementById("question-num"),
    hangmanImage = document.getElementById('hangman-image'),
    dialog = document.getElementById('dialog'),
    hintPic = document.getElementById('hint-pic');

const hangman = {

    startGame: () => {
        //reset variables
        selection = [],
            answer = [],
            guesses = 6,
            emptyAnswer = [],
            word = [],
            lettersGuessed = [],
            categoryPicked = Object.keys(words.category);

        //define variables to get a random question from a random category in the json object above


        //get random category and selection
        categoryPicked = categoryPicked[Math.floor(Math.random() * categoryPicked.length)];
        selection = words.category[categoryPicked][Math.floor(Math.random() * words.category[categoryPicked].length)];

        //populate emptyAnswer array
        for (let i = 0; i < selection.answer.length; i++) {
            emptyAnswer.push('_ ');
        }

        categoryNumber.innerHTML = words.numberOfCategories();
        questionNumber.innerHTML = words.numberOfQuestions();
        winLoseIndicator.classList.remove("winner");
        winLoseIndicator.classList.remove("lose");
        winLoseIndicator.innerHTML = '';

        hangmanImage.src = "assets/images/Hangman-0.png";

        dialog.innerHTML = 'category: <span id="category"></span>. There are <span id="hint-number">0</span> hints for this word!';
        document.getElementById('hint-number').innerHTML = selection.hints.length;
        document.getElementById('category').innerHTML = categoryPicked;
        hintPic.src = '';
        pic.removeAttribute("disabled");
        if (typeof selection.image !== 'string') {
            pic.setAttribute("disabled", "disabled");
        }

        hint.addEventListener("click", function() {
            randomHint = selection.hints[Math.floor(Math.random() * selection.hints.length)];
            document.getElementById('dialog').innerHTML = randomHint;
        });

        pic.addEventListener("click", function() {
            document.getElementById('hint-pic').src = selection.image;
        });
        word = emptyAnswer.join("");
        hangman.displayData();
    },
    displayData: () => {
        document.getElementById("word").innerHTML = word;
        document.getElementById("game-stats").innerHTML =
            "Letters Guessed: " + lettersGuessed + "<br>" +
            "Guesses Left: " + guesses + "<br>" +
            "Wins: " + wins;
    },
    checkUserGuess: (guess) => {
        let match = false;
        //if the user guess is a valid letter
        if (guess.match(/^[a-zA-Z]*$/)) {
            for (let i = 0; i < selection.answer.length; i++) {
                if ((guess.toLowerCase()) === (selection.answer[i].toLowerCase())) {
                    emptyAnswer[i] = guess;
                    match = true;
                }
            }
            if (!match) {
                wrongGuess.play();
                guesses--;
                lettersGuessed.push(guess);
                hangman.checkImageChange(guesses);
            }
            word = emptyAnswer.join("");
        } else {
            alert('enter a valid character');
        }
        hangman.displayData();
    },
    checkWin: () => {
        //check if they have won
        JSON.stringify(selection);
        if ((word.toLowerCase()) === (selection.answer.toLowerCase())) {
            document.getElementById('win-lose-indicator').classList.add('winner');
            document.getElementById('win-lose-indicator').innerHTML = 'You Win!';
            winningAudio.play();
            wins++;
            hangman.displayData();
            // //ask if the want to play again
            setTimeout(function() {
                hangman.askToPlayAgain();
            }, 3000);
        }
        if (guesses === 0) {
            document.getElementById('win-lose-indicator').classList.add('lose');
            document.getElementById('win-lose-indicator').innerHTML = 'You Lose!';
            alert("You lose. How could you not guess " + selection.answer + "!");
            setTimeout(function() {
                hangman.askToPlayAgain();
            }, 2000);
        }
    },
    askToPlayAgain: () => {
        let continuePlay = confirm("Would you like to play again?");
        if (continuePlay) {
            hangman.startGame();
        }
    },
    checkImageChange: (count) => {
        switch (count) {
            case 6:
                document.getElementById("hangman-image").src = "assets/images/Hangman-0.png";
                break;
            case 5:
                document.getElementById("hangman-image").src = "assets/images/Hangman-1.png";
                break;
            case 4:
                document.getElementById("hangman-image").src = "assets/images/Hangman-2.png";
                break;
            case 3:
                document.getElementById("hangman-image").src = "assets/images/Hangman-3.png";
                break;
            case 2:
                document.getElementById("hangman-image").src = "assets/images/Hangman-4.png";
                break;
            case 1:
                document.getElementById("hangman-image").src = "assets/images/Hangman-5.png";
                break;
            case 0:
                document.getElementById("hangman-image").src = "assets/images/Hangman-6.png";
                break;
            default:
                document.getElementById("hangman-image").src = "assets/images/Hangman-6.png";
        }
    }
};
$(function() {
    hangman.startGame();
    document.onkeyup = function(event) {
        userChoice = event.key;
        hangman.checkUserGuess(userChoice);
        hangman.checkWin();
    }
});