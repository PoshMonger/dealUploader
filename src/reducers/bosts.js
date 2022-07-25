import { FETCH_ALLB, FETCH_BY_SEARCHB, FETCH_POSTB, CREATEB, UPDATEB, DELETEB, LIKEB } from '../constants/actionTypes';

export default (state = { isLoading: true, bosts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADINGB':
      return { ...state, isLoading: true };
    case 'END_LOADINGB':
      return { ...state, isLoading: false };
    case FETCH_ALLB:
      return {
        ...state,
        bosts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCHB:
      return { ...state, bosts: action.payload.data };
    case FETCH_POSTB:
      return { ...state, bost: action.payload.bost };
    case LIKEB:
      return { ...state, bosts: state.bosts.map((bost) => (bost._id === action.payload._id ? action.payload : bost)) };
    case CREATEB:
      return { ...state, bosts: [...state.bosts, action.payload] };
    case UPDATEB:
      return { ...state, bosts: state.bosts.map((bost) => (bost._id === action.payload._id ? action.payload : bost)) };
    case DELETEB:
      return { ...state, bosts: state.bosts.filter((bost) => bost._id !== action.payload) };
    default:
      return state;
  }
};

