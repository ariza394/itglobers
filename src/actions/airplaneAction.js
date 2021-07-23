import {
    SET_AIRSELECTED
} from '../types/airlineTypes';


//function for set the airplane
export function setAirlineAction(airplane){ 
    return async(dispatch) => {
        try{
            dispatch(setAirline(airplane));
        }
        catch{
            console.log('error');
        }
    }
}

//successfully changed airline
const setAirline = airplane => ({
    type:SET_AIRSELECTED,
    payload:airplane
});