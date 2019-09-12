"use strict";

//let garden = document.getElementById("meinSpiefeld");
let ball = document.getElementById("meinBall");
let goal = document.getElementById("meinTor");
let output = document.getElementById("output");
let vorigeZeit = 0; // Zeitzähler

let meinButton = document.getElementById("myBtn");
meinButton.addEventListener("click", verschieben);
function verschieben() {
    ball.style.top = 20 + "px";
    ball.style.left = 80 + "px";
}

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "OK - Device Orient wird unterstützt!";
    ball.style.top = 90 + "px"; // Startposition
    ball.style.left = 90 + "px"; // Startposition    
    goal.style.top = 150 + "px"; // Startposition
    goal.style.left = 150 + "px"; // Startposition
    window.addEventListener('deviceorientation', handleEvent);
}
else {
    document.getElementById("supported").innerText = "Keine Device Orient";
}

function handleEvent(event) {
    let zeit = Date.now(); // Zeit in Millisekunden seit 1.1.1970
    // 50 ms vergangen
    if (zeit > vorigeZeit + 50) {
        vorigeZeit = zeit;
        document.getElementById("beta").innerHTML = 'beta ' + event.beta.toFixed(1);
        document.getElementById("gamma").innerHTML = 'gamma ' + event.gamma.toFixed(1);

        let x = event.beta;  // Grad im Wertebereich [-180, +180] nach vorne - hinten +
        let y = event.gamma; // Grad im Wertebereich [-90, +90] nach rechts + nach links -
        if (x > 0)
            x = Math.min(20, x);
        else
            x = Math.max(-20, x);

        if (y > 0)
            y = Math.min(20, y);
        else
            y = Math.max(-20, y);

        x = Math.round(x / 10);
        y = Math.round(y / 5);

        // parseInt gibt die erste Zahl (Integer) zurück, die gefunden wird, px am Ende wird entfernt
        let top = parseInt(ball.style.top);
        let left = parseInt(ball.style.left);
        if (top > 200) top = 180;
        if (top < 0) top = 20;
        if (left > 180) left = 180;
        if (left < 0) left = 20;

        ball.style.top = (top + x) + "px";
        ball.style.left = (left + y) + "px";

        let goalTop = parseInt(goal.style.top);
        let goalLeft = parseInt(goal.style.left);
        if ((top + x) == goalTop && ((left + y) == goalLeft))
            alert("Treffer");
        if ((top + x + 1) == goalTop && ((left + y + 1) == goalLeft))
            alert("Treffer");
        if ((top + x - 1) == goalTop && ((left + y - 1) == goalLeft))
            alert("Treffer");
        if ((top + x + 1) == goalTop && ((left + y - 1) == goalLeft))
            alert("Treffer");
        if ((top + x - 1) == goalTop && ((left + y + 1) == goalLeft))
            alert("Treffer");

        let ausgabe = "x: " + x + " beta: " + event.beta.toFixed(1) + "<br>";
        ausgabe = ausgabe + "y: " + y + " gamma: " + event.gamma.toFixed(1) + "<br>";
        ausgabe = ausgabe + " top: " + ball.style.top + "<br>";
        ausgabe = ausgabe + " left: " + ball.style.left + "<br>";
        ausgabe = ausgabe + " goal top:: " + goalTop + "<br>";
        ausgabe = ausgabe + " goal left: " + goalLeft + "<br>";
        output.innerHTML = ausgabe;

    }
}



