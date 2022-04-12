
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import {Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Users from './Components/Users/Users';

const App = (props) => {
  return (

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route exact path="/profile" 
            element={
              <Profile/>} />
          <Route exact path="/dialogs" 
            element={
              <DialogsContainer />} />
           <Route exact path="/users" 
            element={
              <Users/>} />
          </Routes>
        </div>

      </div>
  );
}

export default App;
