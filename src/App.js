import React from 'react';
import Login from './Views/Login/Login';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import SideBar from './Views/SideBar/SideBar';
import ViewBugPage from './Views/Pages/viewBugs';

const App = () => {
  const {auth} = useSelector(state => state)
  return (
    <Router>
        {!auth.loggedIn ? <Login /> :
          <>
            <SideBar />
            <ViewBugPage />
          </>
        }
    </Router>
    );
}

export default App;
