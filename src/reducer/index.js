import {combineReducers} from "redux";
import {Calculator} from "./counter.reducer";


const reducers = combineReducers({
    counter: Calculator
});

export default reducers;