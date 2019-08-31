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
        backgroundColor: 'red',
        disableDoubleClickZoom: true,
    };
    let meineKarte = new google.maps.Map(document.getElementById('googleMap'), mapProp);

    let marker = new google.maps.Marker({
        position: thbingen,
        map: meineKarte
    });
    marker.addListener('click', function () {
        meineKarte.setZoom(16);
    });
    meineKarte.addListener('center_changed', function () {
        window.setTimeout(function () {
            meineKarte.panTo(marker.getPosition());
        }, 3000);
    });
}


/*
function initSecondMap() {
    let map = new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: 34.397, lng: 150.644 },
        scrollwheel: false,
        zoom: 2
    });
}
*/




