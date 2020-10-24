---
    to: ../app/pages/<%= name %>/modules/Add<%= mayusname %>.js
---
import React from "react";
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    add: {
        marginRight: theme.spacing(15),
            marginBottom: theme.spacing(5),
            top: 'auto',
            right: '20px',
            bottom: '20px',
            left: 'auto',
            position: 'fixed'
    },
}));

const AddUser = () => {
    const classes = useStyles();
    return (
        <Fab color="secondary" aria-label="add" size={'large'} className={classes.add} component={Link} to="/user" >
            <AddIcon/>
            </Fab>
    );
};

export default AddUser;