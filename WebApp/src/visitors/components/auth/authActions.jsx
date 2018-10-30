import { SubmissionError } from 'redux-form'
// import { push } from 'react-router-redux';

export const login = (creds) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      // Get current user
      const authUser = await firestore.auth().currentUser;
      // Match new logged in user with user from (user table in) db
      const currentUser = await firestore.get({ collection: 'users', doc: authUser.uid });
      // Get the stage and usertype of the user
      const stage = currentUser.data().stage;
      const userType = currentUser.data().userType;
      console.log(stage, userType);
      // Automatically redirect to correct page
      //push('/company');
    }
    catch (error) {
      let message = '';
      if (error.code === 'auth/invalid-email') {
        message = "Please make sure you entered your email address in correctly.";
      }
      else if (error.code === 'auth/wrong-password') {
        message = "Please make sure you entered your password in correctly.";
      }
      else if (error.code === 'auth/user-not-found') {
        message = "Please make sure you entered your details in correctly alternatively you may not have signed up yet.";
      }
      throw new SubmissionError({
        _error: message
      })
    }
  }
}


export const registerCandidate = (user) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      // create user in firebase auth
      let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      console.log(createdUser);
      // update auth profile
      await createdUser.updateProfile({
        userType: 'candidate',
        name: user.name,
        surname: user.surname,
        photoURL: '/assets/user.png'
      })
      // create a new profile in firestore
      let newUser = {
        userType: 'candidate',
        name: user.name,
        surname: user.surname,
        photoURL: '/assets/user.png',
        createdAt: firestore.FieldValue.serverTimestamp(),
        stage1: true,
        stage2: false,
        stage3: false,
        stage4: true,
        stage5: false,
        stage6: false,
        approved: false,
        approvalStatus: 'pending'
      };
      await firestore.set(`users/${createdUser.uid}`, {...newUser});
    }
    catch (error) {
      console.log(error)
      throw new SubmissionError({
        _error: error.message
      })
    }
  }

  export const registerCompany = (user) =>
    async (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      try {
        // create user in firebase auth
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        console.log(createdUser);
        // update auth profile
        await createdUser.updateProfile({
          userType: 'company',
          name: user.name,
          surname: user.surname,
          companyName: user.companyName,
          companyNumber: user.companyNumber
        })
        // create a new profile in firestore
        let newUser = {
          userType: 'company',
          name: user.name,
          surname: user.surname,
          companyName: user.companyName,
          companyNumber: user.companyNumber,
          createdAt: firestore.FieldValue.serverTimestamp(),
          stage1: true,
          stage2: false,
          stage3: false,
          approved: false,
          approvalStatus: 'pending',
          positions: []
        };
        await firestore.set(`users/${createdUser.uid}`, {...newUser});
      }
      catch (error) {
        console.log(error)
        throw new SubmissionError({
          _error: error.message
        })
      }
    }