import {RulesActionTypes} 	      from 'reduxApp';
import {Map, List} 								from 'immutable';
import {RULES, TrophysRules}      from 'models';

export const initialState = Map({
  list:List(RULES),
  trophysList:List(TrophysRules),
});

const RulesReducer = (state = initialState, action) => {
    let index;
  	switch (action.type) {
      case RulesActionTypes.RULES_ACTIVATE_RULE:
        index = state.get("list").findIndex((rule)=>rule.getId() == action.ruleId);
        if(index<0){return state};
        return state.set("list",state.get("list").update(index,(rule)=>rule.activate()));
      case RulesActionTypes.RULES_DEACTIVATE_RULE:
        index = state.get("list").findIndex((rule)=>rule.getId() == action.ruleId);
        if(index<0){return state};
        return state.set("list",state.get("list").update(index,(rule)=>rule.deactivate()));
      default:
	      return state;
  }
};

export default RulesReducer;
