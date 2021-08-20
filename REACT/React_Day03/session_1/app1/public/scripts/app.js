"use strict";

// the props (properties) are read only
// the state is read-writable

var Counter = function Counter() {
  var counterValue = 0;

  var onAdd = function onAdd() {
    // alert('on add')
    counterValue += 1;
    console.log("counterValue = " + counterValue);
  };

  var onSubtract = function onSubtract() {
    // alert('on subtract')
    counterValue -= 1;
    console.log("counterValue = " + counterValue);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Counter"
    ),
    React.createElement(
      "button",
      { onClick: onSubtract, className: "btn btn-success" },
      "-"
    ),
    React.createElement(
      "span",
      { className: "counter-value" },
      counterValue
    ),
    React.createElement(
      "button",
      { onClick: onAdd, className: "btn btn-warning" },
      "+"
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
