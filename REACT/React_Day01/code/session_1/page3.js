// functions
// - reusable entity

// parameterless function definition
function function1() {
  console.log('inside function1')
}

// function call
// function1()

// paramterized function
function function2(p1, p2, p3) {
  console.log(`inside function2`)
  console.log(`p1 = ${p1}, type = ${typeof p1}`)
  console.log(`p2 = ${p2}, type = ${typeof p2}`)
  console.log(`p3 = ${p3}, type = ${typeof p3}`)
}

// less number of parameters
// function2(10, 20)

// exact number of parameters
// function2(10, 20, 30)

// more number of parameters
// function2(10, 20, 30, 40, 50)

function printInfo(person) {
  console.log(`name = ${person.name}`)
  console.log(`address = ${person.address}`)
  console.log(`phone = ${person.phone}`)
}

// printInfo({
//   name: 'person1',
//   address: 'pune',
//   phone: '+912332444',
// })

// non-returning function
// every function by default returns undefined
function add1(p1, p2) {
  const addition = p1 + p2
  console.log(`${p1} + ${p2} = ${addition}`)
}

// add1(10, 20)
console.log(`10 + 20 = ${add1(10, 20)}`)

// returning number value
function add2(p1, p2) {
  return p1 + p2
}

// console.log(`10 + 20 = ${add2(10, 20)}`)
