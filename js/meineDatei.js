"use strict";

// Erlaube spezielle undeklarierte Variablen für Google Maps 
/*global google*/
/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "initMap|marker" }]*/

function initMap() {
    let thbingen = {
        lat: 49.952381,
        lng: 7.925409
    };
    let mapProp = {
        center: new google.maps.LatLng(thbingen),
        zoom: 15,
    };
    let meineKarte = new google.maps.Map(document.getElementById('googleMap'), mapProp);

    let marker = new google.maps.Marker({
        position: thbingen,
        map: meineKarte
    });
}
