import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'

import header from './images/header.jpg'
import Navbar from './components/Navbar';
import Men from './components/Men';
import Home from './components/Home';
import Kids from './components/Kids';
import Women from './components/Women';
import NewOutfits from './components/NewOutfits';

export default function App() {
 return (
    <div>
            
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/new' element={<NewOutfits />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={< Kids />} />
        </Routes>
    </div>
  )
}
