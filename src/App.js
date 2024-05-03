import './App.css';
import React from 'react';
//import Home from './components/Home';
//import RoomAcComponents from './components/RoomAcComponents';
//import RoomComponent from './components/RoomComponent';
//import RoomNonAcComponents from './components/RoomNonAcComponents';
//import AppNavbar from './components/shared/AppNavbar';
import HotelRoom from './components/HotelRoom';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UpdateHotelRoom from './components/UpdateHotelRoom';
import Login from './components/login/Login';
import useToken from './useToken';

const App = () => {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/rooms/:id" element={<UpdateHotelRoom />}></Route>
      <Route path='/rooms' exact={true} element={<HotelRoom/>}></Route>
      <Route path='/login' exact={true} element={<Login/>}></Route>
      </Routes>
    </Router>    
  )
}



export default App;
