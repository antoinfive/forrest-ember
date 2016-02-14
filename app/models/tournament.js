import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  numRound: DS.attr('number'),
  numPlayers: DS.attr('number'),
  winner: DS.attr('number'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  user: DS.hasMany('user'),
  match: DS.hasMany('match')
});
