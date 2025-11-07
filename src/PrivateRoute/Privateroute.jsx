import React, { useContext } from 'react';
import Authcontext from '../Authcontext/Authcontext';
import { Link, Navigate } from 'react-router';

const Privateroute = ({children}) => {

    const {user , setLoading, loading} = useContext(Authcontext);
    if(!user){
      
        return    setLoading(<p>loading...</p>)

    }

    if(!user){
        return <Navigate to='/login'> </Navigate>
        
    }
    return (
       
        <div>
            {children}
        </div>
    );
    
};

export default Privateroute;