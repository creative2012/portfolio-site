const sideBar = document.getElementById('sideBar');
const sideBarContent = document.getElementById('dContent')

document.body.addEventListener("click", function(e){
    if(e.target.id == "openHtml"){
        sideBar.style.right = "0";
        sideBar.style.opacity = "1";
        sideBarContent.scrollTo(0,0);
    }
    if(e.target.id == "dClose"){
        sideBar.style.opacity = "0";
        sideBar.style.right = "-540px";
    }
})