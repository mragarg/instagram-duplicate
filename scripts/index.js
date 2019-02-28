console.log("Script Link HTML test");

// Variable that refers to all the pictures (data-picture)
const targetPictures = document.querySelectorAll("[data-picture]");

// Function for Click Response
function respondToClick(event) {
    console.log("Click Function is working");
    console.log(event.target);
}

targetPictures[0].addEventListener("click", respondToClick);