// Inhalt von meineDatei.js:
var checkbox = document.querySelector("input[id=checkbox1]");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        alert('angekreuzt');
    } else {
        // Checkbox is not checked..
        alert('nicht angekreuzt');
    }
});