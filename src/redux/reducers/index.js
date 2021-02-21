import { combineReducers } from "redux";
import contractDom from "./contractDomReducer";
import modals from "./modalsReducer";
import editable from "./editableReducer";

export default combineReducers({ contractDom, modals, editable });
