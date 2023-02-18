

const interface = new Interface();
const landingPage = new LandingPage();
const aboutPage = new AboutPage();

interface.init();
landingPage.init();
aboutPage.init();
window.addEventListener("resize", onResize);
function onResize(){
this.height = window.innerHeight - 30;

        document.querySelector("body").style.height = this.height + "px";
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
}



