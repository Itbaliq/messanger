
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route exact path="/profile" 
            element={
              <Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                />} />
          <Route exact path="/dialogs" 
            element={
              <Dialogs 
                store={props.store}
               />} />
          </Routes>
        </div>

      </div>
  );
}

export default App;
