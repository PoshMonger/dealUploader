import * as api from '../api'
import { FETCH_ALLB, CREATEB, UPDATEB, LIKEB, DELETEB, START_LOADINGB, END_LOADINGB } from '../constants/actionTypes';

export const getBosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADINGB });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchBosts(page);

    dispatch({ type: FETCH_ALLB, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADINGB });
  } catch (error) {
    console.log(error);
  }
};

export const createBost = (bost) => async (dispatch) => {

  try {

    const { data } = await api.createBost(bost)
    dispatch({ type: CREATEB, payload: data })
  } catch (error) {

    console.log(error)
  }



}

export const updateBost = (id, bost) => async (dispatch) => {


  try {
    const { data } = await api.updateBost(id, bost);
    dispatch({ type: UPDATEB, payload: data })
    console.log(data)
  } catch (error) {

    console.log(error)
  }
}

export const likeBost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeBost(id);

    dispatch({ type: LIKEB, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBost = (id) => async (dispatch) => {
  try {
    await api.deleteBost(id);

    dispatch({ type: DELETEB, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};