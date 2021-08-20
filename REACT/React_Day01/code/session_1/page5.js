function add(p1, p2) {
  console.log(`${p1} + ${p2} = ${p1 + p2}`)
}

function subtract(p1, p2) {
  console.log(`${p1} - ${p2} = ${p1 - p2}`)
}

// function alias
const mySubtract = subtract

// anonymous function
const multiply = function (p1, p2) {
  console.log(`multiplication = ${p1 * p2}`)
}

function execute(func) {
  // function alias
  // const func = add
  // const func = function (p1, p2) {
  //   console.log(`division = ${p1 / p2}`)
  // }
  console.log(`func = ${func}, type = ${typeof func}`)
  func(10, 20)
  func(20, 30)
  func(30, 40)
  func(40, 50)
}

// pass an address/reference of add function
execute(add)
execute(mySubtract)
execute(multiply)

// anonymous function
// function as argument
// execute(function (p1, p2) {
//   console.log(`division = ${p1 / p2}`)
// })

// arrow function
execute((p1, p2) => {
  console.log(`division = ${p1 / p2}`)
})
