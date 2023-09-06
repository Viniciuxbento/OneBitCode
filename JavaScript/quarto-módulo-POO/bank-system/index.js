const App = require("./App")

App.createUser("joao@email.com", "joao Pontes")
App.createUser("fernando@email.com", "fernando Queiroga")
App.createUser("vinicius@email.com", "vinicius Conde")

App.deposit("joao@email.com", 100)

App.transfer("joao@email.com", "fernando@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("vinicius@email.com", 2000, 24)

console.log(App.findUser("joao@email.com"))
console.log(App.findUser("joao@email.com").account)
console.log(App.findUser("fernando@email.com"))
console.log(App.findUser("fernando@email.com").account)
console.log(App.findUser("vinicius@email.com"))
console.log(App.findUser("vinicius@email.com").account)
console.log(App.findUser("vinicius@email.com").account.loans[0].installments)