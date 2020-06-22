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

    if (randomNum === 1) {
        compImg.src = "/images/rock.png"
        if (randomNum === 1 && nodeId == 'paper') {
            userScore +=1
            if (userScore < 10) {
                document.getElementById('userScore').innerHTML = '0' + userScore
            } else {
                document.getElementById('userScore').innerHTML = userScore
            }
        } else if (randomNum === 1 && nodeId == 'scissors') {
            computerScore +=1
            if (computerScore < 10) {
                document.getElementById('computerScore').innerHTML = '0' + computerScore
            } else {
                document.getElementById('computerScore').innerHTML = computerScore
            }
        } 
    } else if (randomNum === 2) {
        compImg.src = "/images/paper.png"
        if (randomNum === 2 && nodeId == 'scissors') {
            userScore +=1
            if (userScore < 10) {
                document.getElementById('userScore').innerHTML = '0' + userScore
            } else {
                document.getElementById('userScore').innerHTML = userScore
            }
        } else if (randomNum === 2 && nodeId == 'rock') {
            computerScore +=1
            if (computerScore < 10) {
                document.getElementById('computerScore').innerHTML = '0' + computerScore
            } else {
                document.getElementById('computerScore').innerHTML = computerScore
            }
        } 
    } else {
        compImg.src = "/images/scissors.png"
        if (randomNum === 3 && nodeId == 'rock') {
            userScore +=1
            if (userScore < 10) {
                document.getElementById('userScore').innerHTML = '0' + userScore
            } else {
                document.getElementById('userScore').innerHTML = userScore
            }
        } else if (randomNum === 3 && nodeId == 'paper') {
            computerScore +=1
            if (computerScore < 10) {
                document.getElementById('computerScore').innerHTML = '0' + computerScore
            } else {
                document.getElementById('computerScore').innerHTML = computerScore
            }
        } 
    }
    console.log(nodeId)
    console.log(randomNum)
    console.log(userScore)
    console.log(computerScore)
}

resetButton.addEventListener('click', function () {
    let compImg = document.querySelector('#computer')
    
    document.getElementById('userScore').innerHTML = '00'
    document.getElementById('computerScore').innerHTML = '00'
    compImg.src = "/images/computer.png"
    
})


    
