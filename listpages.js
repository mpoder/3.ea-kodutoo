function refreshData() {
  if (microSites.length > 0) {
    document.getElementById("no_pages").style.display = "none";
    document.getElementById("listpages").style.display = "block";
    for (i = 0; i == microSites.length; i++) {
      insertSite(microSites[i]);
    }
  } else {
    document.getElementById("no_pages").style.display = "block";
    document.getElementById("listpages").style.display = "none";
  }
}

function insertSite(object) {

  document.getElementById("listOfSites").innerHTML += '<div class="microsite-main"><nav class="microsite name">'+object.name+'</nav><nav class="microsite url">'+object.url+'</nav></div>'
}

refreshData();
