const ap_picture = document.getElementById('aboutImage');
const ap_imageContainer = document.getElementById('aboutImageContainer');
const ap_text = document.getElementById('aboutText');



class AboutPage {
    init(){
        let images = [
            'https://creative2012.github.io/portfolio-site/images/main_funnyFace.png',
            'https://creative2012.github.io/portfolio-site/images/mainPic.png',
        ];
    
        this.loadImages(images, 0);
    }
    loadImages(images, index) {
        if (index < images.length) {
            let img = new Image();
            img.src = images[index];
            images[index] = img;
            images[index].onload = function() {
                this.loadImages(images, ++index);
            };
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
        let val = (pos / midpoint) * 5;
        let val2 = (pos2 / midpoint2) * 8;
        ap_picture.style.transform = "translate(0) perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
    }
    changeImage(){
        ap_picture.style.backgroundImage = 'url("https://creative2012.github.io/portfolio-site/images/main_funnyFace.png")';
    }
    changeImageBack(){
        ap_picture.style.backgroundImage = 'url("https://creative2012.github.io/portfolio-site/images/mainPic.png")';
    }
    

    exit() {
        this.removeListener();
        setTimeout(() => {
            
                setTimeout(() => {
                    ap_text.style.opacity = "0";
                    ap_picture.style.opacity = "0";
                    setTimeout(() => {
                        ap_text.style.transform = "translate(1000px)";
                        ap_picture.style.transform = "translate(-1000px)";
                    }, 1000);
                }, 50);

            
        }, 100);
        setTimeout(() => {
            ap_picture.style.transitionDuration= '0.5s';
            ap_picture.style.backgroundImage = "url('https://creative2012.github.io/portfolio-site/images/slide_bgImage.png')";
        }, 500);

    
    }
    enter() {
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
            
        }, 1400);
        setTimeout(() => {
            ap_picture.style.backgroundImage = "url('https://creative2012.github.io/portfolio-site/images/mainPic.png')";
            ap_picture.style.transitionDuration= '0.2s';
        }, 2500);
  
    }

}
