import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
    white: {
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        padding: "0",
        backgroundColor: "white",
        fontColor: theme.palette.primary.main
    }
});

class Fondo extends React.Component {
    white(classes){
        return (
            <div className={classes.white}>
                {this.props.children}
            </div>
        );
    }

    tipoFondo(classes){
        switch (this.props.tipo) {
            case "white": return  this.white(classes);
            default: return this.white(classes);
        }
    }

    render(){
        const {classes} = this.props;
        return (
            this.tipoFondo(classes)
        );
    }
}

export default withStyles(styles) (Fondo);