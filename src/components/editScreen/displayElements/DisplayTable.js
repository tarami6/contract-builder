import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// const Col = ({ item }) => {
//     const [editMode, setEditMode] = useState(false)
//     const [value, setValue] = useState()

//     _onChange = (e) => {
//         e.revenatDefault()
//         setValue(e.target.value)

//     }

//     return (
//         <th>
//             <div onClick={() => setEditMode(!editMode)}>
//                 {editMode ? 'editMode' :item}
//             </div>
//         </th>
//     )
// }
const Header = ({table, headerData}) => {
    const [data, setData] = useState(table?.headerContent)

    useEffect(() => {
        if(headerData?.length){
            setData([...headerData])
        }
    }, [headerData])
    
    return (
        < TableHead >
            <TableRow>
                {
                    data.map((head, index) => {
                        return (
                            <TableCell key={index}>{head.title}</TableCell>
                        )
                    })
                }
            </TableRow>
        </TableHead >
    )

}

const Body = ({table, bodyData}) => {
    const [data, setData] = useState(table?.headerContent)

    useEffect(() => {
        if(bodyData?.length){
            setData([...bodyData])
        }
    }, [bodyData])
    console.log('bodyData', data)
    
    return (
        <TableBody>
            {data.map((row, index) => {
                let toArrData = Object.keys(row) 
                console.log('toArrData', toArrData)
    
                return <TableRow key={index}>
                    {
                        toArrData.map((cell, index) =>{
                            return (
                                <TableCell key={index}>
                                    {row[cell]}
                                </TableCell>
                            )
                        } )
                    }
                </TableRow>
            })}
        </TableBody>
    )
}

const DisplayTable = ({ elementId }) => {
    const classes = useStyles();
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const _table = _element?.table
    const data = useSelector(state => state.varJson[_element.loop])
    console.log('data', data)

    

   

    return (
        <div style={{ width: "100%" }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <Header table={_table} headerData={data.header} />
                    <Body table={_table} bodyData={data.body} />
                </Table>
            </TableContainer>

        </div>
    );
};

export default DisplayTable;