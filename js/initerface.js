const about = document.querySelector('body');
const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
class Interface{
    init(){
        this.listener();
        this.enter();
    }
    listener(){
        about.addEventListener('click', this.buttonHandler);
    }
    buttonHandler(button){
        if(button.target.id == "about"){
            landingPage.exit();
    
        }
        if(button.target.id == "logo"){
            landingPage.enter();
        }
        
    }
    enter(){
        setTimeout(() => {
            navigation.style.transform = 'translateY(0)';
            footer.style.transform = 'translateY(0)';
            setTimeout(() => {
            logo.style.opacity = '1';
            },700);
        },1500);
    }
    exit(){

    }
}