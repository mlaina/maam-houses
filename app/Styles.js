import React from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Poppins'
    },
    palette: {
      primary: {
        light: '#FFB6ED',
        main: '#028181',
        dark: '#7A90C9'
      },
      secondary: {
        light: 'rgba(156,156,156,0.38)',
        main: '#028181',
        dark: '#000000',
        contrastText: '#7A90C9',
      },
      tonalOffset: 0.2,
    },
  });


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
}));

const Styles = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                {props.children}
            </div>
        </ThemeProvider>
    );
};


export default Styles