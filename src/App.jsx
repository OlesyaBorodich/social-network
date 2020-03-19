import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profle";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <div> <Navbar/>
                    <Route path='/friends' render={()=><Friends state={props.state.friendsData}/>}/></div>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs  state={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={()=><Profile  state={ props.state.profilePage.postsData}/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>

                </div>
            </div>
        </BrowserRouter>)

}


export default App;
