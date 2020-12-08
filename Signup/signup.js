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


// Event Listener

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phoneNumber = document.getElementById('phoneNumberInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    //Save User To Database
    saveUser(firstName, lastName, phoneNumber, email, password);

    document.getElementById("contactForm").reset();
}

function saveUser(firstName, lastName, phoneNumber, email, password) {
    var newUserRef = rootRef.push();

    newUserRef.set({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password
    });
}