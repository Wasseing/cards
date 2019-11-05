import React, { Component } from 'react';
import { PlayerListItem, EmptyPlaceholder } from 'components';

export class PlayersList extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const styles = {
			container: {
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				alignSelf: "stretch",
				alignItems: "stretch",
				justifyContent: "flex-start",
				paddingTop: 10,
				paddingBottom: 10,
			},
			playerContainer: {
				marginTop: 5,
				marginBottom: 5,
			}
		}
		if (!this.props.list || !this.props.list.size) {
			return (
				<div style={styles.container}>
					<EmptyPlaceholder key={1} text={"No player"} />
				</div>
			)
		}
		return (
			<div style={styles.container}>
				{
					this.props.list.map((player, index) => {
						return (
							<div key={player.get("id")} style={styles.playerContainer}>
								<PlayerListItem onSetPlayerColorClick={this.props.onSetPlayerColorClick} isCurrentPlayer={this.props.currentPlayer.get('id') == player.get('id')} onClick={() => { this.props.onPlayerClick && this.props.onPlayerClick(player) }} player={player} />
							</div>
						)
					})
				}
			</div>


		)
	}


};