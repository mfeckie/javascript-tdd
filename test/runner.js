if (window.location.search.indexOf("?test") !== -1) {
  document.write(
      '<div id="qunit"></div>' +
          '<div id="qunit-fixture"></div>' +
          '<link rel="stylesheet" href="test/stylesheets/qunit.css">' +
          '<script src="test/lib/qunit.js"></script>' +
          '<script src="test/initialTests.js"></script>' +
          '<script src="test/leapYearTests.js"></script>'

  )
}