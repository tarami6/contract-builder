import React from 'react';
import { useSelector } from 'react-redux'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import { makeStyles } from '@material-ui/core/styles';
import {
    StyleRow,
    StyleColumn,
    StyleText,
    StyleVariable,
    StyleWys,
    StyleImg,
    StyleSignature,
    StyleDevider,
    StyleCode
} from './style'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        height: '100%',
        position: 'fixed',
        marginLeft: '80%',
        backgroundColor: '#333C4D'
    },
    input: {
        width: '50px'
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    icon: {
        color: "#b9b9b9",
        margin: "015px",
        fontSize: "14px",
        fontWeight: "600",
    }
}))

const RightSideBar = () => {
    const classes = useStyles();
    const { currentType } = useSelector(state => state.editable)

    const StyleByType = () => {
        switch (currentType) {
            case ELEMENTTYPE.rows:
                return <StyleRow />
            case ELEMENTTYPE.columns:
                return <StyleColumn />
            case ELEMENTTYPE.text:
                return <StyleText />
            case ELEMENTTYPE.wys:
                return <StyleWys />
            case ELEMENTTYPE.variable:
                return <StyleVariable />
            case ELEMENTTYPE.img:
                return <StyleImg />
            case ELEMENTTYPE.signature:
                return <StyleSignature />
            case ELEMENTTYPE.devider:
                return <StyleDevider />
            case ELEMENTTYPE.code:
                return <StyleCode />
            default: {
                console.warn('No style type')
                return <></>
            }

        }
    }

    return (
        <div className={classes.root} >
            <StyleByType />
        </div>
    );
};

export default RightSideBar;
