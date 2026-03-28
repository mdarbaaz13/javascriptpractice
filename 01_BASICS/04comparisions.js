console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2<=1);

console.log(null>0);
console.log(null<0);
console.log(null==0);//false
console.log(null>=0);//true

// == works differently and comaparisions work differently <,>,<= these convert null to a 0 before comparing.....
console.log(undefined>2);//false
console.log(undefined>=2);//false
console.log("2">1);//true because it converts 2 to number
console.log("2"== 2);true
// === strict comparision which checks the datatype the == converts it and checks but === does not convert it checks the datatypes as well 
console.log("2"===1); //false







