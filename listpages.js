function refreshData() {
  if (microSites.length > 0) {
    document.getElementById("no_pages").style.display = "none";
    document.getElementById("listpages").style.display = "block";
    console.log("Trying to add microsites to list");
    for (var i = 0; i < microSites.length; i++) {
      console.log("Added site " + microSites[i].name);
      insertSite(microSites[i], i);
    }
    addListeners();
    return true;
  } else {
    document.getElementById("no_pages").style.display = "block";
    document.getElementById("listpages").style.display = "none";
    return false;
  }
}

refreshData();

function goToPage(id) {
  object = microSites[id];
  sessionStorage.setItem("goToPage", JSON.stringify(object));
  window.location = "viewpage.html";
  //alert(microSites[id].name + "\n" + object.url);
}

function insertSite(object, ID) {
  function goPage(e) {
    goToPage(e);
  }
  console.log("insertSite: inserting code for ID " + ID);
  document.getElementById("listOfSites").innerHTML += '<div class="microsite-main" id="'+ ID +'"><nav class="microsite name">'+object.name+'</nav><nav class="microsite url">'+object.url+'</nav></div>'
  var currentSite = document.getElementById(ID)
  /*currentSite.addEventListener("click", function() {
    console.log("AddEvent: " + ID);
  });*/
}

function addListeners() {

  for (var i = 0; i < microSites.length; i++) {
    object = microSites[i];
    var ID = i;
    console.log(ID);
    LetsDoThisReallyNow(ID);
    console.log("Adding listener to element " + i + "\n");
  }
}

function LetsDoThisReallyNow(ID) {
  document.getElementById(ID).addEventListener("click", function() {

    goToPage(ID);

  });
}
