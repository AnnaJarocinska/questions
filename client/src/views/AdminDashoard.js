import React from 'react';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
    return (
        <>
            <p>Welcome to admin</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/addingQuestion">Adding question</Link>
                    </li> 
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </>
      );
}
 
export default AdminDashboard;