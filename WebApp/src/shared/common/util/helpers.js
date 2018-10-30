export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], {id: e[0]}));
  }
}

export const createNewPosition = (user, position) => {
  return {
    ...position,
    userId: user.uid,
  }
}