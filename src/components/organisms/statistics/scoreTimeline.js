import React, { Component } from 'react';
import { Card as MaterialCard } from 'material-ui/Card';
import { Text, MainTheme, EmptyPlaceholder } from 'components';
import RC2 from 'react-chartjs2';

export class ScoreTimeline extends Component {

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
    chart.data.datasets.map((set, index) => {
      chart.data.datasets[index].data = team.get('players').get(index).get("score").map((score) => { return { x: score.get("date"), y: score.get("value") } }).toArray();
    })
    chart.update();
  }

  updateColors(team) {
    if (!this.refs.CHART || !this.refs.CHART.getChart) { return };
    let chart = this.refs.CHART.getChart();
    chart.data.datasets.map((set, index) => {
      chart.data.datasets[index].borderColor = team.get('players').get(index).get("color");
      chart.data.datasets[index].backgroundColor = team.get('players').get(index).get("color");
      chart.data.datasets[index].pointHoverBackgroundColor = team.get('players').get(index).get("color");
    })
    chart.update();
  }

  getSet(player) {
    return {
      label: player.get("name"),
      data: player.get("score").map((score) => { return { x: score.get("date"), y: score.get("value") } }).toArray(),
      fill: false,
      lineTension: 0.1,
      borderColor: player.get("color"),
      backgroundColor: player.get("color"),
      pointHoverBackgroundColor: player.get("color"),
      pointRadius: 0,
    }
  }

  getDataset(team) {
    let dataset = {};
    dataset.datasets = team.get("players").map((player) => this.getSet(player)).toArray();
    return dataset;
  }

  getOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'time',
          fontSize: 10,
          autoSkip: true,
          autoSkipPadding: 20,
          time: {
            unit: 'second',
            unitStepSize: 120,
          },
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          type: 'linear',
          fontSize: 10,
          ticks: {
            min: 0,
            stepSize: 5
          },
          gridLines: {
            display: false,
          },
        }],
      }
    }
  }

  isEmpty() {
    return this.props.team.get("players").size <= 0;
  }

  render() {
    const styles = {
      card: {
        padding: 20,
        flex: 1,
      },
      title: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        margin: 0,
        borderBottomWidth: 1,
      },
      container: {
        height: 400,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: 'flex-start',
        borderRadius: 15,
      },
      graph: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: 'center',
      },
    }
    return (
      <MaterialCard style={styles.card}>
        <div style={styles.container}>
          <Text style={styles.title}>{"Score's timeline"}</Text>
          {this.isEmpty() ?
            <EmptyPlaceholder key={1} text={"No player"} />
            :
            <div style={styles.graph}>
              <RC2 ref={"CHART"} type={"line"} data={this.getDataset(this.props.team)} options={this.getOptions()} />
            </div>
          }
        </div>
      </MaterialCard>
    )
  }


};