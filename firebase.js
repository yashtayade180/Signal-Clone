import * as firebase from "firebase" ;
import "firebase/firestore" ;
import "firebase/auth" ;

const firebaseConfig = {
    apiKey: "AIzaSyB5fslQrlxRAwQoiNcHk9eCBbWrX7OuHhw",
    authDomain: "signal-clone-230b8.firebaseapp.com",
    projectId: "signal-clone-230b8",
    storageBucket: "signal-clone-230b8.appspot.com",
    messagingSenderId: "385531208799",
    appId: "1:385531208799:web:2ed48dd0e5f850106ce7ea"
  };

  let app ;
  
  if (firebase.apps.length === 0){
     app = firebase.initializeApp(firebaseConfig)
  } else{
     app = firebase.app() ;
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export{db,auth} ;