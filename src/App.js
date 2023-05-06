
import './App.css';

import User from './pages/User';
import { Route, Routes } from 'react-router-dom';
import Employ from './pages/Employ';
import Order from './pages/Order';
import Visits from './pages/Visits';
import Customer from './pages/Customer';
import Setting from './pages/Setting';

import Home from './pages/Home';
import Single from './pages/Single';
import New from './pages/New';
import { userInputs } from './Formsource';
import Error from './pages/Error';
import './style/dark.css';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';

function App() {
 
  const { darkMode } = useContext(DarkModeContext);
  return (
   <>
     <div className={darkMode ? "app dark" : "app"}>
     <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="user" element ={<User/>} />
    <Route path="employ" element ={<Employ/>} />
    <Route path="order" >
      <Route index element ={<Order/>}/>
      <Route path=":userId" element={<Single/>} />
      <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
    </Route>
    <Route path="visit" element ={<Visits/>} />
    <Route path="customer" element ={<Customer/>} />
    <Route path="setting" element ={<Setting/>} />
    <Route path="*" element ={<Error/>} />

   </Routes>
   </BrowserRouter>
   </div>
  
   
   </>
  );
}

export default App;
