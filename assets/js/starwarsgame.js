let attackPower = 0,
    health = 0,
    counterAttackPower = 0,
    $fightLog = $('#fight-log'),
    $userSelectedCharacterSection = $('#user-selected-character-section'),
    $defenderSection = $('#defender-section'),
    $userCharacter = $('#user-character'),
    $enemySection = $('#enemy-section');
let starWars = {
    characters: [{
            name: "Obi-Wan Kenobi",
            image: "assets/images/ben-kenobi.png",
            healthPoints: 120,
            attackPower: 13,
            counterAttackPower: 12
        },
        {
            name: "Luke Skywalker",
            image: "assets/images/luke-skywalker.jpeg",
            healthPoints: 100,
            attackPower: 10,
            counterAttackPower: 15
        },
        {
            name: "Darth Vader",
            image: "assets/images/darth-vader.jpeg",
            healthPoints: 140,
            attackPower: 14,
            counterAttackPower: 20
        },
        {
            name: "Darth Maul",
            image: "assets/images/darth-sidious.jpg",
            healthPoints: 130,
            attackPower: 15,
            counterAttackPower: 18
        }
    ],
    resetVars: () => {
        attackPower = 0;
        $('.restart').remove();
        $fightLog.find('.user').empty();
    },
    populateCharacters: function() {
        let html = '';
        for (let i = 0; i < starWars.characters.length; i++) {
            let character = starWars.characters[i],
                name = character.name,
                healthPoints = character.healthPoints,
                img = character.image,
                attackPower = character.attackPower,
                counterAttackPower = character.counterAttackPower;
            html += `
                            <div class="character" data-name="` + name + `" data-hp="` + healthPoints + `" data-ap="` + attackPower + `" data-cap="` + counterAttackPower + `">
                                <p>` + name + `</p>
                                <img src="` + img + `" alt="` + name + `">
                                <p class="hp">` + healthPoints + `</p>
                            </div>`;
        }
        $userCharacter.append(html);
    },
    selectCharacter: () => {
        $(document.body).on('click', '#user-character .character', function() {
            $userSelectedCharacterSection.find('#user-character').empty();
            $userSelectedCharacterSection.append($(this));
            $userCharacter.find('.character').appendTo($enemySection);
        });
    },
    selectDefender: () => {
        $(document.body).on('click', '#enemy-section .character', function() {
            if ($defenderSection.find('.character').length === 0) {
                $defenderSection.append($(this));
                $('#fight-log p').empty();
            }
        });
    },
    restart: () => {
        $(document.body).on('click', '.restart', function() {
            $('.character').remove();
            starWars.resetVars();
            starWars.populateCharacters();
            starWars.selectCharacter();
            starWars.selectDefender();
            starWars.attack();
            starWars.restart();
        });
    },
    addRestartButton: () => {
        if ($('.restart').length === 0) {
            $fightLog.append('<button class="restart">Restart</button>');
        }
    },
    checkIfUserAndComputerAreAlive: (computerHealth, userHealth, userAttackPower, computerAttack, computerName) => {
        if (computerHealth > 0 && userHealth > 0) {
            attackPower += userAttackPower;
            computerHealth = computerHealth - attackPower;
            $defenderSection.find('.character .hp').text(computerHealth);
            userHealth = userHealth - computerAttack;
            $userSelectedCharacterSection.find('.character .hp').text(userHealth);
            $('#fight-log p').empty();
            $fightLog.find('.user').html('You attacked ' + computerName + ' for ' + attackPower + ' damage.');
            $fightLog.find('.computer').html(computerName + ' attacked you back for ' + computerAttack + ' damage.');

        } else if (computerHealth <= 0) {
            $fightLog.find('.user').html('choose another character to fight');
        }
    },
    checkIfComputerDies: (computerHealth, userHealth, computerName) => {
        if (computerHealth <= 0 && userHealth > 0) {
            $('#fight-log p').empty();
            if ($defenderSection.find('.character').length === 0) {
                $fightLog.find('.user').html('no enemy here.');
            } else {
                $fightLog.find('.user').html('you have defeated ' + computerName + ' you can choose to fight another enemy.');
            }
            $defenderSection.find('.character').remove();
        }
    },
    checkIfUserDies: (userHealth) => {
        if (userHealth <= 0) {
            $fightLog.find('.user').html('You have been defeated... GAME OVER!!!');
            starWars.addRestartButton();
        }
    },
    checkIfUserWins: (userHealth) => {
        if (userHealth > 0 && $enemySection.find('.character').length === 0 && $defenderSection.find('.character').length === 0) {
            $fightLog.find('.user').html('YOU WON!!!! GAME OVER!!');
            starWars.addRestartButton();
        }
    },
    attack: () => {
        $(document.body).on('click', '#attack', function() {
            let userAttackPower = Number($userSelectedCharacterSection.find('.character').attr('data-ap')),
                userHealth = Number($userSelectedCharacterSection.find('.character .hp').text()),
                computerHealth = Number($defenderSection.find('.character .hp').text()),
                computerAttack = Number($defenderSection.find('.character').attr('data-cap')),
                computerName = $defenderSection.find('.character p').first().text();
            //if the user and computer are alive
            starWars.checkIfUserAndComputerAreAlive(computerHealth, userHealth, userAttackPower, computerAttack, computerName);
            //if user dies
            starWars.checkIfUserDies(userHealth);
            //if computer dies
            starWars.checkIfComputerDies(computerHealth, userHealth, computerName);
            //if user wins
            starWars.checkIfUserWins(userHealth);
        });
    }
}

starWars.resetVars();
starWars.populateCharacters();
starWars.selectCharacter();
starWars.selectDefender();
starWars.attack();
starWars.restart();