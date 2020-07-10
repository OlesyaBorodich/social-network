import {combineReducers,createStore} from "redux"
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from './users-reducer';
let redusers= combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarReducer: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store=createStore(redusers);
window.store=store;
export default store;