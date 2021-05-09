import React from 'react';
import { makeStyles, Card, Grow } from '@material-ui/core'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import { TextFields, HelpOutline, ChromeReaderMode, AccountTree, Image, Gesture, FormatLineSpacing, Code, Web, Loop } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { addElement, toggleChooseImg } from 'redux/actions'

const useStyle = makeStyles((theme) => ({
    boardContainer: {
        width: '100%',
        borderRadius: theme.container.borderRadius,
        display: "flex",
        padding: "15px",
        marginTop: "1vh",
        alignItems: "flex-start",
        justifyContent: "center",
        height: '30vh'
    },
    listContainer: {
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    elementContainer: {
        width: "33%",
        height: "5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': {
            boxShadow: '1px 1px 2px grey',
            borderRadius: theme.container.borderRadius,
        }
    },
    iconContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}))

const Icon = ({ iconType }) => {
    const classes = useStyle()

    switch (iconType) {
        case ELEMENTTYPE.wys:
            return (
                <div className={classes.iconContainer}>
                    <ChromeReaderMode />
                    <p>Content</p>
                </div>
            )
        case ELEMENTTYPE.text:
            return (
                <div className={classes.iconContainer}>
                    <TextFields />
                    <p>Text</p>
                </div>
            )
        case ELEMENTTYPE.variable:
            return (
                <div className={classes.iconContainer}>
                    <AccountTree />
                    <p>Variable</p>
                </div>
            )
        case ELEMENTTYPE.img:
            return (
                <div className={classes.iconContainer}>
                    <Image />
                    <p>Image</p>
                </div>
            )
        case ELEMENTTYPE.signature:
            return (
                <div className={classes.iconContainer}>
                    <Gesture />
                    <p>Signature</p>
                </div>
            )
        case ELEMENTTYPE.devider:
            return (
                <div className={classes.iconContainer}>
                    <FormatLineSpacing />
                    <p>Devider</p>
                </div>
            )
        case ELEMENTTYPE.code:
            return (
                <div className={classes.iconContainer}>
                    <Code />
                    <p>Code</p>
                </div>
            )
        case ELEMENTTYPE.table:
            return (
                <div className={classes.iconContainer}>
                    <Web />
                    <p>Table</p>
                </div>
            )
        case 'loop':
            return (
                <div className={classes.iconContainer}>
                    <Loop />
                    <p>Loop Row</p>
                </div>
            )

        default:
            return (
                <div className={classes.iconContainer}>
                    <HelpOutline />
                    <p>Issue</p>
                </div>
            )
    }
}

const ElementsBoard = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const elementsList = Object.keys(ELEMENTTYPE).filter(item => { return (item !== 'rows' && item !== 'columns') })
    const { currentId, columnId, rowId, currentType } = useSelector(state => state.editable)
    const isColumn = currentType === ELEMENTTYPE.columns
    const isRow = currentType === ELEMENTTYPE.rows

    const _addElement = (type) => {
        if (type === ELEMENTTYPE.img) {
            dispatch(toggleChooseImg())
        } else {
            dispatch(addElement(type, columnId, rowId))
        }

    }

    if (!isRow && !isColumn) {
        return <></>
    }

    return (
        <Card className={classes.boardContainer} elevation={3}>
            {
                isColumn && (
                    <Grow in={true} timeout={1000}>
                        <div className={classes.listContainer}>
                            {
                                elementsList.map((item, index) => (
                                    <div className={classes.elementContainer} onClick={() => _addElement(item)} key={index}>
                                        <Icon iconType={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </Grow>
                )
            }
            {
                isRow && (
                    <Grow in={true} timeout={1000}>
                        <div className={classes.listContainer}>
                            <div className={classes.elementContainer} >
                                <Icon iconType={'loop'} />
                            </div>
                        </div>
                    </Grow>
                )
            }

        </Card>
    );
};

export default ElementsBoard;