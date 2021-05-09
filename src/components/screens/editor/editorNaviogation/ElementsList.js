import React from 'react';
import { makeStyles } from '@material-ui/core'
import ListItem from './ListItem'

const useStyle = makeStyles((theme) => ({
    navigationScroller: {
        overflow: "scroll",
        height: "17vh",
        padding: "0 3vw",
        marginTop: '5px'
    },
}))

const ElementsList = ({ list }) => {
    const classes = useStyle()
    console.log('list', list)
    return (
        <div className={classes.navigationScroller}>
            {
                list?.map((itemId, index) => {
                    return <ListItem key={index} itemId={itemId} indexOfrow={index} />
                })
            }
        </div>
    );
};

export default ElementsList;