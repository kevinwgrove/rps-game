const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const resetButton = document.querySelector('#reset-button')
const userPoint = document.querySelector('#point-user')
const tie = document.querySelector('#tie')
const computerPoint = document.querySelector('#point-computer')

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
    let createElement = document.createElement('div')
    evt.stopPropagation()

    computerPoint.innerHTML = ''
    userPoint.innerHTML = ''
    tie.innerHTML = ''

    userPoint.style.transition = ''
    computerPoint.style.transition = ''
    tie.style.transition = ''

    userPoint.style.color = 'red'
    computerPoint.style.color = 'red'
    tie.style.color = 'red'


    if ((randomNum === 1 && nodeId == 'paper') || (randomNum === 2 && nodeId == 'scissors') || (randomNum === 3 && nodeId == 'rock')) {
        userScore += 1
        userPoint.innerHTML = '+1'
        userPoint.style.transition = 'color 2.5s ease'
        userPoint.style.color = 'black'
    } else if ((randomNum === 1 && nodeId == 'scissors') || (randomNum === 2 && nodeId == 'rock') || (randomNum === 3 && nodeId == 'paper')) {
        computerScore += 1
        computerPoint.innerHTML = '+1'
        computerPoint.style.transition = 'color 2.5s ease'
        computerPoint.style.color = 'black'
    } else {
        tie.innerHTML = 'Tie'
        tie.style.transition = 'color 2.5s ease'
        tie.style.color = 'black'  
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
    userPoint.innerHTML = ''
    computerPoint.innerHTML = ''
    tie.innerHTML = ''
})