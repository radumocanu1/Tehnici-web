function function1()
{
    
    const buton=document.getElementById("adoptie");
    const body=document.getElementsByTagName("body")[0];
    const container=document.getElementsByClassName("container2")[0];
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
    var minute=0;
    var clicks=1;
    minute+=new Date().getMinutes();
    minute+=new Date().getHours()*60;
    var buton2=document.getElementById("buton");
    buton2.innerHTML="Au trecut "+minute+" minute din aceasta zi";
    buton2.addEventListener("click", (event)=>
    {
        if (clicks)
        {
            clicks=0;
            var fact=document.createElement("h5");
            fact.innerHTML="Astazi, "+new Date().getDate()+"."+new Date().getHours()+"."+new Date().getFullYear()+" <br>pana la aceasta ora, s-au nascut aproximativ "+Math.floor(parseInt(minute)/6.53)+" caini.<br><br><br> Te incurajam sa adopti un caine care se potriveste personalitatii tale si sa ne ajuti sa construim un viitor mai bun pentru aceste animalute😎 <br><br> ZI FRUMOASA!";

            fact.style.marginTop="20px";
            fact.style.fontSize="larger";
            container.appendChild(fact);
        }
        else
        {
            alert("Ai apasat deja butonul ");
        }
       
        
    })
    

    

}
window.onload=function1;