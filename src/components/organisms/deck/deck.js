import React, {Component, PropTypes}       													from 'react';
import {Card as MaterialCard} 																		  from 'material-ui/Card';
import ActionRandom 																								from 'material-ui/svg-icons/av/shuffle';
import ActionReset 																									from 'material-ui/svg-icons/notification/sync';
import ActionAdd 																										from 'material-ui/svg-icons/content/add';
import IconButton 																									from 'material-ui/IconButton';
import RaisedButton 																								from 'material-ui/RaisedButton';
import {Text, PlayersList, Card, MainTheme, DeckStatistics} 				from 'components';
import {List}																												from 'immutable';
import TextField 																										from 'material-ui/TextField';
import Slider 																											from 'material-ui/Slider';


export default class Deck extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  getCurrentCard(){
    return this.props.deck.get("cards").get(this.props.deck.get("currentCard"));
  }

	onNbDeckChanged(event, value){
		this.props.onNbDeckChanged && this.props.onNbDeckChanged(value);
	}


  render(){
		const styles = {
      card:{
        padding:20,
      },
      title:{
        textAlign:"center",
				fontSize:50,
				fontWeight:"bold",
				margin:0,
        borderBottomWidth:1,
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
				flexDirection:"row",
				flexWrap:'wrap',
				alignItems:"stretch",
				justifyContent:'center',
			},
      cardContainer:{
        display:"flex",
        width:240,
        height:380,
        flexDirection:"column",
        alignItems:"stretch",
				marginRight:30,
				margin:10,
      },
			statisticsContainer:{
				width:240,
				margin:10,
			},
      separator:{
        height:1,
        backgroundColor:MainTheme.palette.primary3Color,
      },
			bottomSeparator:{
				height:1,
        marginTop:20,
				alignSelf:"stretch",
        backgroundColor:MainTheme.palette.accent2Color,
			},
			actions:{
				display:"flex",
				alignSelf:"stretch",
				flexDirection:"row",
				justifyContent:"flex-start",
				alignItems:"center",
			},
			sliderContainer:{
				alignSelf:'stretch',
				flexDirection:"row",
				alignItems:'center',
				justifyContent:'center',
				marginLeft:10,
				display:'flex',
			},
			slider:{
				width:100,
				height:20,
				margin:0,
			}
		}

    const card = this.getCurrentCard();
    return (
      <MaterialCard style={styles.card}>
        <div style={styles.container}>
          <Text style={styles.title}>DECK</Text>
          <div style={styles.separator}/>
					<div style={styles.content}>
	          <div style={styles.cardContainer}>
				       <Card onClick={this.props.onCardClick} rank={card.rank} suite={card.suite} color={card.color}/>
	          </div>
						<div style={styles.statisticsContainer}>
							<DeckStatistics deck={this.props.deck}/>
						</div>
					</div>
					<div style={styles.bottomSeparator}/>
					<div style={styles.actions}>
						<IconButton onClick={this.props.onResetDeck} tooltip="Reset the deck">
				      <ActionReset color={MainTheme.palette.accent3Color} />
				    </IconButton>
						<IconButton onClick={this.props.onShuffleDeck} tooltip="Shuffle deck">
							<ActionRandom color={MainTheme.palette.accent3Color} />
						</IconButton>
						<IconButton onClick={this.props.addDeck} tooltip="Add a deck">
							<ActionAdd color={MainTheme.palette.accent3Color} />
						</IconButton>
					</div>
        </div>
      </MaterialCard>
    )
  }


};

Deck.propTypes = {
	deck:PropTypes.object,
	onNext:PropTypes.func,
	onCardClick:PropTypes.func,
	onShuffleDeck:PropTypes.func,
	onResetDeck:PropTypes.func,
	addDeck:PropTypes.func,
}
