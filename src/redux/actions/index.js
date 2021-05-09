//auth
import {
    logIn,
    logOut,
    register
} from './actionAuth'
//file
import {
    addRow,
    removeRow,
    removeColumn,
    addElement,
    editElementText,
    editElementCode,
    editElementVariable,
    removeElement,
    renameFile,
    resetFile,
    setDom
} from './actionsContractDom'
//editable
import {
    setCurrentEditable,
    editStyleRow,
    editStyleColumn,
    editStyleElement,
    setTempStyle,
    setLoop
} from './actionsEditable'
//modals
import {
    toggleAddRow,
    toggleChooseImg,
    toggleCopyHtml,
    toggleAddLoop,
    toggleFileName,
    toggleVarJson
} from './actionsModals'
//files 
import {
    getAllFiles,
    selectFile,
    deleteFile,
    saveFile,
    updateFile
} from './actionsFiles'
//notifiers
import {
    toggleFileAddedNotifier
} from './actionsNotifiers'
//varJson

import {saveJson} from './actionsVarJson'


export {
    logIn,
    logOut,
    register,
    addRow,
    removeRow,
    removeColumn,
    addElement,
    editElementText,
    editElementCode,
    editElementVariable,
    removeElement,
    saveFile,
    renameFile,
    setCurrentEditable,
    editStyleRow,
    editStyleColumn,
    editStyleElement,
    setTempStyle,
    setLoop,
    toggleAddRow,
    toggleChooseImg,
    toggleCopyHtml,
    toggleAddLoop,
    toggleFileName,
    resetFile,
    getAllFiles,
    selectFile,
    deleteFile,
    toggleFileAddedNotifier,
    setDom,
    updateFile,
    saveJson,
    toggleVarJson
}