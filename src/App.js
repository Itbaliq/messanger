
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {

  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path={'/profile'}
            element={
              <ProfileContainer />} >
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route exact path="/dialogs"
            element={
              <DialogsContainer />} />
          <Route exact path="/users"
            element={
              <UsersContainer />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
