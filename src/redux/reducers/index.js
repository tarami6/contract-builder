import { combineReducers } from "redux";
import contractDom from "./contractDomReducer";
import modals from "./modalsReducer";
import editable from "./editableReducer";
import varJson from "./varJsonReducer";
import user from "./userReducer";

export default combineReducers({ contractDom, modals, editable, varJson, user });
