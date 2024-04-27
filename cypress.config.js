const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',

    setupNodeEvents(on, config) {
      on('task', {
        newUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          
          return {
            username: faker.person.firstName() + `${randomNumber}`,
            password: faker.lorem.word() + `${randomNumber}`
          };
        }
      })
    }
  }
});
