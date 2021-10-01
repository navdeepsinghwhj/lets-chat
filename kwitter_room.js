
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyA5KXi0WZ7XVjgFecInIPHGNSJUmjisEYQ",
      authDomain: "kwitter-12284.firebaseapp.com",
      databaseURL: "https://kwitter-12284-default-rtdb.firebaseio.com",
      projectId: "kwitter-12284",
      storageBucket: "kwitter-12284.appspot.com",
      messagingSenderId: "1028867007304",
      appId: "1:1028867007304:web:abee224aa0d1a59dd8897d",
      measurementId: "G-QH2LF16QYV"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
