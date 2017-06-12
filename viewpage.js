if (sessionStorage.getItem("goToPage") !== "") {
  currentObject = JSON.parse(sessionStorage.getItem("goToPage"));
  sessionStorage.setItem("goToPage", "");
} else {
  window.location = "popup.html";
}
document.getElementById("microPageName").innerHTML += currentObject.name;
//document.getElementById("frame").src = "http://" + currentObject.url;
document.getElementById("frame").src = "https://87dc5f01.ngrok.io/ext/prx.php?address="+currentObject.url;
//alert("https://87dc5f01.ngrok.io/ext/prx.php?address="+currentObject.url);
var cnt;
document.getElementById("delete").addEventListener("click", function() {
  cnt =+ 1;
  for (cnt = 0; cnt < microSites.length; cnt++) {
    element = microSites[cnt];
    console.log(element.name);
    if (element.name === currentObject.name) {
      microSites.splice(cnt, 1);
      refreshSites();
      window.location = "popup.html";
    }
  }

})
