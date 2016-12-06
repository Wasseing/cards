import React, { PropTypes, Component } from 'react'
import { injectGlobal }                from 'styled-components'
import { Provider, connect }           from 'react-redux';
import MuiThemeProvider                from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme                     from 'material-ui/styles/getMuiTheme';
import {AppStore}                      from 'reduxApp';
import injectTapEventPlugin            from 'react-tap-event-plugin';
import {MainTheme}                     from './themes';

injectGlobal`
  body {
    margin: 0;
  }
`
const muiTheme = getMuiTheme(MainTheme);

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props){
    super(props);
    injectTapEventPlugin();
    this.setRefreshListner();
  }

  setRefreshListner(){
    window.onbeforeunload = (event)=>{
      return confirm("Confirm refresh");
    };
  }

  render () {    
    const { children } = this.props
    return (
      <Provider store={AppStore}>
        <MuiThemeProvider muiTheme={muiTheme}>
          {children}
        </MuiThemeProvider>
      </Provider>

    )
  }
}

export default App
