import { useState } from 'react'
import './App.css'
import Header  from './components/Header';
import Footer  from './components/Footer';
import Home from './components/Home';
import { Outlet } from 'react-router';
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
