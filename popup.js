class microSite {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

var microSites = [];
var element = new microSite("Facebook", "facebook.com");
microSites.push(element);

var button_addnew = document.getElementById('add_new');
if (button_addnew) {
button_addnew.addEventListener(click, createPage());
}
function createPage() {
  alert("Oh noes!");
}


firebase.auth().signInWithEmailAndPassword("mpoder@tlu.ee", "MihkelMihkel").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});





firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
// Get a reference to the database service
