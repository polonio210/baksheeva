import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDR589TXD3FNZBU7WzgVPo-yOFd6X5A2bM",
    authDomain: "natribaksheeva-dbb58.firebaseapp.com",
    databaseURL: "https://natribaksheeva-dbb58.firebaseio.com",
    projectId: "natribaksheeva-dbb58",
    storageBucket: "natribaksheeva-dbb58.appspot.com",
    messagingSenderId: "132030827606"
};
firebase.initializeApp(config);
// export const databaseFb = firebase.database().ref('');
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;