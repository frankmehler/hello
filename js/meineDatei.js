"use strict";
let ball = document.getElementById("meinBall");
let output = document.getElementById("output");
let vorigeZeit = 0; // Zeitzähler

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

        //parseInt gibt die erste gefundene Zahl (Integer) zurück, px entfernt
        //let top = parseInt(ball.style.top);
        //ball.style.top = (top + x) + "px";

        // beta = Grad im Wertebereich [-180, +180] nach vorne - hinten +
        // gamma = Grad im Wertebereich [-90, +90] nach rechts + nach links -
        let ausgabe = "beta: " + event.beta.toFixed(1) + "<br>";
        ausgabe = ausgabe + "gamma: " + event.gamma.toFixed(1) + "<br>";
        ausgabe = ausgabe + "top: " + ball.style.top + "<br>";
        ausgabe = ausgabe + "left: " + ball.style.left + "<br>";
        output.innerHTML = ausgabe;
    }
}
