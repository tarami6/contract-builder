import React from 'react';
import ModalAddLoop from './ModalAddLoop'
import ModalChooseImg from './ModalChooseImg'
import ModalCopyHtml from './ModalCopyHtml'
import ModalFileName from './ModalFileName'
import ModalJsonEditor from './ModalJsonEditor'

const ModalsAll = () => {
    return (
        <div>
            <ModalAddLoop />
            <ModalChooseImg />
            <ModalCopyHtml />
            <ModalFileName />
            <ModalJsonEditor />
        </div>
    );
};

export default ModalsAll;