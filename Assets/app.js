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
var playerNames = [];
var wins1 = 0;
var wins2 = 0;
var losses1 = 0;
var losses2 = 0;
var ties = 0;
var player1Choice = ["Bear", "Ninja", "Cowboy"];
var player2Choice = ["Bear", "Ninja", "Cowboy"];

$("#playername").on('click', function (event) {
  event.preventDefault();
  for (var i = 0; i < 2; i++) {
    playerNames.push()
  }
});
// var playerNames[0] =  $('#name-input').val().trim();
// $(".player1-name").append(player1Name);
//   var playerName[1] =  $('#name-input').val().trim();
//   $(".player2-name").append(player2Name);
// });
//click functions
// $("button").on("click", function () {
//     var args = {
//         name: "Player 1",
//         choice: "bear",
//         dateAdded: firebase.database.ServerValue.TIMESTAMP
//     };
//     database.ref().push(args); 
// });

//   database.ref().on("child_added", function (snapshot) {
//     var record = snapshot.val();
//     var player1Selection = $('#player1-choice').append(player1Choice);
//     player1Selection.innerHTML = '<div>Player 1 has chosen <span\ id="player1-choice">' + player1Choice + '</span></div>';
// });



//Scoring
if ((player1Choice === "bear") || (player1Choice === "ninja") || (player1Choice === "cowboy")) {

  if ((player1Choice === "bear" && player2Choice === "ninja") ||
    (player1Choice === "ninja" && player2Choice === "cowboy") ||
    (player1Choice === "cowboy" && player2Choice === "bear")) {
    wins1++;
    losses2++;
  } else if (player1Choice === player2Choice) {
    ties++;
  } else {
    wins2++
    losses1++;
  }
};

//chat box
function clearInput() {
  $('input#chat-enter').val("");
}

$('#chat-send').on('click', function () {
  var talk = $('input#chat-enter').val().trim();
  clearInput();
  // send talk to database
  database.ref().push({
    talk: talk
  })
});

function receiveTalkFromFirebase(snapshot) {
  var talk = snapshot.val().talk;
  $('.chit-chat').append("<div>" + talk + "</div>");
}

database.ref().on("child_added", receiveTalkFromFirebase);

