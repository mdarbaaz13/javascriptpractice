const array=['js','python','java','c++ ','c'];
array.forEach(function(val){
    console.log(val);
    
});//for each loop is used to iterate over arrays and it takes a callback function as an argument. the callback function is executed for each element in the array. it does not return anything and it cannot be broken using break or continue statements. it is used when we want to perform some operation on each element of the array. it is not used when we want to create a new array based on the existing array. for that we can use map, filter, reduce etc.callback funcn doesnt have a name 
array.forEach((val)=>{
    console.log(val);
})//arrow funcn as there is no name in callback function so we dont write it as name =()=>{} instead we directly write (val)=>{}.
//u can also pass the reference of already defined function to foreach 
function printme(item){
    console.log(item);
    
}
array.forEach(printme);// we are passing the reference of the function printme to the forEach method. when forEach method calls the printme function, it will pass the current element of the array as an argument to the printme function. and the printme function will print that element.
//suppose nwe have an array of objects 
const language=[{
    langname:'javascript',
    langdisplay:'js'
},
{
    langname:'python',
    langdisplay:'py'
},
{
    langname:'c++',
    langdisplay:'cpp'
}]
//js
//javascript
//py
//forEach does not return any value so if u want the callback function to return a value then we use filter() even this takes callback function as an argument but it returns a new array based on the condition specified in the callback function. for example if we want to get all the languages whose name starts with 'j' then we can use filter() method like this:  
const filteredLanguages=language.filter(function(lang){
    return lang.langname.startsWith('j');
});
console.log(filteredLanguages);// this will return an array of objects whose langname starts with 'j'. in this case it will return [{langname:'javascript',langdisplay:'js'}] because only javascript starts with 'j'.  
const nums=[1,2,3,4,5,6,7,8,9];
const ans=nums.filter((item)=> item>4);
console.log(ans);//[ 5, 6, 7, 8, 9 ] returns array of numbers greater than 4. filter method is used to filter the elements of an array based on a condition specified in the callback function. it returns a new array containing only the elements that satisfy the condition. in this case, it returns an array of numbers greater than 4.
const newnums=[];
nums.forEach((item)=>{
    if(item>4){
        newnums.push(item);
    }
});
console.log(newnums);//[ 5, 6, 7, 8, 9 ] this is the same result as filter method but we have to write more code to achieve the same result. forEach method is used to iterate over an array and perform some operation on each element of the array. in this case, we are checking if the item is greater than 4 and if it is, we are pushing it to the newnums array.
nums.map((item)=> item*2)
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18 ] this will return a new array with each element multiplied by 2. it is similar to filter .
//u can also do chaining ie club two three map and filter together like this:
nums.filter((item)=> item>4).map((item)=> item*2).map((item)=> item+1); 
//[ 10, 12, 14, 16, 18 ] this will first filter the numbers greater than 4 and then multiply each of those numbers by 2. this is the power of chaining methods in javascript. it allows us to perform multiple operations on an array in a single line of code.