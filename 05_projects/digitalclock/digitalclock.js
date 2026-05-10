const clock=document.getElementById('clock');
//let date=new Date;
//console.log(date.toLocaleTimeString())//this is displaying in console but i want this to be displayed on the webpage and chage every second so to do thid we use event setinterval it takes two parametres setInterval(function(){},time after repeat)
setInterval(function(){
    let date=new Date;
    clock.innerHTML=date.toLocaleTimeString();
})