import React, {Component, PropTypes}       													from 'react';
import RaisedButton 																								from 'material-ui/RaisedButton';
import Card 																												from 'material-ui/Card/Card';
import {List} 																											from 'immutable';
import {MainTheme, Text, RulesList, CardList, PlayerTarget} 				from 'components';

export default class FindTarget extends Component{

	constructor(props){
		super(props);
		this.state = {
      currentTarget:null,
		}
	}

	componentWillUpdate(nextProps, nextState){

	}

  selectRandomTeamMember(){
    const teamSize = this.props.team.get('players').size;
    if(!teamSize){return};
    const targetIndex = Math.floor(Math.random()*teamSize);
    this.setState({currentTarget:targetIndex});
  }

  render(){
		const styles = {
			card:{
				padding:20,
        flex:1,
			},
			container:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:'flex-start',
        borderRadius:15,
      },
			content:{
				display:"flex",
				flex:1,
				flexDirection:"column",
				alignItems:"center",
				justifyContent:'center',
			},
			title:{
				textAlign:"center",
				fontSize:50,
				fontWeight:"bold",
				margin:0,
			},
			separator:{
        height:1,
        backgroundColor:MainTheme.palette.primary3Color,
      },
      targetContainer:{
        alignSelf:"stretch",
        paddingTop:20,
        paddingBottom:20,
      },
      buttonSelect:{
        fontSize:13,
      }
		}
    return (
			<Card style={styles.card}>
				<div style={styles.container}>
					<Text style={styles.title}>TARGET</Text>
          <div style={styles.separator}/>
					<div style={styles.content}>
            <div style={styles.targetContainer}>
              <PlayerTarget player={this.props.team.get("players").get(this.state.currentTarget)}/>
            </div>
            <RaisedButton disabled={!this.props.team.get('players').size} onClick={this.selectRandomTeamMember.bind(this)} label="CHOOSE" labelStyle={styles.buttonSelect} primary={true}/>
					</div>
				</div>
			</Card>
    )
  }


};

FindTarget.propTypes = {
	team:PropTypes.object.isRequired,
}
