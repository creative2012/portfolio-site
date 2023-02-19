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
                
                if(currentPage == "Projects"){
                    self.closePage();
                    setTimeout(() =>{
                        aboutPage.enter();
                    },500);
                }
                if(currentPage == "LandingPage"){
                    self.closePage();
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
                
                if(currentPage == "Projects"){
                    landingPage.enter();
                    setTimeout(() =>{
                        projectsPage.exit();
                    },500);
                }
                if(currentPage == "About"){
                    landingPage.enter();
                    setTimeout(() =>{
                        aboutPage.exit();
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
                
                go = false;
                if(currentPage == "LandingPage"){
                    self.closePage();
                    setTimeout(() =>{
                        projectsPage.enter();
                    },800);
                }
                if(currentPage == "About"){
                    projectsPage.enter();
                    setTimeout(() =>{
                        aboutPage.exit()
                    },700);
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