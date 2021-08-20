// functional programming using JS

function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (const number of numbers) {
    if (number % 2 == 0) {
      console.log(`number = ${number}`)
    }
  }
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const evenNumbers = []
  for (const number of numbers) {
    // check if the number is even
    if (number % 2 == 0) {
      // add the original number into the collection
      evenNumbers.push(number)
    }
  }

  console.log(numbers)
  console.log(evenNumbers)
}

// function2()

function function3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // using map function
  const evenNumbers = numbers.filter((number) => {
    // add the original number if the condition returns true
    // do nothing if the condition returns false
    return number % 2 == 0
  })

  console.log(numbers)
  console.log(evenNumbers)
}

// function3()

function function4() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // using map function
  const oddNumbers = numbers.filter((number) => {
    // add the original number if the condition returns true
    // do nothing if the condition returns false
    return number % 2 != 0
  })

  console.log(numbers)
  console.log(oddNumbers)
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

  // select * from cars where color = 'white'
  const new_cars = cars.filter((car) => {
    // return only model and company from the car info
    return car.color === 'white'
  })

  console.log(new_cars)
}

function5()
