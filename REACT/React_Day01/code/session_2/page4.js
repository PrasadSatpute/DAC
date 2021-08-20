// spread operator
function function1(person) {
  const query = `insert into person (name, email, age, phone) 
    values (
      '${person.name}', 
      '${person.email}', 
      '${person.age}', 
      '${person.phone}')`

  console.log(query)
}

// function1({
//   name: 'person',
//   email: 'person1@test.com',
//   age: 30,
//   phone: '+912343445',
// })

function function2(person) {
  // extract the properties of person into variables
  // const name = person.name
  // const email = person.email
  // const age = person.age
  // const phone = person.phone
  const { name, email, age, phone } = person

  const query = `insert into person (name, email, age, phone) 
    values ('${name}', '${email}', '${age}', '${phone}')`
  console.log(query)
}

// function2({
//   name: 'person',
//   email: 'person1@test.com',
//   age: 30,
//   phone: '+912343445',
// })

function function3() {
  const person1 = {
    name: 'person1',
    email: 'person1@test.com',
    age: 30,
    phone: '+912343445',
  }

  // ceating another reference
  // shalow copy
  const person2 = person1

  person1.name = 'person1 person1'

  console.log(`person1's name = ${person1.name}`)
  console.log(`person2's name = ${person2.name}`)
}

// function3()

function function4() {
  const person1 = {
    name: 'person1',
    email: 'person1@test.com',
    age: 30,
    phone: '+912343445',
  }

  // rest operator
  // creates a new object
  // const person2 = {}
  // person2.name = person1.name
  // person2.email = person1.email
  // person2.age = person1.age
  // person2.phone = person1.phone
  // deep copy
  const person2 = { ...person1 }
  console.log(person2)

  person1.name = 'person1 person1'

  console.log(`person1's name = ${person1.name}`)
  console.log(`person2's name = ${person2.name}`)
}

function4()
