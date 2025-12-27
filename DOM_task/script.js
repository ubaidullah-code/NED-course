document.body.style.fontFamily = "sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";

let handle = true;
function handleTask1() {
    if (handle) {

        document.querySelector("#taskOne").textContent = "Hello javascript DOM!";
        console.log("if statement");
    }
    else {
        document.querySelector("#taskOne").textContent = "";
        console.log("else statement");
    }
    handle = !handle;
}
let handleTaskTwo = true;
function handleTask2() {
    let taskTwo = document.querySelector("#taskTwo");
    let button = taskTwo.querySelector("button");
    let createH1 = document.createElement("h1");
    existedh1 = taskTwo.querySelector("h1");
    if (handleTaskTwo) {
        createH1.textContent = "Creating with javascript";
        createH1.style.color = "blue";
        createH1.style.fontSize = "30px";
        taskTwo.insertBefore(createH1, button);

    }
    else {
        existedh1.remove();
    }
    handleTaskTwo = !handleTaskTwo;

}
let handleTaskthree = true;
function handleTask3() {
    let changeColor = document.querySelector('#taskthree');

    if (handleTaskthree) {
        changeColor.style.backgroundColor = "green"
        changeColor.querySelector("button").textContent = "Color is changed!"

    }
    else {
        changeColor.style.backgroundColor = "white"
        changeColor.querySelector("button").textContent = "Change my Color";

    }
    handleTaskthree = !handleTaskthree;
}
let handleTaskFour = true;
let handlePara = "";
function handleTask4() {
    let taskFour = document.querySelector("#taskFour");
    let taskFourPara = taskFour.querySelector("p");
    let button = taskFour.querySelector("button");
    if (handleTaskFour) {
        handlePara = taskFourPara.innerText;
        taskFourPara.textContent = "";
        button.textContent = "Show the Paragraph"
    }
    else {
        taskFourPara.textContent = handlePara;
        button.textContent = "Hide the paragraph";

    }
    handleTaskFour = !handleTaskFour;
}

function handleTask6() {
    let inputOne = document.querySelector("#inputOne").value
    let mainDiv = document.querySelector("#taskSix");
    let para = mainDiv.querySelector("p");
    para.innerText = inputOne;
}
let arr1 = [];
function handleTask7() {
    let mainDiv = document.querySelector("#taskSeven");
    let inputTwo = document.querySelector("#inputTwo");
    let unorderList = mainDiv.querySelector('ul');
    arr1.push(inputTwo.value);
    unorderList.innerHTML = ''
    arr1.forEach((element) => {
        unorderList.innerHTML += `<li>${element}</li>`
    })
    inputTwo.value = ''
}
let handleMode = true;
function handleDark() {
    let modeCheck = document.body;
    let button = document.querySelector("#mode");
    if (handleMode) {
        modeCheck.style.backgroundColor = "black";
        modeCheck.style.color = "white";
        button.textContent = "Light Mode"

    } else {
        modeCheck.style.backgroundColor = "white";
        modeCheck.style.color = "black";
        button.textContent = "Dark Mode"
    }
    handleMode = !handleMode;
}
let educationImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  "https://images.unsplash.com/photo-1588072432836-e10032774350"
];
    let arrIndex = 0;
function handleFive() {
    let mainDiv = document.querySelector("#taskFive");
    let Image = mainDiv.querySelector("img");
    Image.src = educationImages[arrIndex];
    arrIndex = (arrIndex + 1) % educationImages.length;
  
}