module('Intial test', {
  setup: function () {

  },
  teardown: function () {

  }
});

test('The OK helper', function () {
  ok(false, 'OK takes one boolean and passes if true');
});

test('The equal helper', function () {
  var month = 'April';
  equal(month, 'May', 'Equal takes two parameters, actual and expected');
});

