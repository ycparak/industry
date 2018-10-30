import { toastr } from 'react-redux-toastr';

export const updateCompProfile = (user) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...updatedUser} = user;
    const newUser = {
      ...updatedUser,
      stage2: true
    }
    try {
      await firebase.updateProfile(newUser);
      toastr.success('Success', 'Profile updated')
    }
    catch (error) {
      console.log(error);
    }
  }