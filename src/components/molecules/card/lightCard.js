import React, {Component, PropTypes}       													from 'react';
import {Card as MaterialCard} 																		  from 'material-ui/Card';
import {DECK_COLORS, DECK_SUITES}         													from 'models';
import {Card, MainTheme, Text} 				                              from 'components';
import {HEAD_NUMBERS, SUITES_UNICODES}                            	from './constants.js';

export default class LightCard extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  getNumber(){
    return HEAD_NUMBERS[this.props.rank];
  }

	getSuite(){
		return SUITES_UNICODES[this.props.suite];
	}

  render(){
		const styles = {
			container:{
				position:"relative",
				display:"flex",
				width:65,
				height:65,
				flexDirection:"column",
				alignItems:"center",
				justifyContent:'center',
			},
      card:{
				position:"relative",
        display:"flex",
        width:47,
        height:47,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center',
				borderRadius:47,
				boxShadow:'0px 0px 3px 0px #656565',
      },
      iconContainer:{
        position:"absolute",
				display:"flex",
        top:0,
        left:0,
        right:0,
        bottom:0,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center',
				zIndex:1,
      },
			valueContainer:{
        position:"absolute",
				display:"flex",
        left:0,
        bottom:0,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center',
				zIndex:2,
				width:25,
        height:25,
				borderRadius:25,
				boxShadow:'0px 0px 3px 0px #656565',
				backgroundColor:MainTheme.palette.canvasColor,
      },
			suiteBlack:{
				fontSize:40,
				color:MainTheme.palette.blackCard,
			},
			suiteRed:{
				fontSize:40,
				color:MainTheme.palette.redCard,
			},
      value:{
				fontWeight:"bold",
        fontSize:12,
				textAlign:"center",
      }
		}
    return (
			<div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
						<Text style={(this.props.color == DECK_COLORS.red)?styles.suiteRed:styles.suiteBlack}>{this.getSuite()}</Text>
          </div>
				</div>
				<div style={styles.valueContainer}>
					<Text style={styles.value}>{this.getNumber()}</Text>
				</div>
      </div>
    )
  }


};

LightCard.propTypes = {
	color:PropTypes.oneOf([DECK_COLORS.red, DECK_COLORS.black]).isRequired,
  suite:PropTypes.oneOf([DECK_SUITES.spade, DECK_SUITES.heart, DECK_SUITES.diamond, DECK_SUITES.club]).isRequired,
  rank:PropTypes.number.isRequired,
}
