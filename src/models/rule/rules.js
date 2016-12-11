import GivingSocreRule from './givingScoreRule.js';
import TakingSocreRule from './takingScoreRule.js';
import AllInRule       from './allInRule.js';
import NextScoresRule  from './nextScoresRule.js';
import PrevScoresRule  from './prevScoresRule.js';
import EarthquakeRule  from './earthquakeRule.js';

export default [
  new GivingSocreRule(0),
  new TakingSocreRule(1),
  new AllInRule(2),
  new NextScoresRule(3),
  new PrevScoresRule(4),
  new EarthquakeRule(5),
]
