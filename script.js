function addMousePositionToCss() {
  const elements = document.querySelectorAll(".mouse-position"); // Alle Elemente mit der Klasse .mouse-position abrufen.
  for (const element of elements) {
    element.addEventListener("mousemove", function (e) {
      // Beim Bewegen der Maus die Position berechnen und als CSS-Variable zurückgeben.
      var rect = element.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      element.style =
        "--mouse-x:" +
        x / element.offsetWidth +
        ";--mouse-y:" +
        y / element.offsetHeight +
        ";";
    });
    element.addEventListener("mouseleave", function (e) {
      // Wenn die Maus das Element verlässt, das Styling leeren.
      element.style = "";
    });
  }
}

// Auf das vollständige Laden der Seite warten und dann die Funktion ausführen.
window.addEventListener("load", addMousePositionToCss, false);
