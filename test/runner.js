if (window.location.search.indexOf("?test") !== -1) {
  document.write(
      '<div id="qunit"></div>' +
          '<div id="qunit-fixture"></div>' +
          '<div id="qunit-testing-container">' +
          '  <div id="qunit-testing"></div>' +
          '</div>' +
          '<link rel="stylesheet" href="test/stylesheets/runner.css">' +
          '<link rel="stylesheet" href="test/stylesheets/qunit.css">' +
          '<script src="test/lib/qunit.js"></script>' +
          '<script src="test/tests.js"></script>'
  )
}