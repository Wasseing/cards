
export const TYPES = {
  RULES_ACTIVATE_RULE:'RULES_ACTIVATE_RULE',
	RULES_DEACTIVATE_RULE:'RULES_DEACTIVATE_RULE',
}

export default class RulesActionner{

  static activateRule(ruleId){
		return {
			type:TYPES.RULES_ACTIVATE_RULE,
      ruleId:ruleId,
		}
	}

  static deactivateRule(ruleId){
		return {
			type:TYPES.RULES_DEACTIVATE_RULE,
      ruleId:ruleId,
		}
	}

}
