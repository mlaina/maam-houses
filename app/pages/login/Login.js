import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { withStyles, createStyles } from '@material-ui/core';
import {login} from '../../api/LoginApi';
import {saveSession} from '../../Session';
import AlertTitle from "@material-ui/lab/AlertTitle";
import Fondo from "../../components/Fondo";


const styles = (theme) => createStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={email:'',pass:'', showError:false};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSignIn=this.handleSignIn.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({email:event.target.value });
  }
  handleChangePass(event) {
    this.setState({pass:event.target.value });
  }

  async handleSignIn() {
    console.log(this.state);
    let user = {};
    user.email = this.state.email;
    user.pass = this.state.pass;
    try {
      let response = await login(user);
      if(response.success) {
        console.log(response.token);
        saveSession(response.token);
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
      this.setState({...this.state, showError:true });
    }
  }


  render() {
    const {
      classes
    } = this.props;
    const email = this.props.email;
    const password = this.props.password;
    return (
        <Fondo>
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <EmojiObjects />
              </Avatar>
              <Typography component="h1" variant="h5">
                Cuéntame MAN
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField value={email} variant="outlined" margin="normal" required fullWidth
                        id="email" label="Dirección de email" name="email" autoComplete="email"
                        autoFocus onChange={this.handleChangeEmail}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField value={password} variant="outlined" margin="normal" required fullWidth
                        id="password" label="Password" name="password" type="password"
                        autoComplete="current-password" onChange={this.handleChangePass}/>
                  </Grid>
                </Grid>
                { this.state.showError ?
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      Usuario o contraseña <strong>incorrecta</strong>
                    </Alert>
                    : null
                }
                <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={this.handleSignIn}>
                  Entrar
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Olvidaste tu password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      No tienes cuenta? Regístrate
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Fondo>
    );
  }
}



export default withStyles(styles) (Login);