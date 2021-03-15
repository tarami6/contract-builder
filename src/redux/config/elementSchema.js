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
    rows: 'rows',
    text: 'text',
    wys: 'wys',
    variable: 'variable',
    img: 'img',
    signature: 'signature',
    columns: 'columns',
    devider: 'devider'
}

export const columnConstructor = rowId => (
    {
        id: uid(),
        rowId,
        type: 'columns',
        style: {
            minHeight: "50px",
            width: "100%",
            height: "100%",
            marginTop: '2px',
            marginBottom: '2px',
            marginLeft: '2px',
            marginRight: '2px',
            paddingTop: '2px',
            paddingBottom: '2px',
            paddingLeft: '2px',
            paddingRight: '2px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            borderStyle: "solid",
            borderWidth: "0px"
        },
        elements: []
    }
)

export const rowContsructor = (id, numOfColumns, columnsIds) => ({
    id,
    type: 'rows',
    style: {
        width: "100%",
        minHeight: "50px",
        display: "flex",
        alignItems: "flexStart",
        justifyContent: "space-around",
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px',
        marginRight: '2px',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: '2px',
        paddingRight: '2px',
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
        width: 'fit-content',
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px',
        marginRight: '2px',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: '2px',
        paddingRight: '2px',
    },
    content: 'Double click for edit'
})

export const imgConstractor = (id, columnId, rowId, imgSrc) => ({
    id,
    rowId,
    columnId,
    type: 'img',
    src: imgSrc,
    style: {
        width: '100px',
        height: '60px'
    },
})

export const signatureConstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'signature',
    style: {
        width: '160px',
        height: '80px',
        border: '2px solid'
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
            marginTop: '2px',
            marginBottom: '2px',
            marginLeft: '2px',
            marginRight: '2px',
            paddingTop: '2px',
            paddingBottom: '2px',
            paddingLeft: '2px',
            paddingRight: '2px',
        },
        key: {
            fontSize: '150%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: "30px",
            fontWeight: "bolder",
            marginTop: '2px',
            marginBottom: '2px',
            marginRight: '2px',
            paddingTop: '2px',
            paddingBottom: '2px',
            paddingLeft: '2px',
            paddingRight: '2px',

        }
    },
    title: 'Title',
    key: 'empty'
})

export const wysContstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'wys',
    style: {
    },
    content: 'Editor'
})

export const deviderContstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'devider',
    style: {
        width: '100%',
        height: '3px',
        backgroundColor: '#000',
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px',
        marginRight: '2px',
    },
})
