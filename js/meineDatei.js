"use strict";

alert("Hallo");

if ('ondevicelight' in window) {
    window.addEventListener('devicelight', function(event) {
      let body = document.querySelector('body');
      if (event.value < 50) {
        alert('darklight');
        body.classList.remove('brightlight');
      } else {
        alert('brightlight');
        body.classList.remove('darklight');
      }
    });
  } else {
    alert('devicelight event not supported');
  }