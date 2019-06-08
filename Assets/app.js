  // Firebase configuration code
  var firebaseConfig = {
    apiKey: "AIzaSyA67SZGzCLIPI4YnxZgeP9EDwCRgVm_mPY",
    authDomain: "bncmultiplayer07june2019.firebaseapp.com",
    databaseURL: "https://bncmultiplayer07june2019.firebaseio.com",
    projectId: "bncmultiplayer07june2019",
    storageBucket: "bncmultiplayer07june2019.appspot.com",
    messagingSenderId: "686218092147",
    appId: "1:686218092147:web:9c287d2e934102ba"
  };
  
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  //Variables
  var wins1 = 0;
  var wins2 = 0;
  var losses1 = 0;
  var losses2 = 0;
  var ties = 0;
  var player1Choice;
  var player2Choice;

$(".player1 .bear").on("click", function () {
    var args = {
        name: "Player 1",
        choice: "bear",
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    database.ref().push(args); 
});

  database.ref().on("child_added", function (snapshot) {
    var record = snapshot.val();
    var player1Selection = $('#player1-choice').append(player1Choice);
    player1Selection.innerHTML = '<div>Player 1 has chosen <span\ id="player1-choice">' + player1Choice + '</span></div>';
});












//Scoring
  if ((player1Choice === "bear") || (player1Choice === "ninja") || (player1Choice === "cowboy")) {

    if ((player1Choice === "bear" && player2Choice === "ninja") ||
      (player1Choice === "ninja" && player2Choice === "cowboy") || 
      (player1Choice === "cowboy" && player2Choice === "bear")) {
      wins++;
    } else if (player1Choice === player2Choice) {
      ties++;
    } else {
      losses++;
    }
}