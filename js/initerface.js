const about = document.querySelector('body');
const navigation = document.querySelector('nav');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
class Interface {
    init() {
        this.listener();
        this.enter();
    }
    listener() {
        about.addEventListener('click', this.buttonHandler);
    }
    buttonHandler(button) {
        if (button.target.id == "about") {
            landingPage.exit();
            aboutPage.enter();

        }
        if (button.target.id == "logo") {
            aboutPage.exit();
            landingPage.enter();
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