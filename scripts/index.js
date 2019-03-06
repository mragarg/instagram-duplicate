console.log("Script Link HTML test");

// Variable that refers to all the pictures (data-picture)
const targetPictures = document.querySelectorAll("[data-picture]");
const fullViewPicture = document.querySelector("[data-fullView]");

let clickPic = ""
// Function for Click Response
function respondToClick(event) {
    console.log("Click Function is working");
    console.log(event.target);
    if(clickPic == ""){
        clickPic = event.target.src;
        fullViewPicture.src = clickPic;
    }
    else {
        clickPic = "";
        fullViewPicture.src = clickPic;
    }
}

function attachClickHandler(eachElement){
    eachElement.addEventListener("click", respondToClick);
    clickPic = eachElement.src;
}

targetPictures.forEach(attachClickHandler);

