import { createReducer } from '../../../shared/common/util/reducerUtil';
import { CREATE_POSITION, UPDATE_POSITION, DELETE_POSITION, FETCH_POSITIONS } from './positionConstants';

const initialState = [];

export const createPosition = (state, payload) => {
  return [...state, Object.assign({}, payload.position)]
}

export const updatePosition = (state, payload) => {
  return [...state.filter(position => position.id !== payload.position.id), Object.assign({}, payload.position)]
}

export const deletePosition = (state, payload) => {
  return [...state.filter(position => position.id !== payload.positionid)]
}

export const fetchPositions = (state, payload) => {
  return payload.positions
}

export default createReducer(initialState, {
  [CREATE_POSITION]: createPosition,
  [UPDATE_POSITION]: updatePosition,
  [DELETE_POSITION]: deletePosition,
  [FETCH_POSITIONS]: fetchPositions
})