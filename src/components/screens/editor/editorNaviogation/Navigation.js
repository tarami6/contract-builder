import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, Card, Grow } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import ElementsList from './ElementsList'
import { setCurrentEditable } from 'redux/actions'

const useStyle = makeStyles((theme) => ({
    breadCrumbContainer: {
        display: 'flex',
        backgroundColor: theme.color.lightGrey,
        borderBottomRightRadius: theme.container.borderRadius,
        borderBottomLeftRadius: theme.container.borderRadius,
        marginTop: '5px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationContainer: {
        width: '100%',
        borderRadius: theme.container.borderRadius,
        padding: "5px",
        height: '24vh'
    },
    navigationScroller: {
        overflow: "scroll",
        height: "15vh",
    },
    titleContainer: {
        ...theme.titleContainer
    },
    nodeContainer: {
        cursor: 'pointer',
        marginLeft: 5,
    }
}))

const Navigation = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const _dom = useSelector(state => state.contractDom)
    const { rowId, columnId, elementId, currentType } = useSelector(state => state.editable)
    const _body = _dom?.body
    const _rows = _dom?.rows
    const _columns = _dom?.columns
    const _currentRowElement = _rows[rowId]
    const _currentColElement = _columns[columnId]

    const [choosed, setChoosed] = useState()
    const [list, setList] = useState()


    const currentNode = useCallback(() => {
        switch (currentType) {
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                return 'element'
            case ELEMENTTYPE.columns:
                return 'column'
            case ELEMENTTYPE.rows:
                return 'row'
            default:
                return ''
        }
    }, [currentType])

    useEffect(() => {
        setChoosed(currentNode())
    }, [currentType, currentNode])

    const arrangeList = useCallback(() => {
        switch (currentType) {
            case ELEMENTTYPE.rows:
                setList(_rows[rowId].columns)
                break;
            case ELEMENTTYPE.columns:
                setList(_columns[columnId].elements)
                break;
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                setList([])
                break;
            default:
                setList(_body.rows)
                break;
        }
    }, [currentType, _body?.rows, columnId, _columns, rowId, _rows])

    useEffect(() => {
        arrangeList()
    }, [_dom, arrangeList ])

  


    const BreadCrumbs = () => {
        const rowIndex = () => _body?.rows.findIndex((id) => id === rowId)
        const colIndex = () => _rows[rowId]?.columns.findIndex((id) => id === columnId)
        const elementIndex = () => _columns[columnId]?.elements.findIndex((id) => id === elementId)

        const _resetEditble = () => {
            const reset = {
                rowId: undefined,
                columnId: undefined,
                elementId: undefined,
                currentId: undefined,
                currentType: undefined
            }
            dispatch(setCurrentEditable(reset))
        }

        const setEdit = (element) => {
            dispatch(setCurrentEditable(element))
        }

        return (
            <div className={classes.breadCrumbContainer}>
                <div className={classes.nodeContainer} onClick={_resetEditble}>
                    <p style={{ fontWeight: !currentType ? 'bold' : 'none' }}>Doc</p>
                </div>
                {(choosed === 'element' || choosed === 'column' || choosed === 'row') && (
                    <div className={classes.nodeContainer} onClick={() => setEdit(_currentRowElement)} >
                        <p style={{ fontWeight: choosed === 'row' ? 'bold' : 'none' }}>{`> Row ${rowIndex() + 1} `}</p>
                    </div>
                )
                }
                {(choosed === 'element' || choosed === 'column') && (
                    <div className={classes.nodeContainer} onClick={() => setEdit(_currentColElement)} >
                        <p style={{ fontWeight: choosed === 'column' ? 'bold' : 'none' }}>{`> Col ${colIndex() + 1} `}</p>
                    </div>
                )}
                {(choosed === 'element') && (
                    <div className={classes.nodeContainer}  >
                        <p style={{ fontWeight: 'bold' }}>{`> Element ${elementIndex() + 1} `}</p>

                    </div>
                )}
            </div>
        )
    }

    if (!_body.rows.length) {
        return <></>
    }

    return (
        <Grow in={true} delay={1000} >
            <Card className={classes.navigationContainer} elevation={3}>
                <div className={classes.titleContainer}>
                    Elements
                </div>
                <BreadCrumbs />
                <ElementsList list={list} />
            </Card>
        </Grow>
    );
};

export default Navigation;