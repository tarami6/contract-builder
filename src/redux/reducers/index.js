import { combineReducers } from "redux";
import contractDom from "./contractDomReducer";
import modals from "./modalsReducer";
import editable from "./editableReducer";
import varJson from "./varJsonReducer";
import user from "./userReducer";
import files from "./filesReducer";
import notifier from "./notifierReducer";

export default combineReducers({ contractDom, modals, editable, varJson, user, files, notifier });
