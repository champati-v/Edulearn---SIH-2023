//Setting firebase with website
  const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQ-Sm8TJNZtYD-ahTT3ra7LKtwTOWldLw",
  authDomain: "user-authentication-72bf5.firebaseapp.com",
  databaseURL: "https://user-authentication-72bf5-default-rtdb.firebaseio.com",
  projectId: "user-authentication-72bf5",
  storageBucket: "user-authentication-72bf5.appspot.com",
  messagingSenderId: "91011468477",
  appId: "1:91011468477:web:0b1aab000f6c7985b03bd4"
   });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

   //Sign Up function

   const signUp= () =>{

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email,password)

    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
        // Signed in 
        console.log(result);
        console.log("Sign Up successful");
        alert("Sign up successful! you may login now.")
        // window.location.href = "index.html";
        // ...
         })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        // ..
        });

        if(password.length < 6){
            alert("Weak password! Must be atleast 6 character long.")
        }
   }

//    sign in function

const signIn = () =>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    console.log("You are signed in.")
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);

  });
}