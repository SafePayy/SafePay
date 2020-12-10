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






const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user.email)
        let handler = PaystackPop.setup({
            key: "pk_test_6d6d43c3c08c27d0640c34d0d313d52bb630e8ad",
            // email: document.getElementById("emailId").value,
            email: user.email,
            amount: document.getElementById("priceId").value * 100,
            // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: function(){
              alert('Window closed.');
            },
            callback: function(response){
              let message = 'Payment complete! Reference: ' + response.reference;
              alert(message);
            }
          });
          handler.openIframe();
    } else {
    }
  });
}