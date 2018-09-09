import { createStore, combineReducers } from 'redux';
import gameReducer from './pages/models/game';
import userReducer from './pages/models/user';



const reducer = combineReducers({
     gameReducer,
     userReducer
})
export const store = createStore(
   reducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools);
)
