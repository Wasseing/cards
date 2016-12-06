import {Map}                      from 'immutable';

export default (value) => {
  return Map({
    value:value,
    date:new Date(),
  })
}
