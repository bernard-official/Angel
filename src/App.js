import { Link, createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, } from 'react-router-dom';
import './App.css';

import { Avatar, Box } from '@mui/material';

import Home from './components/Home';
import Navbar from './components';
import Footer from './components/Footer';
import NewOutfits from './components/NewOutfits';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
         <Route index element={<Home />} />
         <Route  element={<NewOutfits />} />
         <Route  element={<Men />} />
         <Route  element={<Women />} />
         <Route  element={<Kids />} />
      </Route>
    )
  )


  return (
      <div className='app'>
        <RouterProvider router={ router } />  
      </div>
  );
}

const Root = () => {
  <>
   <div>
    <Link to='/'>Home</Link>
    <Link to='/newoutfits'>NewOutfits</Link>
    <Link to='/men'>Men</Link>
    <Link to='/women'>Women</Link>
    <Link to='/kids'>Kids</Link>

   </div>

   <div>
    <Outlet />
   </div>
  </>
}

export default App;
