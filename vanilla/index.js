let colors = []
let pickedColor;
let difficulty = 6

let squares = document.querySelectorAll('.square')
let rgb = document.getElementById('rgb')
let message = document.getElementById('message')
let header = document.querySelector('.rgb-header')
let reset = document.querySelector('.new-colors')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')

init()

function init() {
  resetColors(difficulty)
  setupSquares()
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // Adds click response to each square
    squares[i].addEventListener(
      'click', function() {
        let squareColor = this.style.backgroundColor

        if (squareColor === pickedColor) {
          message.textContent = 'Congratulations!'
          reset.textContent = "Play again?"
          changeToWinningColor(squareColor)
        } else {
          this.style.backgroundColor = "#232323"
          message.textContent = 'Try Again?'
        }
      }
    )
  }
}

reset.addEventListener(
  'click', function() {
    resetColors(difficulty)
  }
)

easy.addEventListener(
  'click', function() {
    difficulty = 3
    easy.classList.add('selected-difficulty')
    hard.classList.remove('selected-difficulty')
    resetColors(difficulty)
  }
)

hard.addEventListener(
  'click', function() {
    difficulty = 6
    easy.classList.remove('selected-difficulty')
    hard.classList.add('selected-difficulty')
    resetColors(difficulty)
  }
)

function resetColors(maxSize) {
  colors = generateColors(maxSize)
  pickedColor = colors[randomNum(maxSize)]
  rgb.textContent = pickedColor
  reset.textContent = "New colors"
  message.textContent = ""

  for (let i = 0; i < squares.length; i++) {
    if (i < difficulty) {
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
  header.style.backgroundColor = 'rgb(11, 85, 165)'
}

function changeToWinningColor(correctColor) {
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = correctColor
  }
  header.style.backgroundColor = correctColor
}

function generateColors(size) {
  let array = []
  for (let i = 0; i < size; i++) {
    array.push(rgbPicker())
  }
  return array
}

function rgbPicker() {
  return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`
}

function randomNum(num) {
  return Math.floor(Math.random() * num)
}
