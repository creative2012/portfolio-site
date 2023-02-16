const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const welcomeText = document.getElementById('welcomeText');
const about = document.getElementById('about');
const nav = document.querySelector('nav');
const mainTitle = document.getElementById('mainTitle');

const screenArrayTop = [five, three, seven, one, nine];
const screenArrayBottom = [six, four, eight, two, ten];

// one.style.width = "50%";
// two.style.width = "50%";
setTimeout(() => {
    welcomeText.style.opacity = "1";
}, 200);

setTimeout(() => {
    mainTitle.style.transform = "translateX(0)";
}, 500);

function rotate(event) {
    let midpoint = window.innerWidth / 2;
    let pos = event.clientX - midpoint;
    let pos2 = event.clientY - midpoint;
    let val = (pos / midpoint) * 2;
    let val2 = (pos2 / midpoint) * 10;
    welcomeText.style.transform = "perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
}

document.addEventListener("mousemove", rotate, false);

about.addEventListener('click', () => {
    document.removeEventListener("mousemove", rotate, false);
    welcomeText.style.transition = '0.5s';
    welcomeText.style.transform = "translate(20px, 0) scale(0.9)";

    setTimeout(() => {
        welcomeText.style.transition = '1s';
        welcomeText.style.transform = "translate(-200vw, 0) scale(0.9)";
    }, 500);

    let timer = 800;
    let timer2 = 800;
    screenArrayTop.forEach((item) => 
        {
            setTimeout(() => {
        
                item.style.height = "0%";
            }, timer);
            timer += 100;

        });
        screenArrayBottom.forEach((item) => 
        {
            setTimeout(() => {
        
                item.style.height = "0%";
            }, timer2);
            timer2 += 100;

        });

    // setTimeout(() => {
        
    //     one.style.height = "0%";
    //     two.style.height = "0%";
    // }, 800);
})

