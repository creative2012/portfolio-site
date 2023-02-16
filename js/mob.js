
//is mobile?
const isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        document.getElementById('landingPageContainer').style.height = '100%';
    }
}
