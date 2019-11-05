import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import IconButton from 'material-ui/IconButton';
import ActionReset from 'material-ui/svg-icons/notification/sync';
import RaisedButton from 'material-ui/RaisedButton';
import ActionRandom from 'material-ui/svg-icons/places/casino';
import { Text, PlayersList, MainTheme } from 'components';
import { List } from 'immutable';
import TextField from 'material-ui/TextField';

export class Team extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playersName: "",
		}
	}

	onAddButtonPressed() {
		this.pushPlayer();
	}

	pushPlayer() {
		if (!this.state.playersName) { return };
		this.props.playerAdded && this.props.playerAdded(this.state.playersName);
		this.setState({ playersName: "" });
	}

	setPlayersName(event) {
		this.setState({ playersName: event.target.value });
	}

	getCurrentPlayer() {
		return this.props.team.get("players").get(this.props.team.get("currentIndex"));
	}

	render() {
		const styles = {
			card: {
				padding: 20,
			},
			container: {
				flex: 1,
				display: "flex",
				flexDirection: 'column',
				alignItems: "center",
				justifyContent: "center",
			},
			actionsContainer: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
			},
			title: {
				textAlign: "center",
				fontSize: 50,
				fontWeight: "bold",
				margin: 0,
			},
			buttonAdd: {
				fontSize: 13,
			},
			separator: {
				height: 1,
				marginBottom: 10,
				alignSelf: "stretch",
				backgroundColor: MainTheme.palette.primary3Color,
			},
			bottomSeparator: {
				height: 1,
				marginTop: 10,
				alignSelf: "stretch",
				backgroundColor: MainTheme.palette.accent2Color,
			},
			actions: {
				display: "flex",
				alignSelf: "stretch",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
			}
		}
		return (
			<Card style={styles.card}>
				<div style={styles.container}>
					<Text style={styles.title}>TEAM</Text>
					<div style={styles.separator} />
					<PlayersList onSetPlayerColorClick={this.props.onSetPlayerColorClick} currentPlayer={this.getCurrentPlayer()} onPlayerClick={this.props.onPlayerClick} list={this.props.team.get("players")} />
					<div style={styles.actionsContainer}>
						<TextField style={{ width: null }} value={this.state.playersName} onChange={this.setPlayersName.bind(this)} hintText="Choose your name" />
						<div style={{ width: "40px" }} />
						<RaisedButton disabled={!this.state.playersName} onClick={this.onAddButtonPressed.bind(this)} label="Add" labelStyle={styles.buttonAdd} primary={true} />
					</div>
					<div style={styles.bottomSeparator} />
					<div style={styles.actions}>
						<IconButton onClick={this.props.onResetTeam} tooltip="Reset the team">
							<ActionReset color={MainTheme.palette.accent3Color} />
						</IconButton>
						<IconButton onClick={this.props.onSetRandomPlayerClicked} tooltip="Select random aléatoire">
							<ActionRandom color={MainTheme.palette.accent3Color} />
						</IconButton>
					</div>
				</div>
			</Card>
		)
	}


};