import React from 'react'
import { Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoute = ({...props}) => {   
     
    const Component = props.component;

    //redux
    const airlines = useSelector(state => state.airlines.airSelected);

    if(airlines === ''){
        return <Redirect to={{ pathname: '/' }} />
    }else{
        return  <Component />
    }
    
}

export default ProtectedRoute;