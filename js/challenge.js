    // grab stuff
const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const like = document.querySelector('#heart')
const likesContainer = document.querySelector('.likes')
const pause = document.querySelector('#pause')
const buttons = document.querySelector('#buttons')
const commentInput = document.querySelector('#comment-input')
const commentsContainer = document.querySelector('#list')
const submit = document.querySelector('#submit')

    // make stuff
const numLike = document.createElement('li')
const comment = document.createElement('p')
const restart = document.createElement('button')
restart.textContent = 'restart';
buttons.append(restart)

    // event listeners
minus.addEventListener('click', handleMinus)
plus.addEventListener('click', handlePlus)
like.addEventListener('click', handleLike)
pause.addEventListener('click', handlePause)
restart.addEventListener('click', handleRestart)
submit.addEventListener('click', handleComment)


    // counter
let i = 0
let timer = setInterval(() => {counter.innerText = i; i++}, 1000)

    // callbacks
function handleMinus() {
    if (counter.innerText > 0) {
        counter.innerText = i--
    } else {
        counter.innerText = 0
    }
}

function handlePlus() {
    counter.innerText = i++
}

let numClicks = 0;
function handleLike() {
    numClicks++;
    numLike.textContent = `${i - 1} has been liked ${numClicks} times`
    // if (numClicks = 1) {
    //     numLike.innerHTML = `${i} has been liked ${numClicks} time`
    // } else if (numClicks = 0 || numClicks > 1) {
    //     numLike.innerHTML = `${i} has been liked ${numClicks} times`
    // }
    likesContainer.append(numLike)
    // not sure how to create multiple li's instead of continuously updating one li(for loop?)
}

function handlePause() {
    if (pause.innerText == 'pause') {
        clearInterval(timer)
        pause.innerText = 'resume'
        minus.disabled = true;
        plus.disabled = true;
        like.disabled = true;
        restart.disabled = true;
        submit.disabled = true;
    } else if (pause.innerText == 'resume') {
        timer = setInterval(() => {counter.innerText = i; i++;}, 1000);
        pause.innerText = 'pause'
        minus.disabled = false;
        plus.disabled = false;
        like.disabled = false;
        restart.disabled = false;
        submit.disabled = false;
    }
}

function handleRestart() {
    i = 0
}

function handleComment(e) {
    e.preventDefault();
    comment.innerText = commentInput.value
    commentsContainer.append(comment)
    // again, creating and updating one p tag, and not creating multiples
}