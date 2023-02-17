const lp_one = document.getElementById('lp_one');
const lp_two = document.getElementById('lp_two');
const lp_three = document.getElementById('lp_three');
const lp_four = document.getElementById('lp_four');
const lp_five = document.getElementById('lp_five');
const lp_six = document.getElementById('lp_six');
const lp_seven = document.getElementById('lp_seven');
const lp_eight = document.getElementById('lp_eight');
const lp_nine = document.getElementById('lp_nine');
const lp_ten = document.getElementById('lp_ten');
const lp_welcomeText = document.getElementById('lp_welcomeText');
const lp_mainTitle = document.getElementById('lp_mainTitle');

const lp_screenArrayTop = [lp_five, lp_three, lp_seven, lp_one, lp_nine];
const lp_screenArrayBottom = [lp_six, lp_four, lp_eight, lp_two, lp_ten];

class LandingPage {
    init() {
        this.listener();
        setTimeout(() => {
            lp_welcomeText.style.opacity = "1";
        }, 1000);

        setTimeout(() => {
            lp_mainTitle.style.opacity = "1";
            lp_mainTitle.style.transform = "translateX(0)";
        }, 1500);
    }
    listener() {
        document.addEventListener("mousemove", this.rotate, false);
    }
    removeListener() {
        document.removeEventListener("mousemove", this.rotate, false);
    }
    rotate(event) {
        let midpoint = window.innerWidth / 2;
        let midpoint2 = window.innerHeight / 2;
        let pos = event.clientX - midpoint;
        let pos2 = event.clientY - midpoint2;
        let val = (pos / midpoint) * 2;
        let val2 = (pos2 / midpoint2) * 5;
        lp_welcomeText.style.transform = "perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
    }
    exit() {
        this.removeListener();
        lp_welcomeText.style.transition = '0.5s';
        lp_mainTitle.style.opacity = "0";
        lp_welcomeText.style.transform = "translate(20px, 0) scale(0.9)";

        setTimeout(() => {
            lp_welcomeText.style.transition = '1s';
            lp_welcomeText.style.transform = "translate(-200vw, 0) scale(0.9)";
        }, 500);

        let timer = 800;
        let timer2 = 800;
        lp_screenArrayTop.forEach((item) => {
            setTimeout(() => {

                item.style.height = "0%";
            }, timer);
            timer += 100;

        });
        lp_screenArrayBottom.forEach((item) => {
            setTimeout(() => {

                item.style.height = "0%";
            }, timer2);
            timer2 += 100;

        });
    }
    enter() {
        this.listener();
        lp_welcomeText.style.opacity = "0";
        lp_mainTitle.style.transform = "translateX(1000px)";
        let timer = 200;
        let timer2 = 200;
        lp_screenArrayTop.forEach((item) => {
            setTimeout(() => {

                item.style.height = "50%";
            }, timer);
            timer += 100;

        });
        lp_screenArrayBottom.forEach((item) => {
            setTimeout(() => {

                item.style.height = "50%";
            }, timer2);
            timer2 += 100;

        });
        setTimeout(() => {
            lp_welcomeText.style.opacity = "0";
            lp_welcomeText.style.transition = '';
            lp_welcomeText.style.transform = "";
            this.init();
        }, timer2 + 100);
    }

}