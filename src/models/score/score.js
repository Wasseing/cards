import { Map } from 'immutable';

export const Score = (value, rule, increment) => {
  return Map({
    value: value,
    date: new Date(),
    rule: rule,
    increment: increment
  })
}
