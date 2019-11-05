import React, { Component } from 'react';
import { Card as MaterialCard } from 'material-ui/Card';
import { Text, MainTheme, EmptyPlaceholder } from 'components';
import RC2 from 'react-chartjs2';

export class ScoreShares extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}

	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.team.get("players").size != this.props.team.get("players").size) { return true };
		return false;
	}

	componentWillReceiveProps(nextProps) {
		this.updateData(nextProps.team);
		this.updateColors(nextProps.team);
	}

	updateData(team) {
		if (!this.refs.CHART || !this.refs.CHART.getChart) { return };
		let chart = this.refs.CHART.getChart();
		chart.data.datasets[0].data = team.get("players").map((player) => player.get("score").last().get("value")).toArray();
		chart.update();
	}

	updateColors(team) {
		if (!this.refs.CHART || !this.refs.CHART.getChart) { return };
		let chart = this.refs.CHART.getChart();
		chart.data.datasets[0].backgroundColor = team.get("players").map((player) => player.get("color")).toArray();
		chart.update();
	}

	getDataset(team) {
		let dataset = {};
		let set = {};
		dataset.labels = team.get("players").map((player) => player.get('name')).toArray();
		set.data = team.get("players").map((player) => player.get("score").last().get("value")).toArray();
		set.backgroundColor = team.get("players").map((player) => player.get("color")).toArray();
		dataset.datasets = [set];
		return dataset;
	}

	getOptions() {
		return {

		}
	}

	isEmpty() {
		return this.props.team.get("players").size <= 0;
	}

	render() {
		const styles = {
			card: {
				padding: 20,
			},
			title: {
				textAlign: "center",
				fontSize: 50,
				fontWeight: "bold",
				margin: 0,
				borderBottomWidth: 1,
			},
			container: {
				display: "flex",
				flex: 1,
				flexDirection: "column",
				alignItems: "stretch",
				justifyContent: 'flex-start',
				borderRadius: 15,
			},
		}
		return (
			<MaterialCard style={styles.card}>
				<div style={styles.container}>
					<Text style={styles.title}>Score shares</Text>
					{this.isEmpty() ?
						<EmptyPlaceholder key={1} text={"No player"} />
						:
						<RC2 ref={"CHART"} type={"pie"} data={this.getDataset(this.props.team)} options={this.getOptions()} />
					}
				</div>
			</MaterialCard>
		)
	}


};