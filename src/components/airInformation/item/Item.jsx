import React from 'react'
import './item.css'
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux'
import { setAirlineAction } from '../../../actions/airplaneAction'

const Item = ({airline}) => {

    //redux
    const history = useHistory();
    const dispatch = useDispatch();

    const setAirline = () => {
        try{
            dispatch(setAirlineAction(airline));
            history.push('/form')
        }
        catch{
            console.log('error');
        }
    }

    return ( 
        <>
            <li onClick={setAirline} className='list-group-item air-item'><h4>{airline.name}</h4></li>
        </>
     );
}
 
export default Item;