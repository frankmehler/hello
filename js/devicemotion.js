// Inhalt des Scripts devicemotion.js:
/*
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
*/

if (window.DeviceOrientationEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Orient wird unterstützt!";
    window.addEventListener('deviceorientation', function(event) {
        document.getElementById("xBeschl").innerHTML = 'alpha ' + event.alpha.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'beta ' + event.beta;
        document.getElementById("zBeschl").innerHTML = 'gamme ' + event.gamma;
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Orient wird nicht unterstützt!";
}