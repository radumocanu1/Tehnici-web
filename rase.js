function function1()
{
    const buton=document.getElementById("adoptie");
    const colors=["aqua","aquamarine","blue","black","brown","chartreuse","coral","darkblue","darkorange","deeppink","greenyellow","orangered","yellow"];
    if (localStorage.getItem("culoare"))
        {
            buton.style.backgroundColor=localStorage.getItem("culoare");
        }
    var c=setInterval(()=>{
        var index=Math.floor(Math.random()*colors.length);
        buton.style.backgroundColor=colors[index];
        localStorage.setItem("culoare",colors[index]);
    },2000)

}
window.onload=function1;