import ajax from 'uncharted-ajax/utils/ajax';
import Pretender from 'pretender';

var pretender = null;

module('ajax', {
  setup: function() {
    pretender = new Pretender();
  },

  teardown: function() {
    pretender.shutdown();
  }
});

// Replace this with your real tests.
test('it works with a hash', function() {
  expect(2);

  pretender.get('/url', function(request) {
    ok(request);
  });

  var result = ajax({ url: '/url' });
  ok(result);
});

test('it works with a string', function() {
  expect(2);

  pretender.get('/url', function(request) {
    ok(request);
  });

  var result = ajax('/url');
  ok(result);
});
