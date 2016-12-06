import React, {Component, PropTypes}       	          from 'react';
import {Text, MainTheme}                    					from 'components';

export default class ScoreValue extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
		const styles = {
      score:{
				textAlign:"center",
				fontSize:20,
        color:MainTheme.palette.accent3Color,
      }
		}
    return (
      <Text style={styles.score}>{this.props.score.last().get("value")}</Text>
    )
  }


};

ScoreValue.propTypes = {
  score:PropTypes.object,
}
