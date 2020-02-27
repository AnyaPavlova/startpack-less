"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('tupo test');

var Test = /*#__PURE__*/function () {
  function Test(options) {
    _classCallCheck(this, Test);

    this.text = options.text;
    this.alert = options.alert;
  }

  _createClass(Test, [{
    key: "printMessage",
    value: function printMessage() {
      console.log(this.text);
      console.log(this.alert);
    }
  }]);

  return Test;
}();

var testOne = new Test({
  text: 'Тест 1',
  alert: 'аааааааааа!'
});
testOne.printMessage();
var testTwo = new Test({
  text: 'Тест - II',
  alert: 'ээээ!?'
});
testTwo.printMessage();
var arrayForConcat = [2, 54, 2];
console.log(['test', 'spread'].concat(arrayForConcat));
var listNodeArray = Array.prototype.slice.call(document.querySelectorAll('li'));
console.log(listNodeArray);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = listNodeArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    console.log(item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

listNodeArray.forEach(function (item) {
  console.log(item);
});
$('li').on('click', function () {
  console.log('jQ test');
});