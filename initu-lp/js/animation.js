"use strict"

const typed = new Typed('.typed', {
    stringsElement: "#cadena",
    typeSpeed: 50,
    startDelay: 0,
    backSpeed: 50,
    smartBackSpeed: false,
    backDelay: 3000,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: '|'
  });

const ul = document.querySelector('.displacement > ul')
const li = document.querySelector('.displacement > ul li')

function frames() {
    const animation = ul.animate([
        {tranform: "translateY(0rem)"},
        {tranform: "translateY(-7rem)"}
    ],{
        easing: "linear",
        duration: 200,
        iterations: 1
    })

    return animation.finished
}

function overlay() {
    frames()
    .then(res => {
        ul.appendChild(document.querySelectorAll('.displacement > ul li')[0])
    })
}

setInterval(() => {
    overlay()
}, 3000);