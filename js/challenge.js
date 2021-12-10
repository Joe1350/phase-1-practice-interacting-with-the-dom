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
const form = document.querySelector('#comment-form')
const submit = document.querySelector('#submit')

    // make restart button
const restart = document.createElement('button')
restart.textContent = 'restart';
buttons.append(restart)

    // event listeners
minus.addEventListener('click', handleMinus)
plus.addEventListener('click', handlePlus)
like.addEventListener('click', handleLike)
pause.addEventListener('click', handlePause)
restart.addEventListener('click', handleRestart)
form.addEventListener('submit', handleComment)


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

// let numClicks = {};
// function handleLike() {
//     let seconds = counter.innerText
//     const numLike = document.createElement('li')
//     numLike.id = seconds
//     const updatedLike = document.getElementById(seconds)
//     console.log(counter.innerText)
//     if (numClicks[seconds]) {
//         numClicks[seconds] + 1;
//         updatedLike.innerText = `${seconds} has been liked ${numClicks[seconds]} times`
//     } else {
//         numClicks[seconds] = 1;
//         numLike.innerText = `${seconds} has been liked ${numClicks[seconds]} time`
//         likesContainer.append(numLike)
//     }
//     // likesContainer.append(numLike)
// }

let numberTracker = {}
function handleLike(){
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    renderLikes()
  }
  function renderLikes(){
    likesContainer .innerHTML = ""
    for (let key in numberTracker){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${numberTracker[key]} time(s).`
        likesContainer.append(li)
    }
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
    const comment = document.createElement('p')
    console.log(e.target[0].value)
    comment.innerText = e.target[0].value
    commentsContainer.append(comment)
}