import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import StyleRC from './helpersComponent/StyleRC'
import TitleBox from './helpersComponent/TitleBox'
import StyleElemenets from './helpersComponent/StyleElemenets'
import StyleVariable from './helpersComponent/StyleVariable'
import { getTextByELement } from 'utils'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    styleContainer: {
        padding: '0 20px'
    },
    noneStyleContainer: {
        marginTop: '20px'
    },
    noneStyleText: {
        color: theme.color.lightGrey
    }
}))


const StyleByType = () => {
    const classes = useStyles();
    const { currentType } = useSelector(state => state.editable)

    const StyleByType = () => {
        switch (currentType) {
            case ELEMENTTYPE.rows:
            case ELEMENTTYPE.columns:
                return <StyleRC />
            case ELEMENTTYPE.text:
                return <StyleElemenets />
            case ELEMENTTYPE.wys:
                return <StyleElemenets />
            case ELEMENTTYPE.variable:
                return <StyleVariable />
            case ELEMENTTYPE.img:
                return <StyleElemenets />
            case ELEMENTTYPE.signature:
                return <StyleElemenets />
            case ELEMENTTYPE.devider:
                return <StyleElemenets />
            case ELEMENTTYPE.code:
                return (
                    <div className={classes.noneStyleContainer}>
                        <p className={classes.noneStyleText}>All Styles related to code should be done in the editor</p>
                    </div>
                )
            case ELEMENTTYPE.table:
                return (
                    <div className={classes.noneStyleContainer}>
                        <p className={classes.noneStyleText}>Table Stayle ability is under development</p>
                    </div>
                )
            default: {
                console.warn('No style type')
                return <></>
            }
        }
    }

    return (
        <div className={classes.root}>
            <TitleBox title={`${getTextByELement(currentType)} Style`} />
            <div className={classes.styleContainer}>
                <StyleByType />
            </div>

        </div>
    );
};

export default StyleByType;