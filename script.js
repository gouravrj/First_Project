let correctNumber = getRandomNumber();
let guesses = []

window.onload = function () {

    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function playGame() {

    let numberGuess = document.getElementById('number-guess').value;

    displayResult(numberGuess)
    saveGuessHistory(numberGuess)
    displayHistory()
}
function getRandomNumber() {

    let wholeNumber = Math.floor(Math.random() * 100);
    return wholeNumber;
}
function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = []
    displayHistory()
    console.clear()
}


                    function displayResult(numberGuess) {
                        if (numberGuess > correctNumber)
                            showNumberAbove();
                        else if (numberGuess < correctNumber)
                            showNumberBelow();
                        else
                            showYouWon();
                    }

                    function getDialog(dialogType, text) {
                        let dialog;
                        switch (dialogType) {
                            case "warning":
                                dialog = "<div class='alert alert-warning' role='alert'>"
                                break;
                            case "won":
                                dialog = "<div class='alert alert-success' role='alert'>"
                                break;
                        }
                        dialog += text;
                        dialog += "</div>"
                        return dialog
                    }

                    function showNumberAbove() {

                        const text = "Your guess is too high!"
                        let dialog = getDialog('warning', text)
                        document.getElementById("result").innerHTML = dialog
                    }
                    function showNumberBelow() {

                        const text = "Your guess is too Low!"
                        let dialog = getDialog('warning', text)
                        document.getElementById("result").innerHTML = dialog
                    }
                    function showYouWon() {

                        const text = "Aweson job, you got it!"
                        let dialog = getDialog('won', text)
                        document.getElementById("result").innerHTML = dialog
                    }

function saveGuessHistory(guess) {
    guesses.push(guess)
}

function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>"
    console.log(guesses)
    document.getElementById("history").innerHTML = list;

    while (index >= 0) {
        list += "<li class='list-group-item'>" + " You guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += '</ul>'
    console.log(list);
    document.getElementById("history").innerHTML = list;
}