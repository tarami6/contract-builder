import React from 'react';
import ModalAddLoop from './ModalAddLoop'
import ModalChooseImg from './ModalChooseImg'
import ModalCopyHtml from './ModalCopyHtml'
import ModalFileName from './ModalFileName'

const ModalsAll = () => {
    return (
        <div>
            <ModalAddLoop />
            <ModalChooseImg />
            <ModalCopyHtml />
            <ModalFileName />
        </div>
    );
};

export default ModalsAll;