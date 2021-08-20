// functional programming using JS

function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // iteration will be done manually
  for (const number of numbers) {
    console.log(`number = ${number} and square = ${number ** 2}`)
  }
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // used to collect square of every number
  const squares = []
  for (const number of numbers) {
    const square = number ** 2

    // add a new value (square of original number) in the array
    squares.push(square)
  }

  console.log(numbers)
  console.log(squares)
}

// function2()

function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // using map function
  const squares = numbers.map((value) => {
    return value ** 2
  })

  console.log(numbers)
  console.log(squares)
}

// function3()

function function4() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // const cubes = []
  // for (const number of numbers) {
  //   cubes.push(number ** 3)
  // }

  const cubes = numbers.map((value) => {
    return value ** 3
  })

  console.log(numbers)
  console.log(cubes)
}

// function4()

function function5() {
  const cars = [
    { model: 'i20', price: 7.5, company: 'hyundai', color: 'gray' },
    { model: 'i10', price: 5.5, company: 'hyundai', color: 'white' },
    { model: 'nano', price: 2.5, company: 'tata', color: 'yellow' },
    { model: 'creta', price: 11, company: 'hyundai', color: 'white' },
    { model: 'fabia', price: 6, company: 'skoda', color: 'red' },
  ]

  // select model, company from cars
  const new_cars = cars.map((car) => {
    // return only model and company from the car info
    return { model: car.model, comapny: car.company }
  })

  console.log(new_cars)
}

function5()
