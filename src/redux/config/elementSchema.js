import { uid } from 'uid'

export const VARIABLETYPES = {
    empty: 'empty',
    userName: 'userName',
    fullName: 'fullName',
    phone: 'phone',
    address: 'address',
    accountBalance: 'accountBalance',
    paymentNow: 'paymentNow',
    product: 'product',
    storeName: 'storeName',
    agentName: 'agentName'
}

export const ELEMENTTYPE = {
    row: 'row',
    text: 'text',
    variable: 'variable',
    img: 'img',
    signature: 'signature',
    row: 'row',
    column: 'column'
}

export const columnConstructor = rowId => (
    {
        id: uid(),
        rowId,
        type: 'column',
        style: {
            minHeight: "50px",
            width: "100%",
            height: "100%",
        },
        elements: []
    }
)

export const rowContsructor = (id, numOfColumns, columnsIds) => ({
    id,
    type: 'row',
    style: {
        width: "100%",
        minHeight: "50px",
        display: "flex",
        alignItems: "flexStart",
        justifyContent: "space-around"
    },
    numOfColumns,
    columns: [...columnsIds]
})

export const textContstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'text',
    style: {
        fontSize: '150%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "0",
        margin: '0',
        width: 'fit-content'
    },
    content: 'Double click for edit'
})

export const imgConstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'img',
    style: {},
})

export const signatureConstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'signature',
    style: {
        width: '160px',
        height: '80px',
        border: '1px solid'
    },
})

export const variableConstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'variable',
    style: {
        title: {
            fontSize: '150%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "0",
            margin: '0',
        },
        key: {
            fontSize: '150%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "0",
            margin: '0',
            marginLeft: "30px",
            fontWeight: "bolder"
        }
    },
    title: 'Title',
    key: 'empty'
})