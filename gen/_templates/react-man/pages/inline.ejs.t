---
    to: ../app/pages/<%= name %>/modules/<%= mayusname %>Inline.js
---
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import LastPageRoundedIcon from '@material-ui/icons/LastPageRounded';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
    },
    containerPaper: {
        paddingRight: '80px !important',
            paddingLeft:'80px !important',
            paddingTop: '20px !important',
            paddingBottom: '20px !important',
    },
}));

class User extends Component {
    state={user: this.props.value};

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        let gridMargins ={marginTop: '20px', marginBottom: '20px'};
        let buttonsMargins={margin:'20px'};
        let classes=useStyles;
        let containerPaper = {marginTop:'5px', marginBottom: '10px', marginRight: '80px', marginLeft: '80px'};
        return (
            <Grid item style={containerPaper}>
                <Paper color="secundary" className={classes.paper}  elevation={3}>
        <Grid container
                          direction="column"
                          justify="space-between"
                          alignItems="center" spacing={1}>
            <Grid container
            direction="row"
        justify="space-around"
        alignItems="stretch" style={gridMargins}>
        <Typography>{this.state.user.email}</Typography>
            <Link href={"/user/"+this.state.user.id}>
        <Button variant="contained" color="default" size="medium" startIcon={<LastPageRoundedIcon />}> </Button>
                            </Link>
            </Grid>
            <Grid  container
            direction="row"
        justify="space-around"
        alignItems="stretch" style={gridMargins}>
        <TextField   defaultValue={this.state.user.name} variant="outlined" label="name" onChange={this.handleChange}/>
            <TextField   defaultValue={this.state.user.lastname} variant="outlined" label="lastname" onChange={this.handleChange}/>
        <TextField   defaultValue={this.state.user.nick} variant="outlined" label="nick" onChange={this.handleChange}/>
            </Grid>
                        <Grid  container
                               direction="row"
                               justify="center"
                               alignItems="stretch" style={gridMargins}>
                            <Button variant="contained" color="secondary" size="medium" startIcon={<DeleteIcon />} style={buttonsMargins}
    onClick={this.props.onDelete}>
    Delete
        </Button>
                            <Button variant="contained" color="primary" size="medium" startIcon={<SaveIcon /> }  style={buttonsMargins}
onClick={this.props.onSave}>
Save
    </Button>
                        </Grid>
    </Grid>
    </Paper>
            </Grid>
    );
}
}

export default User;