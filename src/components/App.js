import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Provider, connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppStore } from 'reduxApp';
import { MainTheme } from './themes';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`
const muiTheme = getMuiTheme(MainTheme);

class App extends Component {

  constructor(props) {
    super(props);
    this.setRefreshListner();
  }

  setRefreshListner() {
    window.onbeforeunload = (event) => {
      return window.confirm("Confirm refresh");
    };
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Global />
        <Provider store={AppStore}>
          <MuiThemeProvider muiTheme={muiTheme}>
            {children}
          </MuiThemeProvider>
        </Provider>
      </React.Fragment>

    )
  }
}

export { App }
