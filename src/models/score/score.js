import {Map}                      from 'immutable';

export default (value, rule) => {
  return Map({
    value:value,
    date:new Date(),
    rule:rule,
  })
}
