import {toastr} from 'react-redux-toastr';

export const addToPosition = (position, user) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const company = firestore.auth().currentUser;
    const unContactedCandidate = {
      name: user.name,
      surname: user.surname,
      photoURL: user.photoURL,
      stage: 'uncontacted',
      status: null,
      interviewDate: null,
      message: null,
      salary: null,
      perks: null,
      startDate: null
    }
    try {
      await firestore.update(`positions/${position.id}`, {
        [`candidates.${user.id}`]: unContactedCandidate
      })
      await firestore.set(`position_candidates/${position.id}_${user.id}`, {
        candidateId: user.id,
        positionId: position.id,
        companyId: company.uid,
        stage: 'uncontacted'
      })
      toastr.success('Success', 'Successfully added candidate to position');
    }
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Error adding candidate to position');
    }
 
  }