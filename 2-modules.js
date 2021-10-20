const {john, peter} = module.require('./4-names.js')
const sayHi = module.require('./5-utils.js')
sayHi(john)
sayHi(peter)