import { 
    FETCH_FORMDATA 
}  from './type';


export const getAllForms = () => async dispatch =>{
    dispatch({
        type: FETCH_FORMDATA,
        payload: ''
    });
}