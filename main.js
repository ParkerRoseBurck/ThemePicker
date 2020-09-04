
let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let cssFile = document.getElementById('css');

let spaceButton = document.getElementById('space-button');
let oceanButton = document.getElementById('ocean-button');
let forestButton = document.getElementById('forest-button');
function cssChangeSpace(){
    cssFile.setAttribute('href', 'space.css');
    circle1.setAttribute('src', 'img/purple-circle.png');
    circle2.setAttribute('src', 'img/darkpurple-circle.png');
    circle3.setAttribute('src', 'img/pink-circle.png');
}
function cssChangeOcean(){
    cssFile.setAttribute('href', 'ocean.css');
    circle1.setAttribute('src', 'img/lightblue-cirlce.png');
    circle2.setAttribute('src', 'img/blue-circle.png');
    circle3.setAttribute('src', 'img/darkblue-circle.png');
}
function cssChangeForest(){
    cssFile.setAttribute('href', 'forest.css');
    circle1.setAttribute('src', 'img/lightgreen-circle.png');
    circle2.setAttribute('src', 'img/green-circle.png');
    circle3.setAttribute('src', 'img/darkgreen-circle.png');
}
function firstCircleMove(){
    circle1.style.visibility = 'visible';
    let myAnimation = document.getElementById("circle1").animate(
        [
            {
                transform: 'rotate(0) ',
            },
            {
                transform: 'rotate(360deg) ',
            },
        ],
        {
            duration: 6000,
            iterations: Infinity,
        }
    );
}
function secondCircleMove(){
    circle2.style.visibility = 'visible';
    let myAnimation2 = document.getElementById("circle2").animate(
        [
            {
                transform: 'rotate(0) ',
            },
            {
                transform: 'rotate(360deg) ',
            },
        ],
        {
            duration: 6000,
            iterations: Infinity,
        }
    );
}
function thirdCircleMove(){
    circle3.style.visibility = 'visible';
    let myAnimation3 = document.getElementById("circle3").animate(
        [
            {
                transform: 'rotate(0) ',
            },
            {
                transform: 'rotate(360deg) ',
            },
        ],
        {
            duration: 6000,
            iterations: Infinity,
        }
    );
}
function stopCircle1(){
    circle1.style.visibility = 'hidden';
}
function stopCircle2(){
    circle2.style.visibility = 'hidden';
}
function stopCircle3(){
    circle3.style.visibility = 'hidden';
}
spaceButton.addEventListener('click', cssChangeSpace);
spaceButton.addEventListener('mouseover', firstCircleMove );
spaceButton.addEventListener('mouseleave', stopCircle1);

oceanButton.addEventListener('click', cssChangeOcean);
oceanButton.addEventListener('mouseover', secondCircleMove );
oceanButton.addEventListener('mouseleave', stopCircle2);

forestButton.addEventListener('click', cssChangeForest);
forestButton.addEventListener('mouseover', thirdCircleMove );
forestButton.addEventListener('mouseleave', stopCircle3);