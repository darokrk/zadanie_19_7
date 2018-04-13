import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';


const app = combineReducers({
    comments,
    users
});