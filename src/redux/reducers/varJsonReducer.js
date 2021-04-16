
const productInitial = {
    label: 'Iphone 12 Black 128 Giga',
    price: 'PHP 1000',
}
const initialState = {
    empty: 'empty',
    userName: 'Csr Agent',
    fullName: 'Estban Fernandez Gonzles',
    address: 'Estaka Mabini, street - Dondla, zip - 123342,  Philiphine',
    accountBalance: 'PHP 234.556',
    paymentNow: 'PHP 1000',
    product: 'Iphone 12 Black 128 Giga',
    storeName: 'Super Phones',
    agentName: 'Philipe Lopez',
    phone: '0542291101',
    products: [
        {
            label: 'Iphone 12 Black 128 Giga',
            price: 'PHP 1000',
        },
        {
            label: 'Iphone 12 Gold 256 Giga',
            price: 'PHP 1800',
        }
    ]
}


export default function varJson(state = initialState, action) {
    return state
    // switch (action.type) {
    //     case value:

    //         break;

    //     default:
    //         return state
    // }
}

