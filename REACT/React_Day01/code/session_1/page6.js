// array
// - collection of similar or dissimilar values

function function1() {
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  const countries = ['india', 'sri lanka', 'usa', 'uk']
  console.log(countries)
}

// function1()

function function2() {
  const numbers = [10, 20, 30, 40, 50]

  // traditional for loop
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index]
    console.log(`number = ${number}`)
  }
}

// function2()

function function3() {
  const numbers = [10, 20, 30, 40, 50]

  // for..of loop
  for (const number of numbers) {
    console.log(`number = ${number}`)
  }
}

// function3()

function function4() {
  const numbers = [10, 20, 30, 40, 50]

  // for..in loop
  for (const index in numbers) {
    console.log(`index = ${index}, value = ${numbers[index]}`)
    if (index > 2) {
      break
    }
  }
}

// function4()

function function5() {
  const numbers = [10, 20, 30, 40, 50]

  // for..each loop
  numbers.forEach((value) => {
    console.log(`value = ${value}`)
  })
}

function5()
