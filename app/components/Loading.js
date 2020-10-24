import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        paddingTop:'20%',
        paddingLeft: '45%'
    }
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" size={200}/>
        </div>
    );
}