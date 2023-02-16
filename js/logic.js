const about = document.querySelector('body');
let currentPage = "LandingPage";

const landingPage = new LandingPage();
landingPage.init();

function buttonHandler(button){
    if(button.target.id == "about"){
        landingPage.exit();

    }
    if(button.target.id == "logo"){
        landingPage.enter();
    }
    
}

about.addEventListener('click', buttonHandler);

