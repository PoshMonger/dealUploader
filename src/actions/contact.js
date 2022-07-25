import * as api from '../api/index.js';

export const createContact = (newContact) => async (dispatch) => {


    try {
        const { data } = await api.createContact(newContact);

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {

        console.log(error)

    }
}