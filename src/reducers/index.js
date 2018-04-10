import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    Users: UsersReducer
});

export default rootReducer;