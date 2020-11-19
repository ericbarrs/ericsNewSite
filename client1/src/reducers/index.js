import { combineReducers } from "redux";
import { projects } from "../info";

const myProjects = (state = projects, action) => {
	return state;
};

let Loading = (state = false, action) => {
	if (action.type === "Loading") {
		return (state = action.payload);
	}
	return state;
};

const message = (state = null, action) => {
	Loading = true;
	if (action.type === "SENDMESSAGE") {
		Loading = false;
		return (state = action.payload);
	} else {
		Loading = false;
		return state;
	}
};

const rootReducer = combineReducers({
	Loading,
	message,
	myProjects,
});

export default rootReducer;
