var firebaseConfig = {
    apiKey: "AIzaSyAP4scYff5IptGqdso7x2g2qEVHWVwH_mE",
    authDomain: "safepay-f4d6f.firebaseapp.com",
    projectId: "safepay-f4d6f",
    databaseURL: "https://safepay-f4d6f-default-rtdb.firebaseio.com/",
    storageBucket: "safepay-f4d6f.appspot.com",
    messagingSenderId: "666232623305",
    appId: "1:666232623305:web:d5df501e773fe999693d18",
    measurementId: "G-7B4255Y8FE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var rootRef = firebase.database().ref("Users");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function SignOut(){
    firebase.auth().signOut().then(function() {
      window.alert("signed out alaye")
    }).catch(function(error) {
      // An error happened.
    });
  }


  function GoogleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then((response) => {

      console.log("welcome")
      window.location.assign("../FormPage/formIndex.html")

    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;

      var email = error.email;
      var credential = error.credential;
    });
  }

function submitForm(event){
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phoneNumber = document.getElementById('phoneNumberInput').value;
    let email = document.getElementById('emailInput');
    let password = document.getElementById('passwordInput');


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((result) => {
    result.user.updateProfile({
      displayName: firstName + " " + lastName,
      phoneNumber: phoneNumber,
      firstName: firstName,
      email: email
  })
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })
  saveUser(firstName, lastName, phoneNumber, email.value, password.value);

  setTimeout(() => {
    
  }, 3000);
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    document.getElementById("contactForm").reset();
  window.location.assign("../FormPage/formIndex.html")
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // window.alert("Error: " + errorMessage);
  });

  // if(user){
  //   document.getElementById("contactForm").reset();
  // window.location.assign("../FormPage/formIndex.html")
  // }else{
  //   window.alert("Error signing in")
  // }
}


function saveUser(firstName, lastName, phoneNumber, email, password) {
    var newUserRef = rootRef.push();

    newUserRef.set({
        firstName: firstName,
        lastName: lastName,
        displayName: firstName + " " + lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password
    });
}
