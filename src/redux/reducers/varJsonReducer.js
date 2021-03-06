import { SAVE_VAR_JSON } from "../actions/actionTypes"

const initialState = {
    empty: 'empty',
    userName: 'Csr Agent',
    fullName: 'Estban Fernandez Gonzles',
    address: 'Estaka Mabini, street - Dondla, zip - 123342,  Philiphine',
    accountBalance: 'PHP 234.556',
    paymentNow: 'PHP 1000',
    product: 'Iphone 12 Black 128 Giga',
    storeName: 'Super Phones',
    agentName: 'Philipe Lopez to',
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
    ],
    sellsInfo: {
        header: [{ title: 'Product' }, { title: 'Date' }, { title: 'Price' }],
        body: [{ product: 'Ipone', date: '12/6/2020', price: 'PHP 2000' }]
    }
}

const saveState = (state, action) => ({ ...action.payload.json })

export default function varJson(state = initialState, action) {
    switch (action.type) {
        case SAVE_VAR_JSON: return saveState(state, action)

        default:
            return state
    }
}

