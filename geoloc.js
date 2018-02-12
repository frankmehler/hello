if (navigator.geolocation) {
    var options = {
        enableHighAccuracy: true,
    }
    navigator.geolocation.getCurrentPosition(showPosition, showError, options);
} else {
    alert('Ihr Browser unterstützt die W3C Geolocation API nicht.');
}

function showPosition(position) {
    alert(
        'Die Geoposition dieses Geräts ist (Stand: ' + new Date(position.timestamp).toLocaleTimeString() + '):\n' +
        'Breitengrad: ' + position.coords.latitude + '° \n' +
        'Längengrad: ' + position.coords.longitude + '° \n' +
        '  Genauigkeit: ' + position.coords.accuracy + 'm\n' +
        (position.coords.altitude ? ('Höhe: ' + position.coords.altitude + 'm\n' +
            '  Genauigkeit: ' + position.coords.altitudeAccuracy + 'm') : "")
    );
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Sie haben die Abfrage ihrer Geoposition untersagt.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Es sind keine Geopositionsdaten verfügbar.');
            break;
        case error.TIMEOUT:
            alert('Das Timeout für die Ortsanfrage wurde überschritten.');
            break;
        default:
            alert('Es ist ein unbekannter Fehler aufgetreten (#' + error.code + ': ' + error.message + ')');
            break;
    }
}