import React from 'react';
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import './MainLaout.css';
import Footer from './Footer';
import Home from './Home';
const MainLayout = () => {
    const navigation = useNavigation;
    return (
        <div>
           <nav className='flex items-center justify-between shadow-lg max-w-screen-xl mx-auto p-3'>
           <h2 className='md:text-3xl font-bold'>Amajhon!</h2>
           <ul >
            <NavLink className={'nav'} to="/home">Home</NavLink>
            <NavLink className={'nav'} to="/products">Products</NavLink>
            <NavLink className={'nav'} to="/dashboard">Dashboard</NavLink>
           </ul>
           </nav>
  

           <div className='min-h-screen'>
            
                <Outlet></Outlet>
            
           
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;