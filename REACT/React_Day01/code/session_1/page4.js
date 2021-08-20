// advanced functions

let num1 = 100
let num2 = num1

// console.log(`num1 = ${num1}, ${typeof num1}`)
// console.log(`num2 = ${num2}, ${typeof num2}`)

num1 = 200

// console.log(`num1 = ${num1}, ${typeof num1}`)
// console.log(`num2 = ${num2}, ${typeof num2}`)

// function definition
function function1() {
  console.log(`inside function1`)
}

// function1()

// function alias
const myFunction1 = function1
// console.log(`function1 = ${function1} type = ${typeof function1}`)
// console.log(`myFunction = ${myFunction1} type = ${typeof myFunction1}`)

// console.log('using original function')
// function1()
// console.log('using alias')
// myFunction1()

// anonymous/unnamed function
const myFunction2 = function () {
  console.log('inside function2')
}

// myFunction2()
// console.log(`myFunction2 = ${myFunction2} type = ${typeof myFunction2}`)

// arrow function
// fat arrow function
// lambga function
const myFunction3 = () => {
  console.log('inside function3')
}

const square = (number) => {
  console.log(`square of ${number} = ${number ** 2}`)
}

square(10)
