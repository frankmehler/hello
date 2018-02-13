maxiX = -1;
maxiY = -1;
maxiZ = -1;
if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
        if (event.acceleration.x > maxiX) {
            maxiX = event.acceleration.x;
            document.getElementById("meinMaxX").innerHTML = 'max x: ' + maxiX;
        }
        if (event.acceleration.y > maxiY) {
            maxiY = event.acceleration.y;
            document.getElementById("meinMaxY").innerHTML = 'max y: ' + maxiY;
        }
        if (event.acceleration.z > maxiZ) {
            maxiZ = event.acceleration.z;
            document.getElementById("meinMaxZ").innerHTML = 'max z: ' + maxiZ;
        }
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}