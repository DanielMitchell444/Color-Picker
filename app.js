const button = document.querySelector('.btn');
const container = document.querySelector('.container');



button.addEventListener('click', (e) => {
 

var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);

var bgColor = "rgb(" + x + "," + y + "," + z + ")";

container.style.backgroundColor = bgColor;


})
