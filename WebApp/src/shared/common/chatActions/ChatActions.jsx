import { toastr } from 'react-redux-toastr';

/*
 * COMPANIES
 * 
*/
// Send interview request method
export const sendInterviewRequests = (candidateID, message) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // Get the company
    const company = firestore.auth().currentUser;
    const positionID = message.positionID;
    try {
      // Get the candidate and position
      const candidate = await firestore.get(`users/${candidateID}`);
      const interviewExtended = {
        name: candidate.data().name,
        surname: candidate.data().surname,
        photoURL: candidate.data().photoURL,
        stage: 'interviewExtended',
        status: 'pending',
        interviewDate: message.date,
        message: message.message,
        startDate: null,
        salary: null,
        perks: null
      }
      const position = await firestore.get(`positions/${positionID}`);
      const c_p = await firestore.get(`position_candidates/${positionID}_${candidateID}`);

      // Change 'stage' field in positions table and position_candidates lookup table to reference interviewExtended
      if (c_p.exists) {
        await firestore.update(`positions/${position.id}`, {
          [`candidates.${candidateID}`]: interviewExtended
        })
        await firestore.update(`position_candidates/${positionID}_${candidateID}`, { stage: 'interviewExtended', status: 'pending' })
      }
      // else Add them to positions table and positions_candidates
      else {
        await firestore.update(`positions/${positionID}`, {
          [`candidates.${candidateID}`]: interviewExtended
        })
        await firestore.set(`position_candidates/${positionID}_${candidateID}`, {
          candidateId: candidateID,
          positionId: positionID,
          companyId: company.uid,
          stage: 'interviewExtended',
          status: 'pending'
        })
      }

      // Add to the chat table
      await firestore.set(`interview_requests/${candidateID}_${positionID}`, {
        ...interviewExtended, 
        companyId: company.uid,
        candidateId: candidateID,
        positionId: positionID
      })

      // Toastr message
      toastr.success('Success', 'Successfully sent interview request');
    }
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }
  
// Send offerr letter method
export const sendOfferLetter = (candidateID, message) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // Get the company
    const company = firestore.auth().currentUser;
    const positionID = message.positionID;
    try {
      // Get the candidate and position
      const candidate = await firestore.get(`users/${candidateID}`);
      const interviewExtended = {
        name: candidate.data().name,
        surname: candidate.data().surname,
        photoURL: candidate.data().photoURL,
        stage: 'offerExtended',
        status: 'pending',
        interviewDate: null,
        message: message.message,
        salary: message.salary,
        perks: message.perks,
        startDate: message.startDate,
        
      }
      const position = await firestore.get(`positions/${positionID}`);
      const c_p = await firestore.get(`position_candidates/${positionID}_${candidateID}`);

      // Change 'stage' field in positions table and position_candidates lookup table to reference interviewExtended
      if (c_p.exists) {
        await firestore.update(`positions/${position.id}`, {
          [`candidates.${candidateID}`]: interviewExtended
        })
        await firestore.update(`position_candidates/${positionID}_${candidateID}`, { stage: 'interviewExtended', status: 'pending' })
      }
      // else Add them to positions table and positions_candidates
      else {
        await firestore.update(`positions/${positionID}`, {
          [`candidates.${candidateID}`]: interviewExtended
        })
        await firestore.set(`position_candidates/${positionID}_${candidateID}`, {
          candidateId: candidateID,
          positionId: positionID,
          companyId: company.uid,
          stage: 'offerExtended',
          status: 'pending'
        })
      }

      // Add to the chat table
      await firestore.set(`offer_letters/${candidateID}_${positionID}`, {
        ...interviewExtended, 
        companyId: company.uid,
        candidateId: candidateID,
        positionId: positionID
      })

      // Toastr message
      toastr.success('Success', 'Successfully sent interview request');
    }
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

/*
 * CANDIDATES
 * 
*/
// Accept interview request method
export const acceptInterviewRequest = (positionID, candidateID, candidate, interview, message) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const interviewExtended = {
      name: candidate.name,
      surname: candidate.surname,
      photoURL: candidate.photoURL,
      stage: 'interviewing',
      status: 'accepted',
      interviewDate: interview,
      message: message,
      startDate: null,
      salary: null,
      perks: null
    }
    try {
      await firestore.update(`positions/${positionID}`, {
        [`candidates.${candidateID}`]: interviewExtended
      })

      await firestore.update(`interview_requests/${candidateID}_${positionID}`, {
        ...interviewExtended
      })

      await firestore.update(`position_candidates/${positionID}_${candidateID}`, {
        status: 'accepted',
        stage: 'interviewing'
      })

      // Toastr message
      toastr.success('Success', 'Successfully accepted interview request');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Reject interview request method
export const rejectInterviewRequest = (positionID, candidateID, candidate, interview, message) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const interviewExtended = {
      name: candidate.name,
      surname: candidate.surname,
      photoURL: candidate.photoURL,
      stage: 'interviewExtended',
      status: 'rejected',
      interviewDate: interview,
      message: message,
      startDate: null,
      salary: null,
      perks: null
    }
    try {
      await firestore.update(`positions/${positionID}`, {
        [`candidates.${candidateID}`]: interviewExtended
      })

      await firestore.update(`interview_requests/${candidateID}_${positionID}`, {
        ...interviewExtended
      })

      await firestore.update(`position_candidates/${positionID}_${candidateID}`, {
        status: 'rejected',
      })

      // Toastr message
      toastr.success('Success', 'Successfully rejected interview request');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }


// Accept offer letter method
export const acceptOfferLetter = (positionID, candidateID, candidate, req) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const interviewExtended = {
      name: candidate.name,
      surname: candidate.surname,
      photoURL: candidate.photoURL,
      stage: 'hired',
      status: 'accepted',
      interviewDate: null,
      message: req.message,
      startDate: req.startDate,
      salary: req.salary,
      perks: req.perks
    }
    try {
      await firestore.update(`positions/${positionID}`, {
        [`candidates.${candidateID}`]: interviewExtended
      })

      await firestore.update(`offer_letters/${candidateID}_${positionID}`, {
        ...interviewExtended
      })

      await firestore.update(`position_candidates/${positionID}_${candidateID}`, {
        status: 'accepted',
        stage: 'hired'
      })

      // Toastr message
      toastr.success('Success', 'Successfully accepted offer letter');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }

// Reject offer letter method
export const rejectOfferLetter = (positionID, candidateID, candidate, req) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const interviewExtended = {
      name: candidate.name,
      surname: candidate.surname,
      photoURL: candidate.photoURL,
      stage: 'offerExtended',
      status: 'rejected',
      interviewDate: null,
      message: req.message,
      startDate: req.startDate,
      salary: req.salary,
      perks: req.perks
    }
    try {
      console.log(interviewExtended);
      await firestore.update(`positions/${positionID}`, {
        [`candidates.${candidateID}`]: interviewExtended
      })

      await firestore.update(`offer_letters/${candidateID}_${positionID}`, {
        ...interviewExtended
      })

      await firestore.update(`position_candidates/${positionID}_${candidateID}`, {
        status: 'rejected',
      })

      // Toastr message
      toastr.success('Success', 'Successfully rejected offer letter');
    } 
    catch (error) {
      console.log(error);
      toastr.error('Error', 'Something went wrong');
    }
  }