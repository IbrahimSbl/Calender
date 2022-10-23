
var counter = localStorage.getItem("counter");
document.getElementById("events").addEventListener("click",()=>{
    if(document.getElementById("Block-1").style.display == "none" &&
    document.getElementById("Block-1-2").style.display == "none"){
        if(window.innerWidth < 1340){
            var i=0;
            var div = document.getElementById("Block-1-2").querySelector("div");
            div.innerHTML = "";
            var counter = localStorage.getItem("counter");
            for(i=1;i<=counter;i++){
                console.log(i + "   " + localStorage.getItem("div"+i));
                div.innerHTML += localStorage.getItem("div"+i);
                
                divs = document.getElementById("Block-1-2").querySelectorAll("#ev");
                divs[i-1].style.backgroundColor ="#dc4344";
                divs[i-1].style.borderRaduis =  "10px";
                divs[i-1].style.display= "flex";
                divs[i-1].style.justifyContent= "space-between";
                divs[i-1].style.fontSize= "1.2em";
                divs[i-1].style.padding = "3px 10px 3px 10px";
                divs[i-1].style.margin= "20px";
                divs[i-1].style.width = "350px";
                               
            }
            
            var divs = document.getElementById("Block-1-2").querySelectorAll("#ev");
            document.getElementById("Block-1-2").style.display = "flex";
            document.getElementById("Block-1-2").style.justifyContent = "center";
            for(i=0;i<divs.length;i++){
                console.log("i="+i+"          from divs.length="+divs.length+"    divs[i]:"+divs[i]);
                const j = i;
                divs[j].addEventListener("mouseover",()=>{
                    console.log(j + "     "+"btn")
                    document.getElementById("btn").style.display = "inline";
                    var select = document.getElementById("Block-1-2").querySelectorAll("#btn");
                    select[j].addEventListener("click",()=>{
                    var next;
                    var z =j+1;
                    for(;z<divs.length;z++){
                        next = localStorage.getItem("div"+(z+1));
                        localStorage.setItem("div"+z,next);
                    }
                    var c=  localStorage.getItem("counter")-1;
                    localStorage.setItem("counter",c);
                    location.reload();
                    document.getElementById("events").click();
                }); 
                }); 
                
                divs[j].addEventListener("mouseout",()=>{
                    console.log(j + "     "+"btn")
                    document.getElementById("btn").style.display = "none";
                }); 
                
            }
        }else{
            
            document.getElementById("Block-1").style.display = "flex";
            document.getElementById("Block-1").style.flexDirection = "column";
        }
        document.getElementById("events").style.backgroundColor = "#dc4344";
    }else{
        
        document.getElementById("Block-1-2").style.display = "none";
        document.getElementById("Block-1").style.display = "none";
        document.getElementById("events").style.backgroundColor = "rgb(46, 49, 51)";
    }
});

//to add an event
document.getElementById("addEvent").addEventListener("click",()=>{
    var event = prompt("Event:");
    var btime = prompt("From:");
    var etime = prompt("till:");
    if(event != null && btime != null && etime != null){
        counter ++;
        var str = '<div id="ev"><p class="event-name">'+event+'</p><p class="duration">'+btime+' till '+etime+'</p><button id="btn" style="display:none;"><img src = "./pics/delete.png"></img></button></div>'
        alert(str);
        document.getElementById("Block-1-2").querySelector("div").innerHTML += str;
        
        localStorage.setItem("counter",counter);
        var strname = "div"+counter;
        localStorage.setItem(strname,str);  
    }
});


