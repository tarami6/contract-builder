import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { uid } from 'uid'
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


const Header = ({ table, headerData }) => {
    const [data, setData] = useState(table?.headerContent)

    useEffect(() => {
        if (headerData?.length) {
            setData([...headerData])
        }
    }, [headerData])

    return (
        < TableHead >
            <TableRow>
                {
                    data.map((head, index) => {
                        return (
                            <TableCell key={uid()} >{head.title}</TableCell>
                        )
                    })
                }
            </TableRow>
        </TableHead >
    )

}

const Body = ({ table, bodyData }) => {
    const [data, setData] = useState(table?.headerContent)

    useEffect(() => {
        if (bodyData?.length) {
            setData([...bodyData])
        }
    }, [bodyData])

    return (
        <TableBody>
            {data.map((row, index) => {
                let toArrData = Object.keys(row)
                return <TableRow key={uid()} >
                    {
                        toArrData.map((cell, index) => {
                            return (
                                <TableCell key={uid()} >
                                    {row[cell]}
                                </TableCell>
                            )
                        })
                    }
                </TableRow>
            })}
        </TableBody>
    )
}


const PrintTable = ({ element }) => {
    const classes = useStyles();
    const _table = element?.table
    const data = useSelector(state => state.varJson[element.loop])
    return (
        <div style={{ width: "100%" }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <Header table={_table} headerData={data?.header} />
                    <Body table={_table} bodyData={data?.body} />
                </Table>
            </TableContainer>

        </div>
    );
};

export default PrintTable;