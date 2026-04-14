const user={
    username:"arbaaz",
    age:23,
    welcome:function(){
        console.log(`${this.username}, has logged in `);//to refer to the current context of the  object we use this here if the username is changes further then the new changes one will reflect here 
        
    }
}
user.welcome()//arbaaz, has logged in

user.username="varun"
user.welcome()//varun, has logged in 
console.log(this);
//give an empty object {} in node and in browser it refers to window which is the largest object 
const chai =() =>{
    let username= "arbaaz"
    console.log(this);
    
}
chai()
const add = (num1,num2)=>{ return num1+num2}//arrow function
const add1 = (num1,num2)=> num1+num2;//without return word 
console.log(add1(10,20));
const add3 = (num1,num2)=>(num1+num2)//or enclose it only within the parenthesis that will act as return
console.log(add3);


 

const result = add(9,10)
console.log(result);
const add4 = (num1,num2)=>( {username:"arbaaz"})
console.log(add4(10,29));