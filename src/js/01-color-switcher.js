

const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

refs.start.addEventListener('click', startChangeColor)
refs.stop.addEventListener('click', stopChangeColor)


console.dir(refs.start)

//console.dir(refs.body)


function startChangeColor() {
refs.start.disabled = true;
return timeoutId = setInterval(() => {
refs.body.style.backgroundColor = getRandomHexColor()
}, 1000)

}

function stopChangeColor() {
    refs.start.disabled = false;
    clearInterval(timeoutId)

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
