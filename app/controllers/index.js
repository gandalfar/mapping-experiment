import Ember from 'ember';
/* globals L */

export default Ember.Controller.extend({
  bounds: [
    L.latLng(45.576794, -122.675726),
    L.latLng(45.528298, -122.662986),
    L.latLng(45.530891, -122.655504),
    L.latLng(46.979219, -122.479134)
  ],
  padding: 5,
  actions: {
    increasePadding() {
      this.incrementProperty('padding');
      this.get('bounds').addObject(L.latLng(45.20, -122.50));
    }
  }
});
