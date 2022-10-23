         
var counter = localStorage.getItem("counter");      
document.getElementById("events").addEventListener("click",()=>{   
            var i=0;
            var div = document.getElementById("Block-1");
            div.innerHTML = "";
            var counter = localStorage.getItem("counter");
            for(i=1;i<=counter;i++){
                console.log(i + "   " + localStorage.getItem("div"+i));
                div.innerHTML += localStorage.getItem("div"+i);
                            
            }
            var divs = document.getElementById("Block-1").querySelectorAll("#ev");
            for(i=0;i<divs.length;i++){
                console.log("i="+i+"          from divs.length="+divs.length+"    divs[i]:"+divs[i]);
                const j = i;
                divs[j].addEventListener("mouseover",()=>{
                    console.log(j + "     "+"btn")
                    document.getElementById("btn").style.display = "inline";
                    var select = document.getElementById("Block-1").querySelectorAll("#btn");
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
        document.getElementById("Block-1").innerHTML += str;
        
        localStorage.setItem("counter",counter);
        var strname = "div"+counter;
        localStorage.setItem(strname,str);  
    }
});