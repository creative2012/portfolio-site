const about = document.querySelector('body');
const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
const aboutLink = document.getElementById('about');
const currentLink = document.getElementById('current');
const projectsLink = document.getElementById('projects');
let currentPage = "LandingPage";
let self = ''
let go = true;
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
        if (button.target.id == "about" && go) {
            if (currentPage != "About") {
                go = false;
                self.closePage();
                if(currentPage == "Projects"){
                    setTimeout(() =>{
                        aboutPage.enter();
                    },200);
                }
                if(currentPage == "LandingPage"){
                    setTimeout(() =>{
                        aboutPage.enter();
                    },1400);
                }
                currentPage = "About";
                
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
                aboutLink.style.fontWeight = "bold";
            }

        }
        //go back to landing page
        if (button.target.id == "logo" && go) {
            if (currentPage != "LandingPage") {
                go = false;
                self.closePage();
                if(currentPage == "Projects"){
                    setTimeout(() =>{
                        landingPage.enter();
                    },100);
                }
                if(currentPage == "About"){
                    setTimeout(() =>{
                        landingPage.enter();
                    },600);
                }
                currentPage = "LandingPage";
                aboutLink.style.fontWeight = "normal";
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "normal";
            }
        }
        //go to projects page
        if (button.target.id == "projects" && go) {
            if (currentPage != "Projects") {
                self.closePage();
                go = false;
                if(currentPage == "LandingPage"){
                    setTimeout(() =>{
                        projectsPage.enter();
                    },1000);
                }
                if(currentPage == "About"){
                    setTimeout(() =>{
                        projectsPage.enter();
                    },300);
                }
                currentPage = "Projects";
                aboutLink.style.fontWeight = "normal";
                currentLink.style.fontWeight = "normal";
                projectsLink.style.fontWeight = "bold";
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