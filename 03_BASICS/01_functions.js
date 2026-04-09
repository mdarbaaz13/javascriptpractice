function user(){
    console.log("user logged in!");
    
}
user()
//function with parameters and arguments
function userloggedin(username){
    console.log(`${username}, logged in`);
    
} 
userloggedin("Arbaaz")
function add(number1 = 60 , number2=0){
    return number1+number2
}
const result=add(3,4)//here what is passed is important because if u pass string it will converty the number to string and concatenate add(3,"4")--> 34 and if null it will neglect add(3,null)-->3
console.log(result);
const result1=add(40,70)
console.log(result1);

//default parameters are also possible 
// ... is called rest operator and spread operator 
//in functions when u dont know the no of parameters u wanna pass u acan just writee ...in front of the parameter 
function returnparameter1(num1){
    return num1
}
console.log(returnparameter1(10))
function returnparameter1(...num1){
    return num1
}
console.log(returnparameter1(100, 400, 1000, 50000))//this returns an array of the parameters passed 
function returnparameter1(val1, val2, ...num1){
    return num1
}
console.log(returnparameter1(100,800,900,8090,7890))//here first two values will go to val1 and val2 and rest to num1 in array
const user1 = {
    username11:"hello world ",
    price:1908
}
function objectpassing(anyobject){
    console.log(`username is ${anyobject.username11} and price is ${anyobject.price}`);
    
}
objectpassing(user1)
// or u can pass the object directly 
objectpassing({
    username11:"Arbaaz",
    price:87900
})
const my=[100,200,300,400]
function arrayreturn(array1){
    return array1[1]
}
console.log(arrayreturn(my));
console.log(arrayreturn([2000,1000,2465,3567,2222]));
