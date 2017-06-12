import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  item(i) {
    return `Todo ${i}`;
  },
  isComplete: false
});
