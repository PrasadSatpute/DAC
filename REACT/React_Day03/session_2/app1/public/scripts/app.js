"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

// props: RO
// state: RW
// - once it gets modified, the component gets rendered again
// react hook

// functional component
var Counter = function Counter() {
  // count: variable which will maintain the state
  // setCount: the function used to modify the count's state
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var onAdd = function onAdd() {
    // to update the state with new value
    setCount(count + 1);

    console.log("in add count = " + count);
  };

  var onSubtract = function onSubtract() {
    // to update the state with new value
    setCount(count - 1);

    console.log("in subtract count = " + count);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "span",
      { className: "counter" },
      count
    ),
    React.createElement(
      "button",
      { onClick: onAdd, className: "btn btn-success" },
      "+"
    ),
    React.createElement(
      "button",
      { onClick: onSubtract, className: "btn btn-warning" },
      "-"
    )
  );
};

var template = React.createElement(
  "div",
  null,
  React.createElement(Counter, null)
);

var root = document.getElementById('app');
ReactDOM.render(template, root);
