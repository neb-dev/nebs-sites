function themeHandler() {
  "use strict";
  
  var theme = document.getElementsByTagName("BODY")[0].className === "dark" ?
      document.getElementsByTagName("BODY")[0].className = "light" :
      document.getElementsByTagName("BODY")[0].className = "dark";
  
  return theme;
}

var document = document;

document.getElementById("toggle-theme").addEventListener("click", themeHandler);
