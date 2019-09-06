"use strict";

//let garden = document.getElementById("meinSpiefeld");
let ball = document.getElementById("meinBall");
let output = document.getElementById("output");
let vorigeZeit = 0; // Zeitzähler

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    ball.style.top = 90 + "px"; // Startposition
    ball.style.left = 90 + "px"; // Startposition    
    // hier Startposition für Tor ergänzen!!!
    window.addEventListener('deviceorientation', handleEvent);
}
else {
    alert("Keine Device Orientation verfügbar");
}

function handleEvent(event) {
    let zeit = Date.now(); // Zeit in Millisekunden seit 1.1.1970
    // 50 ms vergangen
    if (zeit > vorigeZeit + 50) {
        vorigeZeit = zeit;
        // beta = Grad im Wertebereich [-180, +180] nach vorne - hinten +
        document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(1);
        // gamma = Grad im Wertebereich [-90, +90] nach rechts + nach links -
        document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(1);

        // parseInt gibt die erste Zahl (Integer) zurück, die gefunden wird, px am Ende wird entfernt
        //let top = parseInt(ball.style.top);
        //ball.style.top = (top + x) + "px";

        let ausgabe = "beta: " + event.beta.toFixed(1) + "<br>";
        ausgabe = ausgabe + "gamma: " + event.gamma.toFixed(1) + "<br>";
        ausgabe = ausgabe + "top: " + ball.style.top + "<br>";
        ausgabe = ausgabe + "left: " + ball.style.left + "<br>";
        output.innerHTML = ausgabe;
    }
}



