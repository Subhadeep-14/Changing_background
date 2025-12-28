let col=["yellow","red","blue","cyan","green","pink","green","Grey","Brown","Violet"];
let but=document.getElementById("btn");
but.addEventListener("click",function(){
    document.body.style.backgroundColor=col[Math.floor(Math.random() * col.length)];
})