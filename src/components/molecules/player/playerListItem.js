import React, {Component, PropTypes}       	          				from 'react';
import {Card}											                    				from 'material-ui';
import {Text, ScoreValue, MainTheme, TrophyList, Icon}      	from 'components';
import ActionSetColor 																				from 'material-ui/svg-icons/editor/insert-chart';
import IconButton 																						from 'material-ui/IconButton';

export default class PlayerListItem extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	onColorIconClick(event){
		this.props.onSetPlayerColorClick&&this.props.onSetPlayerColorClick(this.props.player);
		event.stopPropagation()
	}

  render(){
		const styles = {
			card:{
				backgroundColor:this.props.isCurrentPlayer?MainTheme.palette.accent2Color:null,
			},
			container:{
				height:90,
        display:'flex',
				flexDirection:'column',
				alignItems:"stretch",
			},
			line:{
        display:'flex',
				flex:1,
				flexGrow:1,
				paddingRight:10,
				flexDirection:'row',
				alignItems:"center",
				justifyContent:"space-between",
			},
			up:{
				paddingLeft:10,
				paddingRight:10,
				display:'flex',
				flex:1,
				flexGrow:1,
				flexDirection:'row',
				alignItems:"center",
				justifyContent:"space-between",
			},
      name:{
				textAlign:"center",
				fontSize:20,
      },
      score:{
				textAlign:"center",
				fontSize:20,
        color:MainTheme.palette.accent3Color,
      },
			icon:{
				fontSize:25,
				color:this.props.player.get("color"),
			}
		}
    return (
      <Card onClick={this.props.onClick} style={styles.card}>
				<div style={styles.container}>
	        <div style={styles.up}>
	          <Text style={styles.name}>{this.props.player.get("name")}</Text>
	          <ScoreValue gave={this.props.player.get("gave")} score={this.props.player.get("score")}/>
					</div>
					<div style={styles.line}>
						<TrophyList list={this.props.player.get("trophys")} />
						<IconButton onClick={this.onColorIconClick.bind(this)}>
				      <ActionSetColor color={this.props.player.get('color')} />
				    </IconButton>
					</div>
        </div>
      </Card>
    )
  }


};

PlayerListItem.propTypes = {
  player:PropTypes.object,
	onClick:PropTypes.func,
	onSetPlayerColorClick:PropTypes.func,
	isCurrentPlayer:PropTypes.bool,
}
