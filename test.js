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


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid;
        document.getElementById("intro").innerHTML = "Welcome " + user.displayName;
    } else {
        document.getElementById("intro").innerHTML = "Nothing here";
    }
  });
// function SendMail(){
//   var API_KEY = 'f9e7bade1b61259ceab29083e24a6047-4879ff27-4ee83a82';
// var DOMAIN = 'sandbox00757d358ebf4c6799d124728c7cf740.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

// const data = {
//   from: 'SafePay <feyisamuell@gmail.com>',
//   to: 'lukii5212@gmail.com',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };

// mailgun.messages().send(data, (error, body) => {
//   console.log(body);
// });
// }

function SendMail(){
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox00757d358ebf4c6799d124728c7cf740.mailgun.org';
const mg = mailgun({apiKey: "f9e7bade1b61259ceab29083e24a6047-4879ff27-4ee83a82", domain: DOMAIN});
const data = {
	from: 'Excited User <feyisauell@gmail.com>',
	to: 'lukii5212@gmail.com, Olagesin@sandbox00757d358ebf4c6799d124728c7cf740.mailgun.org',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
}