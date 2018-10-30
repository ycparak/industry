import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY1LlvJFqALGrPv-n23yW42qMs_R8btXM",
  authDomain: "industry-14-new.firebaseapp.com",
  databaseURL: "https://industry-14-new.firebaseio.com",
  projectId: "industry-14-new",
  storageBucket: "gs://industry-14-new.appspot.com",
  messagingSenderId: "451063734402"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firebase;