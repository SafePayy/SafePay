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

  document.getElementById("regForm").addEventListener("submit", signInForm);


  function signInForm(event) {
      event.preventDefault();

      let email = document.getElementById("email-signin").value;
      let password = document.getElementById("password-signin").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
          window.alert("signed in")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      });
      if(user){
        window.location.assign("../FormPage/formIndex.html")
      }
      else{
        window.alert("error signing in")
      }
  }
