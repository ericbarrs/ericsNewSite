import { combineReducers } from "redux";
import { projects } from '../info'

const myProjects = (state = projects, action) => {
  return state
}

const message = (state = null, action) => {
  if (action.type === "SENDMESSAGE") {
    return (state = action.payload);
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  message, myProjects
});

export default rootReducer;
