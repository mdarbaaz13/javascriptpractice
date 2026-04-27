let array = [1, 2, 3, 4, 5];
for(const val of array){
    console.log(val);
}//no need to give limit or increment it does everything on its own
//for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. 
let str="ArbaazArbaaz";
for(const char of str){
    console.log(char);    
}
const map = new Map();
map.set("name","Arbaaz");
map.set("age",22);
for(const key of map){
    console.log(key);
}//[ 'name', 'Arbaaz' ]
//[ 'age', 22 ] will print ij array format because map is an iterable object and it returns key-value pairs as arrays when iterated over.
//if u want to get only keys or values from the map, you can use map.keys() or map.values() respectively.
for(const key of map.keys()){
    console.log(key);
}//name
//age
for(const value of map.values()){
    console.log(value);
}//Arbaaz
//22
//if u want both then destructure the array using [] braces
for(const [key ,value] of map){
    console.log(key,value);
}//name Arbaaz
//age 22
//objects cannot be iterated using for of loop. but can be iterated using "for in loop".
const obj={
    js:"javascript",
    py:"python",
    java:"java"
}
for(const key in obj){
    console.log(key);////print only keys py java js
    console.log(obj[key]);//this prints values of the keys   
}
//but for arrays for in gives keys and for of gives values. for objects for in gives keys and for of gives error because objects are not iterable.
const programming =['js','python','java'];
for(const key in programming){
    console.log(key);
    
}//it gives keys 0 1 2 because arrays are objects in javascript and for in loop iterates over the keys of the object.
for(const key in programming){
    console.log(programming[key]);
}//this gives the values of the array js python java because we are accessing the values using the keys.