import * as firebase from 'firebase/app';
import "firebase/auth";


 var firebaseConfig = {
        apiKey: "AIzaSyAuakWhMNPEbPAXr8DAzCJe61Qd1QlxPGA",
    authDomain: "musicapp-5634b.firebaseapp.com",
    databaseURL: "https://musicapp-5634b.firebaseio.com",
    projectId: "musicapp-5634b",
    storageBucket: "musicapp-5634b.appspot.com",
    messagingSenderId: "809559438313",
    appId: "1:809559438313:web:d43360926cdfca3dcf5178",
    measurementId: "G-T106W7157K"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;