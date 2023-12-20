
var firebaseConfig = {
    apiKey: "AIzaSyBydKXGfRSNFFiYAG3YaxdAHaafTz8E5NA",
    authDomain: "sidhhguru-f368c.firebaseapp.com",
    projectId: "sidhhguru-f368c",
    storageBucket: "sidhhguru-f368c.appspot.com",
    messagingSenderId: "262521010356",
    appId: "1:262521010356:web:18614aaebeb0ff878c3fe1",
    measurementId: "G-P975JFTRG5"
  };

firebase.initializeApp(firebaseConfig);

// Sign up function using Firebase Authentication
function signup() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            var user = userCredential.user;
            console.log('Sign Up:', user.uid, user.email);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Sign Up Error:', errorCode, errorMessage);
        });
}

// Login function using Firebase Authentication
function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            var user = userCredential.user;
            console.log('Login:', user.uid, user.email);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Login Error:', errorCode, errorMessage);
        });
}

