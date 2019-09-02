"use strict";

alert("Hallo");

window.addEventListener('userproximity', function(event) {
    if (event.near) {
      // let's power off the screen
      alert("Hallo nahe");
      navigator.mozPower.screenEnabled = false;
      
    } else {
        alert("Hallo fern");
      // Otherwise, let's power on the screen
      navigator.mozPower.screenEnabled = true;
    }
  });