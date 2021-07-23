import {
    SET_AIRSELECTED
} from '../types/airlineTypes';

//state
const initialState = {
    names:{items:[{id:1,name:'Vivair'},{id:2,name:'Avianca'},{id:3,name:'Latam'},{id:4,name:'America AirLines'}]},
    airSelected:''
}


export default function airlinesReducer(state = initialState, action) {
    switch (action.type) {

        case SET_AIRSELECTED:
            return{
                ...state,
                airSelected:action.payload
            }

        default:
            return state;
    }
}