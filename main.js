const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const resetButton = document.querySelector('#reset-button')

rock.addEventListener('click', userSelection)
paper.addEventListener('click', userSelection)
scissors.addEventListener('click', userSelection)


function userSelection(evt) {
    let nodeId = evt.target.id
    let min = Math.ceil(1)
    let max = Math.floor(4)
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    let compImg = document.querySelector('#computer')
    let userScore = parseInt(document.getElementById('userScore').innerHTML)
    let computerScore = parseInt(document.getElementById('computerScore').innerHTML)
    evt.stopPropagation()

    if ((randomNum === 1 && nodeId == 'paper') || (randomNum === 2 && nodeId == 'scissors') || (randomNum === 3 && nodeId == 'rock')) {
        userScore += 1
    } else if ((randomNum === 1 && nodeId == 'scissors') || (randomNum === 2 && nodeId == 'rock') || (randomNum === 3 && nodeId == 'paper')) {
        computerScore += 1
    } else {

    }

    if (randomNum === 1) {
        compImg.src = "images/rock.png"
    } else if (randomNum === 2) {
        compImg.src = "images/paper.png"
    } else {
        compImg.src = "images/scissors.png"
    }

    if (userScore < 10 && computerScore < 10) {
        document.getElementById('userScore').innerHTML = '0' + userScore
        document.getElementById('computerScore').innerHTML = '0' + computerScore
    } else {
        document.getElementById('userScore').innerHTML = userScore
        document.getElementById('computerScore').innerHTML = computerScore
    }
}

resetButton.addEventListener('click', function () {
    let compImg = document.querySelector('#computer')
    
    document.getElementById('userScore').innerHTML = '00'
    document.getElementById('computerScore').innerHTML = '00'
    compImg.src = "images/computer.png"
    
})