

if('ondeviceproximity' in window) {
    // Fired when object is in the detection zone
    window.addEventListener('deviceproximity', function(event) {
        // Object distance in centimeters 
        alert(event.value + " centimeters");
    });
} else {
    alert("deviceproximity not supported");
}

if('ondeviceproximity' in window){
    // Fired when object is in the detection zone
    window.addEventListener('userproximity', function(event) {
        if(event.near == true) {
            alert("Object is near");
        } else {
            alert("Object is far");
        }
    });
} else {
    alert("userproximity not supported");
}

