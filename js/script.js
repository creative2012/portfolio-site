const one = document.getElementById('one');
const two = document.getElementById('two');
const welcomeText = document.getElementById('welcomeText');
const about = document.getElementById('about');
const nav = document.querySelector('nav');
const mainTitle = document.getElementById('mainTitle')

// one.style.width = "50%";
// two.style.width = "50%";
setTimeout(() => {
    welcomeText.style.opacity = "1";

},200);
setTimeout(() =>{
    mainTitle.style.transform = "translateX(0)";
},500);

about.addEventListener('click', () => {
    welcomeText.style.transition = '0.5s';
    welcomeText.style.transform = "translate(20px, 0) scale(0.9)";
    setTimeout(() =>{
        
        // nav.style.backgroundColor = "transparent";
        // nav.style.fontWeight = "bold";
        welcomeText.style.transition = '1s';
        welcomeText.style.transform = "translate(-200vw, 0) scale(0.9)";
    },500)
    // setTimeout(() =>{
    // one.style.backgroundColor = "white";
    // two.style.backgroundColor = "white";
    // },700);
    setTimeout(() =>{
        one.style.top = "0";
        two.style.bottom = "0";
        one.style.height = "0%";
        two.style.height = "0%";
        // nav.style.color = "black";
    },800);
})

// setTimeout(() =>{
//     one.style.backgroundColor = "red";
//     two.style.backgroundColor = "black";
//     one.style.top = "0";
//     two.style.bottom = "0";
//     one.style.height = "0%";
//     two.style.height = "0%";
// },2000);