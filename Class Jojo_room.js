var firebaseConfig = {
      apiKey: "AIzaSyCJcl_OJDxdMtpVDYLqvwDb4MMg7CIRIaQ",
      authDomain: "kwitter-4091a.firebaseapp.com",
      databaseURL: "https://kwitter-4091a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4091a",
      storageBucket: "kwitter-4091a.appspot.com",
      messagingSenderId: "357159517711",
      appId: "1:357159517711:web:a055c3452c31d20ee62d7a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
