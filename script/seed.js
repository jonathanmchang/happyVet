const db = require('../server/db')
const { User, Vet } = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')


  const users = await Promise.all([
    User.create({email: 'test@test.com', password: '123'}),
    User.create({email: 'test2@test.com', password: '123'})
  ])

  const organisms = await Promise.all([
    Vet.create({
      name: 'Vet 1',
      email: 'vet@vet.com',
      description: "I've been a vet for 10+ years"
    }),
    Vet.create({
      name: 'Dog Vet',
      email: 'dogvet@vet.com',
      description: "I've been treating dogs forever"
    }),
    Vet.create({
      name: 'Cat Vet',
      email: 'cat@vet.com',
      description: 'I just finished vet school'
    }),
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
