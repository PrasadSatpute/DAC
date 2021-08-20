"use strict";

function onIncrement() {
  // alert('increment')
  counter += 1;

  // refresh the component
  renderMyComponent();
}

function onDecrement() {
  // alert('decrement')
  counter -= 1;

  // refresh the component
  renderMyComponent();
}

var counter = 0;

// function which will render the component
var renderMyComponent = function renderMyComponent() {
  var template = React.createElement(
    "div",
    { className: "counter-container" },
    React.createElement(
      "button",
      { onClick: onDecrement, className: "btn btn-minus" },
      "-"
    ),
    React.createElement(
      "div",
      { className: "counter" },
      counter
    ),
    React.createElement(
      "button",
      { onClick: onIncrement, className: "btn btn-plus" },
      "+"
    )
  );

  var root = document.getElementById('app');
  ReactDOM.render(template, root);
};

// render when the page is loaded
renderMyComponent();
