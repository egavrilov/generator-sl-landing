'use strict';

var files = require('../app/src/files');
var data = require('../app/files.json');
var _ = require('lodash');
require('chai').should();

describe('gulp-angular generator files', function () {

  it('loads files.json', function () {

    var actualMkdir = 0;
    var actualCopy = 0;
    var actualTemplate = 0;

    files.call({
      _: _,
      optionalFiles: ['router', 'foundation-sass', {
        copies: {'app/partials/__foundation.html': 'app/partials/main.html'}
      }],
      mkdir: function() { actualMkdir++; },
      copy: function() { actualCopy++; },
      template: function() { actualTemplate++; }
    });

    var expectedMkdir =
      data.directories.length +
      data.router.directories.length;

    var expectedCopy =
      1 + //fixed : router partial
      data.copies.length +
      data.dots.length +
      _.keys(data['foundation-sass'].copies).length;

    var expectedTemplate =
      1 + //fixed : <appname>.js
      data.templates.length;

    actualMkdir.should.be.equal(expectedMkdir);
    actualCopy.should.be.equal(expectedCopy);
    actualTemplate.should.be.equal(expectedTemplate);
  });

});
