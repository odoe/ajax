import Ember from 'ember';

export default function ajax(url, options) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    if (typeof url === 'object') {
      options = url;
    }
    else {
      options = options || {};
      options.url = url;
    }
    
    options.success = function(json) {
      Ember.run(null, resolve, json);
    };

    options.error = function(jqXHR/*, textStatus, errorThrown*/) {
      Ember.run(null, reject, jqXHR);
    };

    Ember.$.ajax(options);
  });
}
