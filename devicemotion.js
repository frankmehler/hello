if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        //console.log(event.acceleration.x + ' m/s2');
        document.getElementById("data").innerText = event.acceleration.x + ' m/s2';

        accelerationHandler(event.acceleration, 'moAccel');
        accelerationHandler(event.accelerationIncludingGravity, 'moAccelGrav');
        rotationHandler(event.rotationRate);
        intervalHandler(event.interval);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}

/*
    window.addEventListener('devicemotion', onDeviceMotion, false);
*/

function accelerationHandler(acceleration, targetId) {
    var info, xyz = "[X, Y, Z]";

    info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
    info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
    info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
    document.getElementById(targetId).innerHTML = info;
}

function rotationHandler(rotation) {
    var info, xyz = "[X, Y, Z]";

    info = xyz.replace("X", rotation.alpha && rotation.alpha.toFixed(3));
    info = info.replace("Y", rotation.beta && rotation.beta.toFixed(3));
    info = info.replace("Z", rotation.gamma && rotation.gamma.toFixed(3));
    document.getElementById("moRotation").innerHTML = info;
}

function intervalHandler(interval) {
    document.getElementById("moInterval").innerHTML = interval;
}