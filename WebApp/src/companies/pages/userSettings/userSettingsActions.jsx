import { reset } from 'redux-form'
import { toastr } from 'react-redux-toastr';

export const updateCompUserSettings = (creds) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      await user.updatePassword(creds.newPassword1);
      await dispatch(reset('compUserSettingsDetailsForm'));
      toastr.success('Success', 'Settings updated');
    }
    catch (error) {
      toastr.error('Error', error.message);
    }
  }