import React, {Component, PropTypes}      from 'react';
import {Text,MainTheme} 									from 'components';
import {DECK_COLORS, DECK_SUITES}         from 'models';

const SUITES_IMAGES = {
  "CLUB"    :'https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/suit-club-16.png',
  "SPADE"   :'https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/suit-spade-16.png',
  "DIAMOND" :'https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/suit-diamond-16.png',
  "HEART"   :'https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/suit-heart-16.png',
}

const HEAD_NUMBERS ={
  11:"J",
  12:"Q",
  13:"K",
  10:"10",
  9:"9",
  8:"8",
  7:"7",
  6:"6",
  5:"5",
  4:"4",
  3:"3",
  2:"2",
  1:"A",
}

export default class Card extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  getNumber(){
    return HEAD_NUMBERS[this.props.rank];
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
        backgroundColor:"#37474E",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      headerRed:{
        flex:1,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"rgba(184, 44, 44, 1)",
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
        backgroundColor:"#37474E",
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
        backgroundColor:"rgba(184, 44, 44, 1)",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      iconContainer:{
        display:"flex",
        padding:10,
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
    const img = SUITES_IMAGES[this.props.suite];
    return (
      <div onClick={()=>this.props.onClick&&this.props.onClick({color:this.props.color,suite:this.props.suite,rank:this.props.rank})} style={styles.card}>
        <div style={(this.props.color == DECK_COLORS.red)?styles.headerRed : styles.headerBlack}>
          <div style={styles.value}>
            <Text style={styles.cardNum}>{this.getNumber()}</Text>
            <div style={styles.iconContainer}>
              <img src={SUITES_IMAGES[this.props.suite]} height="15" width="15"/>
            </div>
          </div>
        </div>
        <div style={styles.cardBody}>

        </div>
        <div style={(this.props.color == DECK_COLORS.red)?styles.footerRed : styles.footerBlack}>
          <div style={styles.value}>
            <Text style={styles.cardNum}>{this.getNumber()}</Text>
            <div style={styles.iconContainer}>
              <img src={SUITES_IMAGES[this.props.suite]} height="15" width="15"/>
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
