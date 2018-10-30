import { toastr } from 'react-redux-toastr';

export const updateCompUserProfile = (user) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...updatedUser} = user;
    try {
      await firebase.updateProfile(updatedUser);
      toastr.success('Success', 'Profile updated')
    }
    catch (error) {
      console.log(error);
    }
  }