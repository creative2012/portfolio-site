const ap_picture = document.getElementById('aboutImage');
const ap_imageContainer = document.getElementById('aboutImageContainer');
const ap_text = document.getElementById('aboutText');
const ap_scroll = document.getElementById('scroll');
const ap_pageContainer = document.getElementById('aboutPageContainer');
let images = [
    'https://creative2012.github.io/portfolio-site/images/main_funnyFace.png',
    'https://creative2012.github.io/portfolio-site/images/mainPic.png',
];

class AboutPage {
    init() {

        this.loadImages(images, 0);
        this.loadImages(images, 1);
    }
    loadImages(images, index) {
        if (index < images.length) {
            let img = new Image();
            img.src = images[index];
            images[index] = img;
        }
    }
    listener() {
        ap_picture.addEventListener("mouseover", this.changeImage, false);
        ap_picture.addEventListener("mouseout", this.changeImageBack, false);
        ap_picture.addEventListener("mousemove", this.rotate, false);
    }
    removeListener() {
        ap_picture.removeEventListener("mouseover", this.changeImage, false);
        ap_picture.removeEventListener("mouseout", this.changeImageBack, false);
        ap_picture.removeEventListener("mousemove", this.rotate, false);
    }
    rotate(event) {
        let midpoint = window.innerWidth / 2;
        let midpoint2 = window.innerHeight / 2;
        let pos = event.clientX - midpoint;
        let pos2 = event.clientY - midpoint2;
        let val = (pos / midpoint) * 12;
        let val2 = (pos2 / midpoint2) * 8;
        ap_picture.style.transform = "translate(0) perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
    }
    scrollFunction() {

        let buttonTimer = 500;
        Array.from(document.querySelectorAll('.sp')).forEach(function (button) {
            setTimeout(() => {
                button.style.transform = "translate(0)";
            }, buttonTimer);
            buttonTimer += 100;
        });


    }



    changeImage() {
        ap_picture.style.backgroundImage = `url("${images[0].src}")`;
    }
    changeImageBack() {
        ap_picture.style.backgroundImage = `url("${images[1].src}")`;
        ap_picture.style.transform = "translate(0) perspective(550px) rotateY(0) rotateX(0)";
    }


    exit() {
        this.removeListener();
        setTimeout(() => {

            setTimeout(() => {
                ap_text.style.transform = "scale(0.95)";
                ap_picture.style.transform = "scale(0.95)";

                setTimeout(() => {
                    ap_picture.style.transitionDuration = '1s';
                    ap_text.style.transitionDuration = '1s';
                    ap_text.style.transform = "translate(1000px)";
                    ap_picture.style.transform = "translate(-1000px)";
                    Array.from(document.querySelectorAll('.sp')).forEach(function (button) {
                        button.style.transform = "translate(1000px)";

                    });
                    setTimeout(() => {
                        ap_picture.style.opacity = "0";
                        ap_text.style.opacity = "0";
                    }, 50);
                }, 300);
            }, 50);


        }, 100);
        setTimeout(() => {

            ap_picture.style.backgroundImage = "url('https://creative2012.github.io/portfolio-site/images/slide_bgImage.png')";
        }, 500);
        setTimeout(() => {
            ap_pageContainer.style.display = 'none';
            go = true;
        }, 900);


    }
    enter() {
        onResize();
        ap_pageContainer.style.display = 'grid';
        ap_scroll.scrollTo(0, 0);
        ap_pageContainer.scrollTo(0, 0);
        ap_picture.style.transitionDuration = '0.5s';
        ap_text.style.transitionDuration = '0.5s';
        currentPage = "About";
        let timer = 100
        this.listener();
        setTimeout(() => {
            ap_picture.style.transform = "translate(0)";
            setTimeout(() => {
                ap_picture.style.opacity = "1";
            }, 200);
            setTimeout(() => {
                ap_text.style.transform = "translate(0)";
                setTimeout(() => {
                    ap_text.style.opacity = "1";
                }, 200);
            }, 500);

        }, timer);
        setTimeout(() => {
            ap_picture.style.backgroundImage = `url("${images[1].src}")`;;
            ap_picture.style.transitionDuration = '0.2s';
            go = true;
        }, timer + 1100);

    }

}
