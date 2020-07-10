import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfleContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                 <Navbar/>
                    <Route path='/friends' render={()=><Friends />}/></div>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><DialogsContainer  />}/>
                    <Route path='/profile/:userId?' render={()=><ProfileContainer />}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><Login/>}/>

                </div>
        </BrowserRouter>)

}


export default App;
