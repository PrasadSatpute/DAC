function function1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // square of even numbers
  const evenNumbers = numbers.filter((number) => number % 2 == 0)
  const squares = evenNumbers.map((number) => number ** 2)

  console.log(numbers)
  console.log(evenNumbers)
  console.log(squares)
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // square of even numbers
  const squares = numbers
    .filter((number) => number % 2 == 0)
    .map((number) => number ** 2)

  console.log(numbers)
  console.log(squares)
}

// function2()

function function3() {
  const cars = [
    { model: 'i20', price: 7.5, company: 'hyundai', color: 'gray' },
    { model: 'i10', price: 5.5, company: 'hyundai', color: 'white' },
    { model: 'nano', price: 2.5, company: 'tata', color: 'yellow' },
    { model: 'creta', price: 11, company: 'hyundai', color: 'white' },
    { model: 'fabia', price: 6, company: 'skoda', color: 'red' },
  ]

  // select model, company from cars where color = 'white' order by price DESC
  const new_cars = cars
    .filter((car) => car.color == 'white')
    .map((car) => {
      return { model: car.model, company: car.company, price: car.price }
    })
    .sort((car1, car2) => {
      return car2.price - car1.price
    })

  console.log(new_cars)
}

function3()
