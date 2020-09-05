"use strict";

var _ = require('lodash');

/**
 *  Custom matchers for protractor and jasmine 2
 *
 *    expect(el).toBePresent();
 *    expect(el).toBeDisplayed();
 *    expect(el).toContainText('text to contain');
 *    expect(el).toHaveExactText('exact text to have');
 *    expect(el).toHaveValue('exact value to have');
 *    expect(el).toBeChecked();
 *    expect(el).toBeNearLocation({ x: x coordinate, y: y coordinate }, [max distance, defaults to 2])
 *    expect(el).toHaveClass('class1 class2') - expects to have class1 and class2
 *    expect(el).not.toHaveClass('class1 class2') - expects to have neither class1 nor class2
 *
 */
var exports = module.exports;
exports.matchers = {

  toBePresent: function() {
    return {
      compare: function(element) {
        var ret = {
          pass: element.isPresent().then(function(isPresent) {
            var pass = !!isPresent;
            ret.message = "Expected" + (pass ? " NOT " : "") + " to be present";
            return pass;
          })
        };
        return ret;
      }
    };
  },

  toBeDisplayed: function() {
    return {
      compare: function(element) {
        var ret = {
          pass: element.isDisplayed().then(function(isDisplayed) {
            var pass = !!isDisplayed;
            ret.message = "Expected" + (pass ? " NOT " : "") + " to be displayed";
            return pass;
          })
        };
        return ret;
      }
    };
  },


  toContainText: function() {
    return {
      compare: function(element, expectedText) {
        var ret = {
          pass: element.getText().then(function(actualText) {
            var pass = actualText.indexOf(expectedText) >= 0;
            if (pass) {
              ret.message = "Expected NOT to contain text " + expectedText;
            } else {
              ret.message = "Expected to contain text " + expectedText + " BUT text is " + actualText;
            }
            return pass;
          })
        };
        return ret;
      }
    };
  },

  toHaveExactText: function() {
    return {
      compare: function(element, expectedText) {
        var ret = {
          pass: element.getText().then(function(actualText) {
            var pass = actualText === expectedText;
            if (pass) {
              ret.message = "Expected NOT to have text " + expectedText;
            } else {
              ret.message = "Expected to have text " + expectedText + " BUT has text " + actualText;
            }
            return pass;
          })
        };
        return ret;
      }
    };
  },

  toHaveValue: function() {
    return {
      compare: function (element, expectedValue) {
        var ret = {
          pass: element.getAttribute('value').then(function (actualValue) {
            var pass = actualValue === expectedValue;
            if (pass) {
              ret.message = "Expected NOT to have value " + expectedValue;
            } else {
              ret.message = "Expected to have value " + expectedValue + " BUT has value " + actualValue;
            }
            return pass;
          })
        };
        return ret;
      }
    };
  },

  toBeChecked: function() {
    return {
      compare: function(element) {
        var ret = {
          pass: element.getAttribute('checked').then(function(checked) {
            var pass = checked === 'true';
            ret.message = "Expected" + (pass ? " NOT " : "") + " to be checked";
            return pass;
          })
        };
        return ret;
      }
    };
  },

  toBeNearLocation: function() {
    return {
      compare: function(element, expectedLocation, maxDistance) {
        maxDistance = _.isUndefined(maxDistance) ? 2 : maxDistance;
        var ret = {
          pass: element.getLocation().then(function(actualLocation) {

            var distance = Math.sqrt(
              Math.pow(actualLocation.x - expectedLocation.x, 2) +
              Math.pow(actualLocation.y - expectedLocation.y, 2)
            );

            var pass = distance <= maxDistance;

            // { x: 1, y: 2 } => "(1, 2)"
            function coordinatesToString(obj) {
              return "(" + obj.x + ", " + obj.y + ")";
            }

            ret.message = "Expected " + (pass ? " NOT" : "") + " to be near " + coordinatesToString(expectedLocation) + " but is at " + coordinatesToString((actualLocation)) + ", " + distance + " pixels from it.";

            return pass;
          })
        };
        return ret;
      }
    };
  },

  toHaveCount: function() {
    return {
      compare: function(element, expectedCount) {
        var ret = {
          pass: element.count().then(function(actualCount) {
            var pass = actualCount === expectedCount;
            if (pass) {
              ret.message = "Expected NOT to have count " + expectedCount;
            } else {
              ret.message = "Expected to have count " + expectedCount + " BUT has count " + actualCount;
            }
            return pass;
          })
        };
        return ret;
      }
    };
  },

  // Expect an element to have all classes, or none of them in the negative case
  //    expect($(#id)).toHaveClass('class1 class2')
  //    expect($(#id)).not.toHaveClass('class1 class2')
  toHaveClass: function() {
    return {

      compare: function(element, expectedClasses) {
        var ret = {
          pass: element.getAttribute('class').then(function(actualClasses) {

            var actualClassesArr = actualClasses.split(/\s/),
              expectedClassesArr = expectedClasses.split(/\s/),
              notSatisfiedClassesArr = _.difference(expectedClassesArr, actualClassesArr);

            if (expectedClassesArr.length === 1) {
              ret.message = "Expected to have class " + expectedClassesArr[0];
            } else {
              ret.message = "Expected to have classes " + expectedClassesArr.join(', ') + " but does not have classes " + notSatisfiedClassesArr.join(', ');
            }

            return notSatisfiedClassesArr.length === 0;

          })
        };
        return ret;
      },

      negativeCompare: function(element, forbiddenClasses) {
        var ret = {
          pass: element.getAttribute('class').then(function(actualClasses) {

            var actualClassesArr = actualClasses.split(/\s/),
              forbiddenClassesArr = forbiddenClasses.split(/\s/),
              satisfiedClassesArr = _.intersection(forbiddenClassesArr, actualClassesArr);

            if (forbiddenClassesArr.length === 1) {
              ret.message = "Expected to NOT have class " + forbiddenClassesArr[0];
            } else {
              ret.message = "Expected to NOT have classes " + forbiddenClassesArr.join(', ') + " but does have classes " + satisfiedClassesArr.join(', ');
            }


            return satisfiedClassesArr.length === 0;

          })
        };
        return ret;
      }

    };
  }

};

/*beforeEach(function() {
  jasmine.addMatchers(matchers);
});*/