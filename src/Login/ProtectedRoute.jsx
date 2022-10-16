import React from 'react'
import Login from './Login';
import Admin from '../admin/Admin';

const ProtectedRoute = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [coordinator, setCoordinator] = React.useState(true);

    return (
        <div>
            
             {(isAdmin===false)?<Login setIsAdmin={setIsAdmin} setCoordinator={setCoordinator}/>:
             
                 ((coordinator===false )?  <Admin setIsAdmin={setIsAdmin}  />:'coordinator')
             
             
             }
        </div>
    )
}

export default ProtectedRoute
