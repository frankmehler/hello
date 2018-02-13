maxi = -1;

if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);

        if (event.acceleration.z > maxi) {
            maxi = event.acceleration.z;
            document.getElementById("meinMax").innerHTML = 'max z: ' + maxi;
        }
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}