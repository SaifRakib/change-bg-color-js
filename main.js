
//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','silver','black','gray','maroon','fuchsia','lime','olive','teal','aqua','chartreuse','cyan','lightsalmon','lightskyblue','lime','moccasin','orange','orchid','papayawhip','seagreen','sandybrown','tomato','violet','wheat','sienna','mediumspringgreen','aquamarine','olive'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor = colors[colorIndex];
}