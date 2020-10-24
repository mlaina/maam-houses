import React from "react";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    back: {
        top: theme.spacing(2),
        right: 'auto',
        bottom: 'auto',
        left: theme.spacing(2),
        position: 'fixed',
        zIndex: 5
    },
}));

const AddUser = () => {
    const classes = useStyles();
    return (
        <Fab color="default" aria-label="Atrás" size={'large'} className={classes.back} component={Link} to="/">
            <ArrowBackIcon/>
        </Fab>
    );
};

export default AddUser;