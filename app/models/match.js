import DS from 'ember-data';

export default DS.Model.extend({
  player1: DS.attr('number'),
  player2: DS.attr('number'),
  player1Score: DS.attr('number'),
  player2Score: DS.attr('number'),
  completed: DS.attr('boolean', { defaultValue: false }),
  tournament: DS.belongsTo('tournament'),
  users: DS.hasMany('user')
});
