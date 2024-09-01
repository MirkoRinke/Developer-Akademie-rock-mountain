function addMousePositionToCss() {
  const elements = document.querySelectorAll(".mouse-position");
  for (const element of elements) {
    element.addEventListener("mousemove", function (e) {
      var rect = element.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      element.style = "--mouse-x:" + x / element.offsetWidth + ";--mouse-y:" + y / element.offsetHeight + ";";
    });
    element.addEventListener("mouseleave", function (e) {
      element.style = "";
    });
  }
}

window.addEventListener("load", addMousePositionToCss, false);
