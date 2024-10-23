import {Outlet} from 'react-router';
import React from 'react'

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Layuot.css'

function Layuot({products, carts , setToken,role}) {
    return ( 
        <div>
            <Header />
            <Navbar products={products} carts={carts} setToken={setToken} role={role}/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Layuot;