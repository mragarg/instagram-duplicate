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
function respondToClick() {
    console.log("Hello");
    console.log("Click function is working");
}

// addEventListener() = waits for event from user (similar to pygame)
// it takes in two arguments, a string and function
targetElements[0].addEventListener("click", respondToClick);