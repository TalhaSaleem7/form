import { useState } from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Signup from './signup';
import Home from './home';
import Loginf from './login';
import ItemList from './item';



function App() {
  

  return (
            <BrowserRouter>
                <Routes>
                        <Route path='/signup' element={<Signup/>}></Route>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/login' element={<Loginf/>}></Route>
                        <Route path='/item' element={<ItemList/>}></Route>

                </Routes>
            
            </BrowserRouter>
  )
}

export default App
