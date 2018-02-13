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
    document.getElementById("yBeschl").style.color = "red";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("zBeschl").style.color = "green";
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
    });
}

function beschlAusschalten() {
    window.addEventListener('devicemotion', onDeviceMotion, false);
}

function eventBearbeiten(event) {
    // siehe https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Number/toFixed
    document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
    document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
    document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
}

/*
    window.addEventListener('devicemotion', onDeviceMotion, false);
*/

function accelerationHandler(acceleration, targetId) {
    var info, xyz = "[X, Y, Z]";

    info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(1));
    info = info.replace("Y", acceleration.y && acceleration.y.toFixed(1));
    info = info.replace("Z", acceleration.z && acceleration.z.toFixed(1));
    document.getElementById(targetId).innerHTML = info;
}

function rotationHandler(rotation) {
    var info, xyz = "[X, Y, Z]";

    info = xyz.replace("X", rotation.alpha && rotation.alpha.toFixed(2));
    info = info.replace("Y", rotation.beta && rotation.beta.toFixed(2));
    info = info.replace("Z", rotation.gamma && rotation.gamma.toFixed(2));
    document.getElementById("moRotation").innerHTML = info;
}

function intervalHandler(interval) {
    document.getElementById("moInterval").innerHTML = interval;
}