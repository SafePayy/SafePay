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


  function GoToBuyPage(){
      window.location.assign("../BuyPage/buyIndex.html")
  }

  function GoToSellPage(){
      window.location.assign("../SellPage/sellIndex.html")
  }
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid;
        document.getElementById("intro").innerHTML = "Welcome " + user.displayName;
    } else {
    //   window.alert("Not signed in");
    }
  });



  function SignOut(){
    firebase.auth().signOut().then(function() {
        window.location.assign("../index.html")
    }).catch(function(error) {
      // An error happened.
    });
  } 

function change(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            document.getElementById("test").innerHTML = user.displayName;
        } else {
          window.alert("Not signed in");
        }
      });
}
