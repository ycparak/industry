import { toastr } from 'react-redux-toastr';

// Accept company method
export const acceptUser = (ID) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`users/${ID}`, {
        approved: true,
        approvalStatus: 'accepted'
      })

      // Toastr message
      toastr.success('Success', 'Successfully accepted user');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Reject company method
export const rejectUser = (ID) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`users/${ID}`, {
        approved: false,
        approvalStatus: 'rejected'
      })

      // Toastr message
      toastr.success('Success', 'Successfully rejected user');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Accept candidate method
export const acceptCandidate = (ID) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`users/${ID}`, {
        approved: true,
        approvalStatus: 'accepted'
      })

      // Toastr message
      toastr.success('Success', 'Successfully accepted user');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Reject candidate method
export const rejectCandidate = (ID) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`users/${ID}`, {
        approved: false,
        approvalStatus: 'rejected'
      })

      // Toastr message
      toastr.success('Success', 'Successfully rejected user');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Submit skills method
export const submitSkills = (skillsScores, ID, user) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    let updatedUser = {
      ...user,
      skillsScores
    }
    try {
      console.log(updatedUser)
      await firestore.update(`users/${ID}`, updatedUser)
      // Toastr message
      toastr.success('Success', 'Successfully rejected user');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }