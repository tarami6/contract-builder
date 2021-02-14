import React from 'react';

const Variable = ({ element }) => {
    const valueIt = () => {
        switch (element.key) {
            case 'empty':
                return <div style={{ width: '50px', height: '1px', borderBottom: '1px solid black' }} />
            case 'userName':
                return 'Csr Agent'
            case 'fullName':
                return 'Estban Fernandez Gonzles'
            case 'address':
                return 'Estaka Mabini, street - Dondla, zip - 123342,  Philiphine'
            case 'accountBalance':
                return 'PHP 234.556'
            case 'paymentNow':
                return 'PHP 1000'
            case 'product':
                return 'Iphone 12 Black 128 Giga'
            case 'storeName':
                return 'Super Phones'
            case 'agentName':
                return 'Philipe Lopez'
            default:
                return <div />
        }
    }

    return (
        <div style={{ display: "flex", alignItems: "flex-end", }}>
            {element.title} - {valueIt()}
        </div>
    );
};

export default Variable;