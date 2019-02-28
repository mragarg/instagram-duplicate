console.log("Test message.");

// When we click any .picture-frame
// A const is a "constant" variable which means
// it can not be reassigned
// document. = the variable that refers to the web page
// querySelectorAll = gets all the elements on the page that 
// match the selector
// "[]" = a string version of a CSS selector for a HTML attribute
const targetElements = document.querySelectorAll("[data-target]");

// We see an enlarged version of image that is
// inside that .picture-frame
function respondToClick(event) {
    console.log("Click function is working");

    console.log(event.target.parentElement);
    // add the "big" class to the thing that got clicked

    event.target.parentElement.parentElement.classList.add("big");
}

function attachClickHandler(oneElement) {
    // addEventListener() = waits for event from user (similar to pygame)
    // it takes in two arguments, a string and function
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler)