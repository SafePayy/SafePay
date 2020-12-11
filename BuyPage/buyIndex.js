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
  let money = document.getElementById("priceId").value * 100;
  var extraCharge = 0;
  if(money > 100 && money < 5000){
    extraCharge = 7.5 * ((money)/100)
  }
  else if(money > 5001 && money < 50000){
    extraCharge = 11.5 * ((money) / 100)
  }
  else if(money > 50001){
    extraCharge = 16.5 * ((money) / 100)
  }
  firebase.auth().onAuthStateChanged(function(user) {
    sellerMail = document.getElementById("emailId").value
    if (user) {
        console.log(user.email)
        let handler = PaystackPop.setup({
            key: "pk_test_6d6d43c3c08c27d0640c34d0d313d52bb630e8ad",
            // email: document.getElementById("emailId").value,
            email: user.email,
            amount: money + extraCharge,
            // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: function(){
              alert('Window closed.');
            },
            callback: function(response){
              sendEmail(sellerMail);
              // register();
              let message = 'Payment complete! Reference: ' + response.reference;
              alert(message);
              window.location.assign("../FormPage/formIndex.html")
            }
          });
          handler.openIframe();
    } else {
      window.location.assign("../Signin/signin.html")
    }
  });
}
var strr = new String("../Confirmation/buyerConfirm.html")
var link = str.link(strr)
function sendEmail(sellersMail) { 
  Email.send({ 

      Host: "smtp.gmail.com", 
  
      Username: "testmailer1289@gmail.com", 
  
      Password: "uybuyywcdgdenxst", 
  
      To: sellersMail, 
  
      From: "testmailer1289@gmail.com", 
  
      Subject: "Proof of Payment", 
  
      Body: "Hello there, a transaction for the purchase of your products has been initiated on SafePay. " +
      "Follow the link below to confirm the transaction (this is a test mail tho)" +  link
  
    }) 

    .then(function (message) { 
      alert("mail sent successfully") 
    }); 

} 

function register(){
  var deets = user.transactionDetails = {
    buyerMail: document.getElementById("emailId").value,
    inProgress: "yes",
    completed: "no",
    item: document.getElementById("purchaseId").value,
    transId: ''+Math.floor((Math.random() * 1000000000) + 1),
  }
  user.listOfTransaction.push(deets)
  console.log(deets.completed);
}