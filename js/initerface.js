const about = document.querySelector('body');
const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
const aboutLink = document.getElementById('about');
const currentLink = document.getElementById('current');
const projectsLink = document.getElementById('projects');
let currentPage = "LandingPage";
let self = ''
class Interface {
    init() {
        this.listener();
        this.enter();
        self = this;
    }
    listener() {
        about.addEventListener('click', this.buttonHandler);
    }
    buttonHandler(button) {
        
        //go to about page
        if (button.target.id == "about") {
            if (currentPage != "About") {
                self.closePage();
                currentPage = "About";
                aboutPage.enter();
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
                aboutLink.style.fontWeight = "bold";
            }

        }
        //go back to landing page
        if (button.target.id == "logo") {
            if (currentPage != "LandingPage") {
                self.closePage();
                currentPage = "LandingPage";
                landingPage.enter();
                aboutLink.style.fontWeight = "normal";
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
            }
        }

    }
    closePage() {
        if(currentPage == "LandingPage"){
            landingPage.exit();
        }
        if(currentPage == "About"){
            aboutPage.exit();

        }
        if(currentPage == "Projects"){
            projectsPage.exit();
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