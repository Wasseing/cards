import {Map}                      from 'immutable';

export default (value, rule, increment) => {
  return Map({
    value:value,
    date:new Date(),
    rule:rule,
    increment:increment
  })
}
