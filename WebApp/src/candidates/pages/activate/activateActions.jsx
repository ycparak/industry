import { toastr } from 'react-redux-toastr';

export const activateAccount = (user) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...updatedUser} = user;
    const newUser = {
      ...updatedUser,
      stage6: true
    }
    try {
      await firebase.updateProfile(newUser);
      toastr.success('Success', 'Profile updated')
    }
    catch (error) {
      console.log(error);
    }
  }