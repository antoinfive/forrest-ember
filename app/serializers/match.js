import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    users: { serialize: false, deserialize: 'ids' },
  }
});
