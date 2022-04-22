
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

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
              <UsersContainer/>} />
          </Routes>
        </div>

      </div>
  );
}

export default App;
