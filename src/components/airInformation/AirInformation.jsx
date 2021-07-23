import React from 'react'
import Item from './item/Item'

//Redux
import {useSelector} from 'react-redux';

const AirInformation = () => {

    //redux
    const airlines = useSelector(state => state.airlines.names.items);
    return ( 
        <>
            <ul style={{padding:'0px'}}>
                {airlines.map( airline =>(
                    <Item 
                        key={airline.id}
                        airline={airline}
                    />
                ))}
            </ul>
        </>
    );
}
 
export default AirInformation;