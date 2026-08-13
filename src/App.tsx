import { useState } from 'react'
import './App.css'
import Header  from './components/Header';
import Footer  from './components/Footer';
import Home from './components/Home';
import type {Cartitems} from "./types/product";
import { Outlet } from 'react-router';
type appprops={
cart:Cartitems[];
}
function App({cart}:appprops) {
  return (
    <div className='flex flex-col min-h-screen'>
    <Header cart={cart}/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
