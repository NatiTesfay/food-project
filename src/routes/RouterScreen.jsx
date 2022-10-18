import React from 'react'
import Home from '../components/pages/home/Home.component';
import Login from '../components/pages/login/Login.component';
import Recipes from '../components/pages/recipes.component/Recipes';
import Restaurants from '../components/pages/restaurants/Restaurants.component'
import User from '../components/pages/user/User.component';
import ContectUs from '../components/pages/contactUs/ContactUs.component';
import Chefs from '../components/pages/chefs.component/Chefs';
import {Routes , Route} from "react-router-dom"; 
const RoutersScreen = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Recipes' element={<Recipes/>}/>
        <Route path='Restaurants' element={<Restaurants/>}/>
        <Route path='Recipes' element={<Recipes/>}/>
        <Route path='chefs' element={<Chefs/>}/>
        <Route path='User' element={<User/>}/>
        <Route path='ContectUs' element={<ContectUs/>}/>
      </Routes>
  )
}

export default RoutersScreen;