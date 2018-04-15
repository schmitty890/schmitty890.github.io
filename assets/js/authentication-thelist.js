var auth = firebase.auth();


$(document).on('click', '#sign-up', function() {
  var email = 'schmitty890@gmail.com';
  var password = 'schmiiiii';
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});

$(document).on('click', '#log-in', function() {
  console.log('log in');
  var email = 'schmitty890@gmail.com';
  var password = 'schmiiiii';
  firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
});

$(document).on('click', '#log-out', function() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
});

var user = firebase.auth().currentUser;

if (user) {
  console.log('User is signed in.');
} else {
  console.log('No user is signed in.');
}