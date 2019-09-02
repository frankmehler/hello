"use strict";

// Erlaube spezielle undeklarierte Variablen für Google Maps 
/*global google*/
/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "initMap|marker" }]*/

function initMap() {
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 49.952381,
        lng: 7.925409}
    });
    directionsRenderer.setMap(map);

    let onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      alert(document.getElementById('start').value);
    directionsService.route(
        {
          origin: {placeId: document.getElementById('start').value},
          destination: {placeId: document.getElementById('end').value},
          travelMode: 'DRIVING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }
