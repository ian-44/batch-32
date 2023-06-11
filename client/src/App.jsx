import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import FC from "./FC"
import { useState } from 'react';
import Users from './Users';
import Flexbox from './Flexbox';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Routing from './Routing';
import MyNavBar from './MyNavBar';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <BrowserRouter>
    <MyNavBar />
      
      <Routes>
        <Route path='' element={<Users />} />
        <Route path='/flex' element={<Flexbox />} />
        <Route path='/routing' element={<Routing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

                  {/* Nested Routing */}
        {/* <Route path='/parent/child-route1' element={<ComponentA />} />
        <Route path='/parent/child-route2' element={<ComponentA />} />
        <Route path='/parent/child-route3' element={<ComponentA />} /> */}
        {/* <Route path='/parent'>
          <Route path='child-route1' element={<ComponentA />} />
          <Route path='child-route2' element={<ComponentA />} />
          <Route path='child-route3' element={<ComponentA />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
