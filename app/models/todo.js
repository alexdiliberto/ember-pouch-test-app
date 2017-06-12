import DS from 'ember-data';
import { Model } from 'ember-pouch';

const {
  attr
} = DS;

export default Model.extend({
  item: attr('string'),
  isComplete: attr('boolean', { defaultValue: false })
});
