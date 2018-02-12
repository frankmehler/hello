if (window.DeviceOrientationEvent) {
    document.getElementById("doeSupported").innerText = "Supported DOE!";
    //window.addEventListener("deviceorientation", handleOrientation, true);
} else {
    document.getElementById("doeSupported").innerText = "Not Supported DOE!";
}

if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "Supported DME!";
    window.addEventListener('devicemotion', function(event) {
        console.log(event.acceleration.x + ' m/s2');
        document.getElementById("data").innerText = event.acceleration.x + ' m/s2';
    });
    //window.addEventListener("devicemotion", handleMotion, true);
} else {
    document.getElementById("doeSupported").innerText = "Not Supported DME!";
}

/*
if ('DeviceMotionEvent' in window) {
    document.getElementById('moApi').innerHTML = 'Device Motion API';

    var onDeviceMotion = function(eventData) {
        accelerationHandler(eventData.acceleration, 'moAccel');
        accelerationHandler(eventData.accelerationIncludingGravity, 'moAccelGrav');
        rotationHandler(eventData.rotationRate);
        intervalHandler(eventData.interval);
    }

    window.addEventListener('devicemotion', onDeviceMotion, false);
} else {
    document.getElementById('moApi').innerHTML = 'No Accelerometer & Gyroscope API available';
}

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
*/