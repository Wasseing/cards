import React, {Component, PropTypes}       	          				from 'react';
import {Card}											                    				from 'material-ui';
import {Text, ScoreValue, MainTheme, TrophyList, Icon}      	from 'components';
import ActionSetColor 																				from 'material-ui/svg-icons/editor/insert-chart';
import IconButton 																						from 'material-ui/IconButton';

export default class PlayerTarget extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  render(){
		const styles = {
			card:{
        flex:1,
			},
			container:{
				height:90,
        display:'flex',
				flexDirection:'column',
        justifyContent:'center',
				alignItems:"stretch",
			},
      name:{
        color:this.props.player?this.props.player.get('color'):MainTheme.palette.primary3Color,
				textAlign:"center",
        fontWeight:"bold",
				fontSize:25,
      },
		}
    return (
      <Card onClick={this.props.onClick} style={styles.card}>
				<div style={styles.container}>
          <Text style={styles.name}>{this.props.player?this.props.player.get("name"):"NO TARGET"}</Text>
        </div>
      </Card>
    )
  }


};

PlayerTarget.propTypes = {
  player:PropTypes.object,
}
