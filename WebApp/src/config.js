const CURRENT_YEAR = (new Date()).getFullYear();

const NUMBER_WITH_COMMAS = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
  CURRENT_YEAR,
  NUMBER_WITH_COMMAS
}