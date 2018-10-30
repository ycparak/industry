import { toastr } from 'react-redux-toastr'
import { FETCH_POSITIONS } from './positionConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../shared/common/async/asyncActions';
import { fetchSampleData } from '../../../shared/data/mockApi'
import { createNewPosition } from '../../../shared/common/util/helpers'


export const fetchPositions = (positions) => {
  return {
    type: FETCH_POSITIONS,
    payload: positions
  }
}

export const createPosition = (position) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newPosition = createNewPosition(user, position, photoURL)
    try {
      await firestore.add(`positions`, newPosition);
      toastr.success('Success!', 'Position has been created');
    }
    catch (error) {
      console.log(error);
      toastr.error('Oops!', 'Something went wrong');
    }
  };
}

export const updatePosition = (position) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`positions/${position.id}`, position);

      toastr.success('Success!', 'Position has been updated');
    }
    catch (error) {
      toastr.error('Oops!', 'Something went wrong');
    }
  };
}

export const deletePosition = (positionid) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.delete(`positions/${positionid}`, positionid);
      toastr.success('Success!', 'Position has been deleted');
    }
    catch (error) {
      toastr.error('Oops!', 'Something went wrong');
    }
  }
}

export const loadPositions = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let positions = await fetchSampleData();
      dispatch(fetchPositions(positions));
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}

export const removeCandidate = (candidate, position) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const company = firestore.auth().currentUser;
    try {
      // Delete from positions table
      await firestore.update(`positions/${position.id}`, {
        [`candidates.${candidate.id}`]: firestore.FieldValue.delete()
      })
      // Delete from lookup table
      await firestore.delete(`position_candidates/${position.id}_${candidate.id}`, `${position.id}_${candidate.uid}`);
      toastr.success('Success', 'Successfully removed candidate from this position');
    }
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }
}