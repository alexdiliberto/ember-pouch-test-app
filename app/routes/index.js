import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').findAll('todo');
  },

  actions: {
    add(item) {
      let todo = get(this, 'store').createRecord('todo', { item });
      return todo.save();
    },
    edit(changeset) {
      return changeset.save();
    }
  }
});
