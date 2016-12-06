import React, {Component, PropTypes}      from 'react';
import {Text,MainTheme, Icon} 						from 'components';
import {DECK_COLORS}											from 'models';

export default class DeckStatistics extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

  getNbLeftCard(){
    const nbCards = this.props.deck.get('cards').size;
    const currentIndex = this.props.deck.get('currentCard');
    return nbCards - currentIndex - 1;
  }

	getNbRedCard(){
		return this.props.deck.get('cards').reduce((prevValue,nextItem,index)=>(nextItem.color==DECK_COLORS.red && index>this.props.deck.get('currentCard'))?prevValue+1:prevValue,0);
	}

	getNbBlackCard(){
		return this.props.deck.get('cards').reduce((prevValue,nextItem,index)=>(nextItem.color==DECK_COLORS.black && index>this.props.deck.get('currentCard'))?prevValue+1:prevValue,0);
	}

  render(){
		const styles = {
      container:{
        display:"flex",
        flexDirection:'column',
        alignItems:'stretch',
      },
      separator:{
        height:1,
        marginTop:5,
        marginBottom:5,
        backgroundColor:MainTheme.palette.accent3Color,
      },
			title:{
				fontSize:20,
				margin:0,
        color:MainTheme.palette.textColor,
			},
      row:{
        margin:5,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
      },
      icon:{
        padding:8,
        borderRadius:28,
        display:"flex",
        boxShadow:'0px 0px 5px 0px #656565',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
      },
      stat:{
        fontSize:13,
				margin:0,
        color:MainTheme.palette.textColor,
      }
		}
    return (
      <div style={styles.container}>
        <Text style={styles.title}>Statistics</Text>
        <div style={styles.separator}/>
        <div style={styles.row}>
          <div style={styles.icon}>
            <Icon name={"MdCheckCircle"} family={"MD"} style={{fontSize:20,color:"#00897B"}}/>
          </div>
          <Text style={styles.title}>{this.getNbLeftCard()}</Text>
        </div>
				<div style={styles.row}>
          <div style={styles.icon}>
            <Icon name={"FaCircle"} family={"FA"} style={{fontSize:20,color:"rgba(184, 44, 44, 1)"}}/>
          </div>
          <Text style={styles.title}>{this.getNbRedCard()}</Text>
        </div>
				<div style={styles.row}>
          <div style={styles.icon}>
            <Icon name={"FaCircle"} family={"FA"} style={{fontSize:20,color:"#37474E"}}/>
          </div>
          <Text style={styles.title}>{this.getNbBlackCard()}</Text>
        </div>
      </div>
    )
  }


};

DeckStatistics.propTypes = {
  deck:PropTypes.object,
}
