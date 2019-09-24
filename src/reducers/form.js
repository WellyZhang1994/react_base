import { FETCH_FORMDATA } from '../actions/type';
import _ from 'lodash';

const data = [{id:1,name:'form1',url:"https://forms.gle/4VieWmsobaLvyLeE6"},{id:2,name:'form2',url:"https://forms.gle/4VieWmsobaLvyLeE6"}]

export const getAllForm = (forms = data, action) => {
    switch(action.type){
        case FETCH_FORMDATA:
            return  forms;
        default:
            return forms;
    }
}