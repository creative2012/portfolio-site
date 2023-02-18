const about = document.querySelector('body');
const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
const aboutLink = document.getElementById('about');
const currentLink = document.getElementById('current');
const projectsLink = document.getElementById('projects');
let currentPage = "LandingPage";
class Interface {
    init() {
        this.listener();
        this.enter();
    }
    listener() {
        about.addEventListener('click', this.buttonHandler);
    }
    buttonHandler(button) {
        //go to about page
        if (button.target.id == "about") {
            if (currentPage != "About") {
                currentPage = "About";
                landingPage.exit();
                aboutPage.enter();
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
                aboutLink.style.fontWeight = "bold";
            }

        }
        //go back to landing page
        if (button.target.id == "logo") {
            if (currentPage != "LandingPage") {
                currentPage = "LandingPage";
                aboutPage.exit();
                landingPage.enter();
                aboutLink.style.fontWeight = "normal";
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
            }
        }

    }
    enter() {
        setTimeout(() => {
            navigation.style.opacity = '1';
            footer.style.opacity = '1';
            logo.style.opacity = '1';
        }, 2500);
    }
    exit() {

    }
}