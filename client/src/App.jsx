import React from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home' ;
import Login from './pages/Login';
import Signup from './pages/Signup';
import Myfavourites from './pages/Myfavourites';
import Myorders from './pages/Myorders';
import Termsofuse from './pages/Termsofuse';
import Privacypolicy from './pages/Privacypolicy';
import BottomNavbar from './components/BottomNavbar';
import MyProfile from './pages/MyProfile';
import Resturants from './pages/Resturants';
import AllDishes from './components/AllDishes';
import PlaceYourOrder from './pages/PlaceYourOrder';
import Address from './pages/Address';
import CurrentOrder from './pages/CurrentOrder';
import OrderHistory from './pages/OrderHistory';
import EditProfile from './pages/EditProfile';

const App = () => {
  return (
    
   <div className='pb-10 md:pb-0'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/myfavourites' element={<Myfavourites/>} />
    <Route path='/myorders' element={<Myorders/>} />
    <Route path='/termsofuse' element={<Termsofuse/>} />
    <Route path='/privacypolicy' element={<Privacypolicy/>} />
    <Route path='/myprofile' element={<MyProfile/>} />
    <Route path='/resturants' element={<Resturants/>} />
    <Route path='/alldishes' element={<AllDishes/>} />
    <Route path='/placeyourorder' element={<PlaceYourOrder/>} />
    <Route path='/address' element={<Address/>} />
    <Route path='/currentorder' element={<CurrentOrder/>} />
    <Route path='/orderhistory' element={<OrderHistory/>} />
    <Route path='/editprofile' element={<EditProfile/>} />
   </Routes>
   <BottomNavbar/>
   </div>

  )
}

export default App