import { combineReducers } from "redux";
import contractDom from "./contractDomReducer";
import modals from "./modalsReducer";

export default combineReducers({ contractDom, modals });
