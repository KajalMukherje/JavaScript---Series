const accountId = 144553
let accountEmail = "kajalmukherjee812@gmail.com"
var accountPassword = "12345"
accountCity = "Bankura"
let accountState;

// accountId = 2 // not allowed


accountEmail = "km.k@gmail.com"
accountPassword = "21212121"
accountCity = "Bishnupur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])