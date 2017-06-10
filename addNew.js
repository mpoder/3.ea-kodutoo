function addNewSite() {
  var pageName = document.forms["addpage"]["pagename"].value;
  var pageURL = document.forms["addpage"]["pageurl"].value;
  if (pageName != "" && pageURL != "") {
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "block";
    document.getElementById("pagename").innerHTML = pageName;
    document.getElementById("addnew").style.display = "none";
    newPage = new microSite(pageName, pageURL);
    microSites.push(newPage);
    console.log("Created new site\n" + pageName + "\n" + pageURL);
    console.log(microSites.length);
    console.log("calling on firebase");
    addPage(pageName, pageURL);
    console.log("firebase function finished");
  } else {
    document.getElementById("error").style.display = "block";
  }

}

addsite = function() {
  addNewSite();
}
var addButton = document.getElementById("add_page");
addButton.addEventListener("click", addsite);
