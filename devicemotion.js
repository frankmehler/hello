if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}

function myFunction() {
    document.getElementById("y").style.color = "red";
    //Event mit Parameter: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
    window.addEventListener('devicemotion', function(event) { eventBearbeiten(event) });
}


function eventBearbeiten(event) {
    // siehe https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Number/toFixed
    document.getElementById("z").style.color = "green";
    document.getElementById("x").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
    document.getElementById("y").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
    document.getElementById("z").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
}

function beschlAusschalten() {
    document.getElementById("x").style.color = "blue";
    //Event mit Parameter: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
    window.removeEventListener('devicemotion', function(event) { eventBearbeiten(event) });
}