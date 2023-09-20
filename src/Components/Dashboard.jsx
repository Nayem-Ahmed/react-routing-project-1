import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex gap-20'>
           <div className='shadow-lg p-5 mt-3'>
            <Link to='/dashboard'>Dashboard :-</Link><br></br>
            <Link to='/dashboard/profile'>Profile :-</Link><br></br>
            <Link to='/dashboard/editprofile'>Edit profile :-</Link>
           </div>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;
