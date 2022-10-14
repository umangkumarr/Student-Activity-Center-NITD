import React from 'react'
import Login from './Login';
import Admin from '../admin/Admin';

const ProtectedRoute = () => {
    const [isAdmin, setIsAdmin] = React.useState(true);
    return (
        <div>
             {(isAdmin===false)?<Login setIsAdmin={setIsAdmin} />:<Admin setIsAdmin={setIsAdmin}  />}
        </div>
    )
}

export default ProtectedRoute
