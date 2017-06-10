var config = {
  apiKey: "AIzaSyDkJBlyxIqIYe-vjrYSmkPZeXvwiNEKqFo",
  authDomain: "third-homework.firebaseapp.com",
  databaseURL: "https://third-homework.firebaseio.com",
  projectId: "third-homework",
  storageBucket: "third-homework.appspot.com",
  messagingSenderId: "261331058768"
};
firebase.initializeApp(config);
var database = firebase.database();


function getLastID(userID) {
  console.log("firebase: last id search");
  if (userID == "") {userID = 0;}
  database.ref("microsites" + userID).once("microPageID").then(function(snapshot) {
    var microPageID = snapshot().val.microPageID;
  });
  console.log("firebase: last id" + microPageID);
  return microPageID;
}

function addPage(pageName, pageURL, userID) {
  firebase.initializeApp(config);
  console.log("firebase: started adding page");
  if (userID == "") {userID = 0;}
  pageID = getLastID(userID) + 1;
  database.ref("microsites/" + userID).set(
    {
      microPageName: pageName,
      microPageURL: pageURL,
      microPageID: pageID
    }
  );
  console.log("firebase: Saved a microsite");
}
