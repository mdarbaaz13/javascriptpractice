let userName = 'arbaaz'
console.log(userName);
console.log(userName.length);
console.log(userName.charAt(3));
console.log(userName.indexOf('b'));
console.log(userName.slice(-6,3));
let substring1= userName.substring(0,4)
console.log(substring1);
let newString ="   Arbaaz          "
console.log(newString.trim());
let url="https://www.google.com/%20html"
console.log(url.replace("%20","--"));
newest = "arbaaz-hello-world-123"
console.log(newest.split("-"));//converts it into array splits the string whereever there is -[ 'arbaaz', 'hello', 'world', '123' ]
console.log('hello my name is ${userName} and what about u ${newest}');







