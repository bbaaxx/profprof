import DS from 'ember-data';

export default DS.Model.extend({

  title:            DS.attr('string'),
  institution:      DS.attr('string'),
  status:           DS.attr('string'),
  certificationId:  DS.attr('string'),
  startDate:        DS.attr('date'),
  endDate:          DS.attr('date'),
  qualification:    DS.belongsTo('education-qualification', {async:true})

});
