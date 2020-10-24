import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {createStyles, withStyles} from "@material-ui/core";
import {register} from "../../api/LoginApi";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const styles = (theme) => createStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastname: '', email: '', pass: '', showError:false};
  }

  async handleSignUp() {
    let user = this.state;
    try {
      let response = await register(user);
      this.props.history.push("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
      this.setState({...this.state, showError:true });
    }

  }

  handleChangeName(event) {
    this.setState({name:event.target.value });
  }
  handleChangeLastname(event) {
    this.setState({lastname:event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({email:event.target.value });
  }
  handleChangePass(event) {
    this.setState({pass:event.target.value });
  }

  render() {
    const {
      classes
    } = this.props;
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                      value={this.state.name}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Nombre"
                      autoFocus
                      onChange={this.handleChangeName.bind(this)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                      value={this.state.lastname}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Apellido"
                      name="lastName"
                      autoComplete="lname"
                      onChange={this.handleChangeLastname.bind(this)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      value={this.state.email}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      onChange={this.handleChangeEmail.bind(this)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.pass}
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.handleChangePass.bind(this)}
                  />
                </Grid>
              </Grid>
              { this.state.showError ?
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    No se ha podido llevar acabo el<strong>registro</strong>
                  </Alert>
                  : null
              }
              <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSignUp.bind(this)}
              >
                Registrarse
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Ya tienes cuenta? LogIn
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
    );
  }
}


export default withStyles(styles) (Register);