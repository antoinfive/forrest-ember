import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    tournaments: { serialize: false, deserialize: 'ids' },
    matches: { serialize: false, deserialize: 'ids' }
  }
});
