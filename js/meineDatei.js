"use strict";

let ball = document.getElementById("meinBall");
let garden = document.getElementById("meinSpiefeld");
let output = document.getElementById("output");

//let maxX = garden.clientWidth - ball.clientWidth;
//let maxY = garden.clientHeight - ball.clientHeight;

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt555";
    window.addEventListener('deviceorientation', handleEvent);
}
else {
    document.getElementById("supported").innerText = "Keine Device Orient";
}

function handleEvent(event) {
    //alert (event.beta);
    setTimeout(changeBall, 3000, event.beta, event.gamma);
    //setInterval(changeBall, 3000, event.beta, event.gamma);
}
function changeBall(beta, gamma) {
    document.getElementById("beta").innerHTML = 'beta ' + beta.toFixed(2);
    document.getElementById("gamma").innerHTML = 'gamma ' + gamma.toFixed(2);
    let zeit = new Date();
    if (zeit.getSeconds() % 3 == 0) {
        //alert("Zeit " + zeit.getMinutes() + "." + zeit.getSeconds());
        //alert("beta: " + beta + " gamma: " + gamma);
    }

    /*
    document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(2);
    document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(2);
    let x = event.beta;  // In degree in the range [-180,180] nach vorne - hinten +
    let y = event.gamma; // In degree in the range [-90,90] nach rechts + nach links -
    if (x > 0)
        x = Math.max(20, x);
    else
        x = Math.max(-20, x);

    if (y > 0)
        y = Math.max(20, y);
    else
        y = Math.max(-20, y);

    x = Math.round(x / 10);
    y = Math.round(y / 10);

    if (ball.style.top > 200) ball.style.top = 190;
    if (ball.style.top < 0) ball.style.top = 10;
    if (ball.style.left > 200) ball.style.left = 190;
    if (ball.style.left < 0) ball.style.left = 10;

    ball.style.top = (ball.style.top + x) + "px";
    ball.style.left = (ball.style.left + y) + "px";

    let ausgabe = "x: " + x + " beta: " + event.beta.toFixed(2);
    ausgabe = ausgabe + "y: " + y + " gamma: " + event.gamma.toFixed(2);
    ausgabe = ausgabe + " top: " + ball.style.top;
    ausgabe = ausgabe + " left: " + ball.style.left;
    output.innerHTML = ausgabe;
    alert("Hallo aaa " + ausgabe);
    */
}


