import { combineReducers } from 'redux';
import { apiVersion }  from './home';
import { getAllForm }  from './form';


export default combineReducers({
    firstStore : apiVersion,
    allForm : getAllForm
});