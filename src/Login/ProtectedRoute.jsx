import React from 'react'
import Login from './Login';
import Admin from '../admin/Admin';

const ProtectedRoute = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    return (
        <div>
             {(isAdmin===false)?<Login setIsAdmin={setIsAdmin} />:<Admin />}
        </div>
    )
}

export default ProtectedRoute
