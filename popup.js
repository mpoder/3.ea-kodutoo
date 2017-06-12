class microSite {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
var microSites = [];

if (localStorage.getItem("microSites")) {
  var microSites = JSON.parse(localStorage.getItem("microSites"));
} else {
  var microSites = [];
}

var button_addnew = document.getElementById('add_new');
if (button_addnew) {
button_addnew.addEventListener(click, createPage());
}

function createSite(pageTitle, pageURL) {
  newSite = new microSite(pageTitle, pageURL);
  microSites.push(newSite);
  localStorage.setItem("microSites", JSON.stringify(microSites));
}

function refreshSites() {
  localStorage.setItem("microSites", JSON.stringify(microSites));
}

function createPage() {
}


firebase.auth().signInWithEmailAndPassword("mpoder@tlu.ee", "MihkelMihkel").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});
