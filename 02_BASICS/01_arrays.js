let numbers = [1,2,3,4,5,6,7,8]
console.log(numbers);
console.log(numbers[0]);
numbers.push(10);
numbers.push(21)
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(00);//this adds the number to the index 0 and shift all the other elements of array 
console.log(numbers);
numbers.shift();//this will remove the value added using unshift
console.log(numbers);
console.log(numbers.includes(8))
console.log(numbers.indexOf(8))
const newarr = numbers.join()//this converts the array into string 
console.log(numbers)
console.log(newarr)
console.log(typeof newarr)//string 
console.log('A' ,numbers)
const myn1= numbers.slice(1,6)//in this slice the last 6 element wont be included and it does not change the original array 
console.log('B' ,numbers)
console.log(myn1)
const myn2= numbers.splice(1,6)// this will include the element at 6 and also changes the original array and deletes the elements at indices 1-6 from og array 
// C [ 1, 8, 10 ]
// [ 2, 3, 4, 5, 6, 7 ]
console.log('C' ,numbers)
console.log(myn2)










