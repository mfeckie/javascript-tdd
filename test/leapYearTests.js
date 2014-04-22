module('Leap years TDD')

var years = {
  1996: 'An ordinary leap year should return true',
  1997: 'An ordinary year should return false',
  1900: 'A century should return false',
  2400: 'An exceptional century should return false'
}

test('isLeapYear for a normal year', function () {
  var actual = isLeapYear(1997);
  ok(!actual, years[1997])
});

test('isLeapYear for a leap year', function () {
  var actual = isLeapYear(1996);
  ok(actual, years[1996])
});

test('isLeapYear for a century', function () {
  var actual = isLeapYear(1900);
  ok(!actual, years[1900])
});

test('isLeapYear for an exceptional century', function () {
  var actual = isLeapYear(2400);
  ok(actual, years[2400]);
});



