"use strict";
// Erlaube spezielle undeklarierte Variablen für Google Maps 
/*global google*/
/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "initMap|marker|showPosition" }]*/
document.getElementById('meinButton').addEventListener('click', holePosition);

function holePosition() {
    if (navigator.geolocation) {
        document.getElementById("geoSupported").innerText = "OK - Geolocation wird unterstützt!";
        let options = {
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    } else {
        document.getElementById("geoSupported").innerText = "Geolocation nicht unterstützt!";
    }
}

function showPosition(position) {
    document.getElementById("breite").innerHTML = 'Breitengrad: ' + position.coords.latitude;
    document.getElementById("laenge").innerHTML = 'Längengrad: ' + position.coords.longitude;
    document.getElementById("genau").innerHTML = 'Genauigkeit: ' + position.coords.accuracy + 'm';
    document.getElementById("hoch").innerHTML = 'Höhe: ' + position.coords.altitude;
    document.getElementById("richtung").innerHTML = 'Himmelsrichtung in Grad: ' + position.coords.heading;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let latlon = new google.maps.LatLng(lat, lon);
    let mapholder = document.getElementById('mapholder');
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    let myOptions = {
        center: latlon,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    };
    let map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    let marker = new google.maps.Marker({ position: latlon, map: map, title: "You are here!" });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Abfrage der Geoposition untersagt.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Es sind keine Geopositionsdaten verfügbar.');
            break;
        case error.TIMEOUT:
            alert('Timeout überschritten.');
            break;
        default:
            alert('Unbekannter Fehler');
            break;
    }
}

