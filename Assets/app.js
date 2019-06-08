  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA67SZGzCLIPI4YnxZgeP9EDwCRgVm_mPY",
    authDomain: "bncmultiplayer07june2019.firebaseapp.com",
    databaseURL: "https://bncmultiplayer07june2019.firebaseio.com",
    projectId: "bncmultiplayer07june2019",
    storageBucket: "bncmultiplayer07june2019.appspot.com",
    messagingSenderId: "686218092147",
    appId: "1:686218092147:web:9c287d2e934102ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var databaseReference = firebase.database();
















  if ((player1 === "bear") || (player1 === "ninja") || (player1 === "cowboy")) {

    if ((player1 === "bear" && player2 === "ninja") ||
      (player1 === "ninja" && player2 === "cowboy") || 
      (player1 === "cowboy" && player2 === "bear")) {
      wins++;
    } else if (player1 === player2) {
      ties++;
    } else {
      losses++;
    }
}