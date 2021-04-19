// Add your code below


//select elements
let form = document.querySelector("#form");
let formInput = document.querySelector("#todo-item");
let toDoListInput = document.querySelector("#todo-list")
//create a function addText as our event handler. Include putting the text on the html
const addTextToList = function (e){
    //prevent default browser behavior
    e.preventDefault();
    //grab the user text input
    let text = formInput.value;
    console.log(text);

    //create new element
    let newElement = document.createElement("li");
    //append the user text into the html (line 7)
    
    newElement.textContent = text
    toDoListInput.appendChild(newElement);
    //clear the text input in the form
    document.getElementById("form").reset();
}

//addEventListener
form.addEventListener("submit",addTextToList);
