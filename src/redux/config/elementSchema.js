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
    devider: 'devider',
    code: 'code',
    table: 'table'
}

export const columnConstructor = rowId => (
    {
        id: uid(),
        rowId,
        type: 'columns',
        style: {
            minHeight: "50px",
            width: "100%",
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
    loop: undefined,
    style: {
        minHeight: "55px",
        width: "100%",
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px',
        marginRight: '2px',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: '2px',
        paddingRight: '2px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderStyle: "solid",
        borderWidth: "0px"
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
        padding: '0',
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
        backgroundColor: '#000000',
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px',
        marginRight: '2px',
    },
})

export const codeContstractor = (id, columnId, rowId) => ({
    id,
    rowId,
    columnId,
    type: 'code',
    html: '<p>Html</p>'
})

export const tableContstractor = (id, columnId, rowId) => {
    let bodyRowArr = []
    let headerColArr = []
    let cellsContent = {}
    let headerContent = ['title','title','title']
    let bodyContent = []

    for (let i = 0; i < 3; i++) {
        headerColArr.push(i)
    }


    for (let i = 0; i < 3; i++) {
        bodyRowArr.push(i)
    }


    for (let i = 0; i < 3; i++) {
        bodyRowArr.push(i)
    }

    for (let i = 0; i < 3; i++) {
        cellsContent[i] = i
    }

    for (let i = 0; i < 3; i++) {
        bodyContent.push({...cellsContent})
    }

    return {
        id,
        rowId,
        columnId,
        type: 'table',
        loop: 'sellsInfo',
        table: {
            headerCol: 3,
            bodyRow: 3,
            bodyColumn: 3,
            headerContent,
            headerColspan: 0,
            bodyContent,
        },
        style: {}
    }
}