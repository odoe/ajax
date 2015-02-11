import Ember from 'ember';

export default function ajax(hash) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    hash.success = function(json) {
      Ember.run(null, resolve, json);
    };

    hash.error = function(jqXHR/*, textStatus, errorThrown*/) {
      Ember.run(null, reject, jqXHR);
    };

    Ember.$.ajax(hash);
  });
}
