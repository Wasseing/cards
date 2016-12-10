import React, {Component, PropTypes}      from 'react';
import {Text,MainTheme} 									from 'components';
import {DECK_COLORS, DECK_SUITES}         from 'models';
import {HEAD_NUMBERS, SUITES_UNICODES}    from './constants.js';

export default class Card extends Component{

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
			card:{
        display:"flex",
        alignSelf:"stretch",
        flexDirection:'column',
        alignItems:"stretch",
        boxShadow:'0px 0px 5px 0px #656565',
        justifyContent:'flex-start',
        flex:1,
        borderRadius:15,
			},
      headerBlack:{
        flex:1,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:MainTheme.palette.blackCard,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      headerRed:{
        flex:1,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:MainTheme.palette.redCard,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      footerBlack:{
        flex:1,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start",
        transform:"rotate(180deg)",
        backgroundColor:MainTheme.palette.blackCard,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      footerRed:{
        flex:1,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start",
        transform:"rotate(180deg)",
        backgroundColor:MainTheme.palette.redCard,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
			suiteBlack:{
				fontSize:17,
				color:MainTheme.palette.blackCard,
			},
			suiteRed:{
				fontSize:17,
				color:MainTheme.palette.redCard,
			},
      iconContainer:{
        display:"flex",
				height:40,
				width:40,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:30,
        boxShadow:'0px 0px 5px 0px #656565',
        margin:10,
        backgroundColor:"#FFFFFF"
      },
      value:{
        transform:"translateY(25%)",
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
      },
      cardNum:{
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        color:"#FFFFFF",
      },
      cardBody:{
        flex:4,
      },
		}
    return (
      <div onClick={()=>this.props.onClick&&this.props.onClick({color:this.props.color,suite:this.props.suite,rank:this.props.rank})} style={styles.card}>
        <div style={(this.props.color == DECK_COLORS.red)?styles.headerRed : styles.headerBlack}>
          <div style={styles.value}>
            <Text style={styles.cardNum}>{this.getNumber()}</Text>
            <div style={styles.iconContainer}>
              <Text style={(this.props.color == DECK_COLORS.red)?styles.suiteRed:styles.suiteBlack}>{this.getSuite()}</Text>
            </div>
          </div>
        </div>
        <div style={styles.cardBody}>

        </div>
        <div style={(this.props.color == DECK_COLORS.red)?styles.footerRed : styles.footerBlack}>
          <div style={styles.value}>
            <Text style={styles.cardNum}>{this.getNumber()}</Text>
            <div style={styles.iconContainer}>
              <Text style={(this.props.color == DECK_COLORS.red)?styles.suiteRed:styles.suiteBlack}>{this.getSuite()}</Text>
            </div>
          </div>
        </div>
      </div>
    )
  }


};

Card.propTypes = {
  onClick:PropTypes.func,
  color:PropTypes.oneOf([DECK_COLORS.red, DECK_COLORS.black]).isRequired,
  suite:PropTypes.oneOf([DECK_SUITES.spade, DECK_SUITES.heart, DECK_SUITES.diamond, DECK_SUITES.club]).isRequired,
  rank:PropTypes.number.isRequired,
}
