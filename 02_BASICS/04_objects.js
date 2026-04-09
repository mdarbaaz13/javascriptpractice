//objects and arrays can be destructured 
const course = {
    coursename:"javascript",
    price :"9999",
    courseinstructor :"arbaaz"
}
console.log(course.courseinstructor);
//objects destructuring intead of using . operator again and again to acces objects keys we can directly access them by putting in curly braces {}
const {coursename}=course
console.log(coursename);//see u accessed the object value without . operator similarly u can also rename the keys if they are very long or u wanna change 
const {courseinstructor: teacher}=course
console.log(teacher);//noe u can access courseinstructor with variable teacher 
const {courseinstructor,price}=course
console.log(coursename);
console.log(courseinstructor);
console.log(price);


// when u only write open and closed curly brace without name and datatype its JSON {} in this also we have key value pair kindoff but keys are also strings enclosed in "" and valused as well.
// Api's return either array(array of objects ) or JSON for information 