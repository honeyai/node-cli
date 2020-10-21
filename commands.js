const program = require('commander');
const {
  addLogin,
  findLogin
} = require('./index');

program
  .version(`1.0.0`)

program  
  .command('add <Login> <Name> <Password>')
  .alias('a')
  .description('Adding a login')
  .action((login, name, password) => {
    addLogin({login, name, password});
  })

program
  .command('find <user>')
  .alias('f')
  .description('Find a user')
  .action(name => findLogin(name));

program.parse(process.argv);