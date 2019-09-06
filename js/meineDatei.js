"use strict";

let ball = document.getElementById("meinBall");
let garden = document.getElementById("meinSpiefeld");
let output = document.getElementById("output");
let vorigeZeit = 0;

//let maxX = garden.clientWidth - ball.clientWidth;
//let maxY = garden.clientHeight - ball.clientHeight;

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt345";
    window.addEventListener('deviceorientation', handleEvent);
}
else {
    document.getElementById("supported").innerText = "Keine Device Orient";
}

function handleEvent(event) {
    //alert (event.beta);
    //setInterval(changeBall, 3000, event.beta, event.gamma);
    let zeit = Date.now(); // Zeit in Millisekunden seit 1.1.1970
    // 200 ms vergangen
    if (zeit > vorigeZeit + 200) {
        vorigeZeit = zeit;
        document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(1);
        document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(1);


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
        y = Math.round(y / 5);

        // parseInt gibt die erste Zahl (Integer) zurück, die gefunden wird, px am Ende wird entfernt
        let top = parseInt(ball.style.top);
        let left = parseInt(ball.style.left);
        if (top > 200) top = 190;
        if (top < 0) top = 10;
        if (left > 200) left = 190;
        if (left < 0) left = 10;

        ball.style.top = (top + x) + "px";
        ball.style.left = (top + y) + "px";

        let ausgabe = "x: " + x + " beta: " + event.beta.toFixed(1) + "<br>";
        ausgabe = ausgabe + "y: " + y + " gamma: " + event.gamma.toFixed(1) + "<br>";
        ausgabe = ausgabe + " top: " + ball.style.top + "<br>";
        ausgabe = ausgabe + " left: " + ball.style.left + "<br>";
        output.innerHTML = ausgabe;
        //alert("Hallo aaa " + ausgabe);
    }
}



