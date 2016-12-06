import React, {Component, PropTypes}       	from 'react';
import {PlayerListItem, EmptyPlaceholder}		from 'components';
import ReactCSSTransitionGroup 							from 'react-addons-css-transition-group'

export default class PlayersList extends Component{

	constructor(props){
		super(props);
		this.state = {
			playersNamesList:[],
		}
	}

  render(){
		const styles = {
			container:{
				display:'flex',
				flex:1,
				flexDirection:'column',
				alignSelf:"stretch",
				alignItems:"stretch",
				justifyContent:"flex-start",
				paddingTop:10,
				paddingBottom:10,
			},
			playerContainer:{
				marginTop:5,
				marginBottom:5,
			}
		}
		if(!this.props.list || !this.props.list.length ){
			return (
				<div style={styles.container}>
					<EmptyPlaceholder key={1} text={"No player"}/>
				</div>
			)
		}
    return (
				<ReactCSSTransitionGroup
					style={styles.container}
					transitionName="playerListItem"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnterTimeout={0}
					transitionLeaveTimeout={0}>
					{
						this.props.list.map((player,index)=>{
							return(
								<div key={player.get("id")} style={styles.playerContainer}>
									<PlayerListItem onSetPlayerColorClick={this.props.onSetPlayerColorClick} isCurrentPlayer={this.props.currentPlayer.get('id') == player.get('id')} onClick={()=>{this.props.onPlayerClick && this.props.onPlayerClick(player)}} player={player}/>
								</div>
							)
						})
					}
				</ReactCSSTransitionGroup>


    )
  }


};

PlayersList.propTypes = {
  list:PropTypes.array,
	onSetPlayerColorClick:PropTypes.func,
	onPlayerClick:PropTypes.func,
	currentPlayer:PropTypes.object,
}
