import { useState } from 'react'
import './App.css'
import Products from './components/Products';
import Header  from './components/Header';
import Footer  from './components/Footer';
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Header/>
    <div className='flex-1'>
    <Products/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
