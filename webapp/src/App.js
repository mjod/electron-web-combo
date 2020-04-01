import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { store, StoreProvider } from './Store';

const useStyles = makeStyles(theme => ({
  App: {
    textAlign: 'center'
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  AppLogo: {
    animation: `$AppLogoSpin infinite 20s linear`,
    height: '40vmin',
    pointerEvents: 'none'
  },
  "@keyframes AppLogoSpin": {
    'from': {
      transform: 'rotate(0deg)'
    },
    'to': {
      transform: 'rotate(360deg)'
    }
  },
  AppLink: {
    color: '#61dafb'
  }
}));


function App(props) {
  const value = useContext(store);
  console.log(value)
  const [result, setResult] = useState(0);
  const [values, setValues] = useState({
    a: 0,
    b: 0
  });
  const classes = useStyles(props);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const sumClick = async function () {
    //var wi = new WebInterface();
    //var res = await wi.sum(values.a, values.b);
    //console.log(res)
    console.log('c')
    //setResult(res.msg);
  };
  console.log(props)
  useEffect(() => {
    //dispatch({type: 'SETINTERFACES', payload: props.services})
  }, []);

  return (
    <React.Fragment>
      <StoreProvider>
        <CssBaseline />
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <p>
              {values.a} + {values.b} = {result}
            </p>
            <a
            className={classes.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                id="input-a"
                label="Input A"
                type="number"
                value={values.a}
                onChange={handleChange('a')}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <TextField
                id="input-b"
                label="Input B"
                type="number"
                value={values.b}
                onChange={handleChange('b')}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button onClick={sumClick}>Sum</Button>
              </div>
            </form>
          </header>
        </div>
      </StoreProvider>
    </React.Fragment>
  );
}

export default App;
