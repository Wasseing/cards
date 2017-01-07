import React, {Component, PropTypes}    from 'react';
import {Text, MainTheme}                from 'components';

export default class Footer extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  onClick(){
    window.location.href = "https://github.com/Wasseing/cards";
  }

  render(){
    const styles = {
      text:{
        margin:10,
        fontSize:13,
        cursor:"pointer",
        color:MainTheme.palette.footer,
      }
    }
    return (
      <Text onClick={this.onClick.bind(this)} style={styles.text}>{"Made with "+"\u2665"+" to save your night"}</Text>
    )
  }

};
