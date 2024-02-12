const clock=document.getElementsByClassName('clock');
setInterval(function () {
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}, 1000);

