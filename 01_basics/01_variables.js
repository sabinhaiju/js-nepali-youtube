const accountId = 12345
let accountName = "Sabin"
var accountEmail = "s@sh.com"
accountCity = "Kathmandu" /* not recommended */
let accountState;

// accountId = 2345 // not allowed        
accountName="babin"
accountEmail="b@bs.com"
accountCity="Bhaktapur"




/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountName, accountEmail, accountCity,accountState])