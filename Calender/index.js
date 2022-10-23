class calender{

    constructor(){
        this.date = new Date();
        this.prev_Month=0;
        this.next_Month=0;
        let bool=0;
        var divs = [
                        document.getElementById("m1"),document.getElementById("t1"),document.getElementById("w1"),document.getElementById("h1"),document.getElementById("f1"),document.getElementById("s1"),document.getElementById("u1"),
                        document.getElementById("m2"),document.getElementById("t2"),document.getElementById("w2"),document.getElementById("h2"),document.getElementById("f2"),document.getElementById("s2"),document.getElementById("u2"),
                        document.getElementById("m3"),document.getElementById("t3"),document.getElementById("w3"),document.getElementById("h3"),document.getElementById("f3"),document.getElementById("s3"),document.getElementById("u3"),
                        document.getElementById("m4"),document.getElementById("t4"),document.getElementById("w4"),document.getElementById("h4"),document.getElementById("f4"),document.getElementById("s4"),document.getElementById("u4"),
                        document.getElementById("m5"),document.getElementById("t5"),document.getElementById("w5"),document.getElementById("h5"),document.getElementById("f5"),document.getElementById("s5"),document.getElementById("u5"),
                        document.getElementById("m6"),document.getElementById("t6"),document.getElementById("w6"),document.getElementById("h6"),document.getElementById("f6"),document.getElementById("s6"),document.getElementById("u6")
        ];
        const newDate = this.date.getDate();
        this.putCaption(this.date.getDate(),this.date.getDay(),this.date.getMonth(),this.date.getFullYear(),1);
        
        
        

        //to know the index of the day :
        //(day + (week - 1)*7)-1
        //  day is noted by date.getDay()
        //  week  (date.getDate()%7)
        //  decrease 1 from week and from the total since to start counting from (0 -> ...)
        var i;
        var res = this.date.getDate();
        this.date.setDate(1);
        if((this.date.getDate()%7)==0){
            i = (this.date.getDay() + (((this.date.getDate()/7)-1)*7))-1;
        }else if(this.date.getDay()==0 && (this.date.getDate()%7)==1){//if we are in sunday and sunday will be at 1
            i=6;
        }else{
            i = (this.date.getDay() + (((this.date.getDate()%7)-1)*7))-1;
        }
        //to remove the previous custom color

        var index = localStorage.getItem("index");
        if(index > 0){
            divs[index].style.backgroundColor = "rgb(46, 49, 51)";
        }
        
        //to let the day we are in in a custom color
        localStorage.setItem("index",i+res-1);
        index = localStorage.getItem("index");
        divs[index].style.backgroundColor = "#dc4344";        
                
        res = i;

        divs[i].innerText=this.date.getDate();


        //to save from where we start coloring
        
        localStorage.setItem("begin",i);
        
        for(--i;i>=0;--i){
            
            this.date.setDate(this.date.getDate()-1);
            divs[i].innerText=this.date.getDate();
            divs[i].style.backgroundColor = "#fff";
            divs[i].style.color = "#bdbdbd";
        }
        this.date = new Date();
        this.date.setDate(1);
        for(i = res+1;i<42;++i){
            this.date.setDate(this.date.getDate()+1);
            divs[i].innerText=this.date.getDate();            
            if(this.date.getDate() == 1){
                bool = 1;
                localStorage.setItem("end",i);
            }
            if(bool == 1){
                
            divs[i].style.backgroundColor = "#fff";
            divs[i].style.color = "#bdbdbd";
            }


        
        }
        //onClick events
        document.getElementById("previous").addEventListener("click",()=>{
            this.prev_Month++;
            //this.next_Month--;        
            this.previousPage(this.prev_Month,this.next_Month);
        });
        document.getElementById("next").addEventListener("click",()=>{
            //this.prev_Month++;
            this.next_Month++;        
            this.nextPage(this.prev_Month,this.next_Month);
        });
        document.getElementById("home").addEventListener("click",()=>{
            location.reload();
        });
        document.getElementById("search").addEventListener("click",()=>{
            this.search()
        });
        /*
        document.getElementById("events").addEventListener("click",);
        document.getElementById("addEvent").addEventListener("click",);*/
    }
    previousPage(prev_Month,next_Month){
        console.log("Entering prev");
        console.log(this.prev_Month);
        console.log(this.next_Month);
        this.date = new Date();
        this.divs = [
                        document.getElementById("m1"),document.getElementById("t1"),document.getElementById("w1"),document.getElementById("h1"),document.getElementById("f1"),document.getElementById("s1"),document.getElementById("u1"),
                        document.getElementById("m2"),document.getElementById("t2"),document.getElementById("w2"),document.getElementById("h2"),document.getElementById("f2"),document.getElementById("s2"),document.getElementById("u2"),
                        document.getElementById("m3"),document.getElementById("t3"),document.getElementById("w3"),document.getElementById("h3"),document.getElementById("f3"),document.getElementById("s3"),document.getElementById("u3"),
                        document.getElementById("m4"),document.getElementById("t4"),document.getElementById("w4"),document.getElementById("h4"),document.getElementById("f4"),document.getElementById("s4"),document.getElementById("u4"),
                        document.getElementById("m5"),document.getElementById("t5"),document.getElementById("w5"),document.getElementById("h5"),document.getElementById("f5"),document.getElementById("s5"),document.getElementById("u5"),
                        document.getElementById("m6"),document.getElementById("t6"),document.getElementById("w6"),document.getElementById("h6"),document.getElementById("f6"),document.getElementById("s6"),document.getElementById("u6")
        ];
        var i = 0;
        let j =0;
        let counter=0;//for looping to the exact month we are in
        let bool =0;//boolean to color the outside date
        //to remove the previous colors
        var begin = localStorage.getItem("begin");
        var end = localStorage.getItem("end");
        for(;begin>0;begin--){
            
            this.divs[begin].style.backgroundColor = "rgb(46, 49, 51)";
            this.divs[begin].style.color = "#fff";
        }
        for(;end<41;end++){
            
            this.divs[end].style.backgroundColor = "rgb(46, 49, 51)";
            this.divs[end].style.color = "#fff";
        }        
        if(this.next_Month > 0){//if we go to next month
            for(counter =0;counter< this.next_Month;counter++){
                this.date.setMonth(this.date.getMonth()+1);//incrementing a month
            }
        }
        //what if we were in the previous month
        if(this.prev_Month > 0){//if we go to next month
            for(counter =0;counter< this.prev_Month-1;counter++){
                this.date.setMonth(this.date.getMonth()-1);//incrementing a month
            }
        }        
        //now we are in the exact  date

        
        this.date.setMonth(this.date.getMonth()-1);//decrementing a month 
        j = this.date.getDate();
        
        this.putCaption(this.date.getDate(),this.date.getDay(),this.date.getMonth(),this.date.getFullYear(),0);
        this.date.setDate(1);
        if((this.date.getDate()%7)==0){
            i = (this.date.getDay() + (((this.date.getDate()/7)-1)*7))-1;
        }else if(this.date.getDay()==0 && (this.date.getDate()%7)==1){//if we are in sunday and sunday will be at 1
            i=6;
        }else{
            i = (this.date.getDay() + (((this.date.getDate()%7)-1)*7))-1;
        }
        //to remove the previous custom color

        var index = localStorage.getItem("index");
        this.divs[index].style.backgroundColor = "rgb(46, 49, 51)";
        //to let the day we are in in a custom color
        localStorage.setItem("index",i+j-1);
        index = localStorage.getItem("index");
        this.divs[index].style.backgroundColor = "#dc4344"; 

        j =i;//store i in j
        this.divs[i].innerText = this.date.getDate();
        //set beginning
        localStorage.setItem("begin",i);
        for(--i;i>=0;--i){
            
            this.date.setDate(this.date.getDate()-1);
            this.divs[i].innerText=this.date.getDate();
            this.divs[i].style.backgroundColor = "#fff";
            this.divs[i].style.color = "#bdbdbd";
            
        }
        //reset the date to loop over the rest of the divs
        this.date = new Date();
        this.date.setDate(1);
        if(this.next_Month > 0){
            for(counter =0;counter< this.next_Month;counter++){
                this.date.setMonth(this.date.getMonth()+1);//incrementing a month
            }
        }
        if(this.prev_Month > 0){//if we go to next month
            for(counter =0;counter< this.prev_Month-1;counter++){
                this.date.setMonth(this.date.getMonth()-1);//incrementing a month
            }
        } 
        //we are in the exact date   
        this.date.setMonth(this.date.getMonth()-1);//decrementing a month 
        
        for(i = j+1;i<42;++i){
            
            this.date.setDate(this.date.getDate()+1);//going to the index 42 with adding  day at each loop
            this.divs[i].innerText=this.date.getDate();
            if(this.date.getDate() == 1){
                bool = 1;
                localStorage.setItem("end",i);
            }
            if(bool == 1){
                
            this.divs[i].style.backgroundColor = "#fff";
            this.divs[i].style.color = "#bdbdbd";
            }
        }

        if(this.next_Month > 0){//if we were in the next month
            this.next_Month--;  //remove the cancelled month
            this.prev_Month--;  //remove the added backward position
        } 
    }

    nextPage(prev_Month,next_Month){
        this.date = new Date();
        this.divs = [
                        document.getElementById("m1"),document.getElementById("t1"),document.getElementById("w1"),document.getElementById("h1"),document.getElementById("f1"),document.getElementById("s1"),document.getElementById("u1"),
                        document.getElementById("m2"),document.getElementById("t2"),document.getElementById("w2"),document.getElementById("h2"),document.getElementById("f2"),document.getElementById("s2"),document.getElementById("u2"),
                        document.getElementById("m3"),document.getElementById("t3"),document.getElementById("w3"),document.getElementById("h3"),document.getElementById("f3"),document.getElementById("s3"),document.getElementById("u3"),
                        document.getElementById("m4"),document.getElementById("t4"),document.getElementById("w4"),document.getElementById("h4"),document.getElementById("f4"),document.getElementById("s4"),document.getElementById("u4"),
                        document.getElementById("m5"),document.getElementById("t5"),document.getElementById("w5"),document.getElementById("h5"),document.getElementById("f5"),document.getElementById("s5"),document.getElementById("u5"),
                        document.getElementById("m6"),document.getElementById("t6"),document.getElementById("w6"),document.getElementById("h6"),document.getElementById("f6"),document.getElementById("s6"),document.getElementById("u6")
        ];
        var i = 0;
        let j =0;
        let bool=0;
        let counter=0;//for looping to the exact month we are in
        j = this.date.getDate();
        if(this.next_Month > 0){//if we were in the next month
            for(counter =0;counter< this.next_Month-1;counter++){ 
                this.date.setMonth(this.date.getMonth()+1);//incrementing a month up as the next position that we are in
            }
        }
        //what if we were in the previous month
        if(this.prev_Month > 0){//if we go to next month
            for(counter =0;counter< this.prev_Month;counter++){
                this.date.setMonth(this.date.getMonth()-1);//decrementing a month down as the previous position that we are in
            }
        }        
        //now we are in the exact  date

        
        this.date.setMonth(this.date.getMonth()+1);//incrementing a month 

        this.putCaption(this.date.getDate(),this.date.getDay(),this.date.getMonth(),this.date.getFullYear(),0);//putting a caption 
        
        this.date.setDate(1);
        if((this.date.getDate()%7)==0){
            i = (this.date.getDay() + (((this.date.getDate()/7)-1)*7))-1;
        }else if(this.date.getDay()==0 && (this.date.getDate()%7)==1){//if we are in sunday and sunday will be at 1
            i=6;
        }else{
            i = (this.date.getDay() + (((this.date.getDate()%7)-1)*7))-1;
        }
        //to remove the previous custom color

        var index = localStorage.getItem("index");

        this.divs[index].style.backgroundColor = "rgb(46, 49, 51)";
        //to let the day we are in in a custom color
        localStorage.setItem("index",i+j-1);
        index = localStorage.getItem("index");
        this.divs[index].style.backgroundColor = "#dc4344"; 
        j =i;//store i in j for saving the position

        this.divs[i].innerText = this.date.getDate();//put the day in it's position
        //remove previous colors
        var begin = localStorage.getItem("begin");
        var end = localStorage.getItem("end");
        for(;begin>0;begin--){
            
            this.divs[begin].style.backgroundColor = "rgb(46, 49, 51)";
            this.divs[begin].style.color = "#fff";
        }
        for(;end<41;end++){
            
            this.divs[end].style.backgroundColor = "rgb(46, 49, 51)";
            this.divs[end].style.color = "#fff";
        }
        localStorage.setItem("begin",i);//set this month beginning
        for(--i;i>=0;--i){
            
            this.date.setDate(this.date.getDate()-1);//going backward to the index 0 with decrementing a day at each loop  
            this.divs[i].innerText=this.date.getDate();   
            console.log(i);
            this.divs[i].style.backgroundColor = "#fff";
            this.divs[i].style.color = "#bdbdbd";
            
        }
        //reset the date to loop over the rest of the divs
        this.date = new Date();
        this.date.setDate(1);
        if(this.next_Month > 0){
            for(counter =0;counter< this.next_Month-1;counter++){
                this.date.setMonth(this.date.getMonth()+1);//incrementing a month
            }
        }
        if(this.prev_Month > 0){//if we go to next month
            for(counter =0;counter< this.prev_Month;counter++){
                this.date.setMonth(this.date.getMonth()-1);//decrementing a month
            }
        }      
        //now we are in the exact  date
        this.date.setMonth(this.date.getMonth()+1);//incrementing a month 
        
        for(i = j+1;i<42;++i){
            
            this.date.setDate(this.date.getDate()+1);//going forward to the index 42 with incrementing a day at each loop
            this.divs[i].innerText=this.date.getDate();            
            if(this.date.getDate() == 1){
                bool = 1;
                localStorage.setItem("end",i);
            }
            if(bool == 1){
                console.log(i);
                this.divs[i].style.backgroundColor = "#fff";
                this.divs[i].style.color = "#bdbdbd";
            }
        
        }

        if(this.prev_Month > 0){//if we go to next month and we are in the previous month
            this.next_Month--;  //we will remove the added value since we still in the previous month
            this.prev_Month--;  //we decrement the previous position
        } 
    }
    putCaption(date,day,month,year,bool){//we add a bool since it is common between today and the other date 
        if(bool == 1){
            if(date<10){
                document.getElementById("day-now").innerText = ("0"+ date);
                console.log("0"+ date)
            }else{
                document.getElementById("day-now").innerText = date;
            }
            
            if((month+1)==1){
                document.getElementById("M/Y").innerText="January  "+ year;
                document.getElementById("month-year").innerText="January  "+ year;
            }else if((month+1)==2){
                document.getElementById("M/Y").innerText="February  "+ year;
                document.getElementById("month-year").innerText="February  "+ year;
            }else if((month+1)==3){
                document.getElementById("M/Y").innerText="March  "+ year;
                document.getElementById("month-year").innerText="March  "+ year;
            }else if((month+1)==4){
                document.getElementById("M/Y").innerText="April  "+ year;
                document.getElementById("month-year").innerText="April  "+ year;
            }else if((month+1)==5){
                document.getElementById("M/Y").innerText="May  "+ year;
                document.getElementById("month-year").innerText="May  "+ year;
            }else if((month+1)==6){
                document.getElementById("M/Y").innerText="June  "+ year;
                document.getElementById("month-year").innerText="June  "+ year;
            }else if((month+1)==7){
                document.getElementById("M/Y").innerText="July  "+ year;
                document.getElementById("month-year").innerText="July  "+ year;
            }else if((month+1)==8){
                document.getElementById("M/Y").innerText="Augest  "+ year;
                document.getElementById("month-year").innerText="Augest  "+ year;
            }else if((month+1)==9){
                document.getElementById("M/Y").innerText="September  "+ year;
                document.getElementById("month-year").innerText="September  "+ year;
            }else if((month+1)==10){
                document.getElementById("M/Y").innerText="October  "+ year;
                document.getElementById("month-year").innerText="October  "+ year;
            }else if((month+1)==11){
                document.getElementById("M/Y").innerText="November  "+ year;
                document.getElementById("month-year").innerText="November  "+ year;
            }else if((month+1)==12){
                document.getElementById("M/Y").innerText="December  "+ year;
                document.getElementById("month-year").innerText="December  "+ year;
            }
            if(day == 0){
                document.getElementById("day-name").innerText = "Sun";
            }else if(day == 1){
                document.getElementById("day-name").innerText = "Mon";
            }else if(day == 2){
                document.getElementById("day-name").innerText = "Tues";
            }else if(day == 3){
                document.getElementById("day-name").innerText = "Wed";
            }else if(day == 4){
                document.getElementById("day-name").innerText = "Thurs";
            }else if(day == 5){
                document.getElementById("day-name").innerText = "Fri";
            }else if(day == 6){
                document.getElementById("day-name").innerText = "Sat";
            }
        }
        if((month+1)==1){
            document.getElementById("M/Y").innerText="January  "+ year;
        }else if((month+1)==2){
            document.getElementById("M/Y").innerText="February  "+ year;
        }else if((month+1)==3){
            document.getElementById("M/Y").innerText="March  "+ year;
        }else if((month+1)==4){
            document.getElementById("M/Y").innerText="April  "+ year;
        }else if((month+1)==5){
            document.getElementById("M/Y").innerText="May  "+ year;
        }else if((month+1)==6){
            document.getElementById("M/Y").innerText="June  "+ year;
        }else if((month+1)==7){
            document.getElementById("M/Y").innerText="July  "+ year;
        }else if((month+1)==8){
            document.getElementById("M/Y").innerText="Augest  "+ year;
        }else if((month+1)==9){
            document.getElementById("M/Y").innerText="September  "+ year;
        }else if((month+1)==10){
            document.getElementById("M/Y").innerText="October  "+ year;
        }else if((month+1)==11){
            document.getElementById("M/Y").innerText="November  "+ year;
        }else if((month+1)==12){
            document.getElementById("M/Y").innerText="December  "+ year;
        }
    }
    search(){
        
        var divs = [
            document.getElementById("m1"),document.getElementById("t1"),document.getElementById("w1"),document.getElementById("h1"),document.getElementById("f1"),document.getElementById("s1"),document.getElementById("u1"),
            document.getElementById("m2"),document.getElementById("t2"),document.getElementById("w2"),document.getElementById("h2"),document.getElementById("f2"),document.getElementById("s2"),document.getElementById("u2"),
            document.getElementById("m3"),document.getElementById("t3"),document.getElementById("w3"),document.getElementById("h3"),document.getElementById("f3"),document.getElementById("s3"),document.getElementById("u3"),
            document.getElementById("m4"),document.getElementById("t4"),document.getElementById("w4"),document.getElementById("h4"),document.getElementById("f4"),document.getElementById("s4"),document.getElementById("u4"),
            document.getElementById("m5"),document.getElementById("t5"),document.getElementById("w5"),document.getElementById("h5"),document.getElementById("f5"),document.getElementById("s5"),document.getElementById("u5"),
            document.getElementById("m6"),document.getElementById("t6"),document.getElementById("w6"),document.getElementById("h6"),document.getElementById("f6"),document.getElementById("s6"),document.getElementById("u6")
        ];             
        //to show up the grid template 
        if(document.getElementById("search-bar").style.display == "none"){
                
            document.getElementById("search-bar").style.display = "grid";
            document.getElementById("search-bar").style.gridTemplateColumns = "100px 100px 100px auto auto";
            document.getElementById("search").style.backgroundColor = "#dc4344";
        }else{
            document.getElementById("search-bar").style.display = "none";
            document.getElementById("search").style.backgroundColor = "rgb(46, 49, 51)";
        }
        document.getElementById("goDate").addEventListener("click",()=>{
            var year = parseInt(document.getElementById("year").value);
            var month = parseInt(document.getElementById("month").value);
            var day = parseInt(document.getElementById("day").value);
            var date = new Date();
            var i ;
            let bool=0;
            //set the date to the previewed date
            this.next_Month=0;
            this.prev_Month=0;            
            if(year > 0){

                if(year < date.getFullYear()){
                    this.prev_Month +=((date.getFullYear()-year)* 12);
                }else if(year > date.getFullYear()){
                    this.next_Month +=((year - date.getFullYear())* 12)-1;
                }
                
                date.setFullYear((year));
                date.setDate(1);
            }
            if(month > 0 && month <13){

                if(month < date.getMonth()){
                    this.prev_Month +=(date.getMonth()-month);
                }else if(month > date.getMonth()){
                    this.next_Month +=(month - date.getMonth())-1;
                }
                date.setMonth((month-1));
                date.setDate(1);
            }
            if(day > 0 && day < 31){
                date.setDate((day));
            }
            
            

            //to know the index of the day :
            //(day + (week - 1)*7)-1
            //  day is noted by date.getDay()
            //  week  (date.getDate()%7)
            //  decrease 1 from week and from the total since to start counting from (0 -> ...)
            
            if((date.getDate()%7)==0){
                i = (date.getDay() + (((date.getDate()/7)-1)*7))-1;
            }else if(date.getDay()==0 && (date.getDate()%7)==1){//if we are in sunday and sunday will be at 1
                i=6;
            }else{
                i = (date.getDay() + (((date.getDate()%7)-1)*7))-1;
            }
            
            var res = i;
            //to remove the previous custom color
            console.log(i);
            console.log(date);
            console.log(date.getDay());

            
            var index = localStorage.getItem("index");
            if(index >= 0){
                divs[index].style.backgroundColor = "rgb(46, 49, 51)";
            }
            
            //to let the day we are in in a custom color
            localStorage.setItem("index",i);
            index = localStorage.getItem("index");
            divs[index].style.backgroundColor = "#dc4344";
            
            divs[i].innerText=date.getDate();
            this.putCaption(date.getDate(),date.getDay(),date.getMonth(),date.getFullYear(),0);
            
    
            //remove previous colors
            var begin = localStorage.getItem("begin");
            var end = localStorage.getItem("end");
            for(;begin>0;begin--){
                
                divs[begin].style.backgroundColor = "rgb(46, 49, 51)";
                divs[begin].style.color = "#fff";
            }
            for(;end<=41;end++){
                
                divs[end].style.backgroundColor = "rgb(46, 49, 51)";
                divs[end].style.color = "#fff";
            }
            localStorage.setItem("begin",i);//set this month beginning
            for(--i;i>=0;--i){
                
                date.setDate(date.getDate()-1);
                divs[i].innerText=date.getDate();
                divs[i].style.backgroundColor = "#fff";//to let the day we are in in a custom color
                divs[i].style.color = "#bdbdbd";
                
            }
            date = new Date();

            //set the date to the previewed date
            if(year > 0){
                date.setFullYear((year));
                date.setDate(1);
            }
            if(month > 0 && month <13){
                date.setMonth((month-1));
                date.setDate(1);
            }
            if(day > 0 && day < 31){
                date.setDate((day));
            }

            for(i = res+1;i<42;++i){
                
                date.setDate(date.getDate()+1);
                divs[i].innerText=date.getDate();         
                if(date.getDate() == 1){
                    bool = 1;
                    localStorage.setItem("end",i);
                }
                if(bool == 1){
                    
                    divs[i].style.backgroundColor = "#fff";
                    divs[i].style.color = "#bdbdbd";
                }
            
            }
            i = res;
        }); 
        

        document.getElementById("reset").addEventListener("click",()=>{
            var date = new Date();
            var i;
            let bool = 0;
            this.prev_Month=0;
            this.next_Month=0;
            var res = date.getDate();
            console.log("date"+date +"  res =   "+res);
            //to know the index of the day :
            //(day + (week - 1)*7)-1
            //  day is noted by date.getDay()
            //  week  (date.getDate()%7)
            //  decrease 1 from week and from the total since to start counting from (0 -> ...)
            date.setDate(1);
            if((date.getDate()%7)==0){
                i = (date.getDay() + (((date.getDate()/7)-1)*7))-1;
            }else if(date.getDay()==0 && (date.getDate()%7)==1){//if we are in sunday and sunday will be at 1
                i=6;
            }else{
                i = (date.getDay() + (((date.getDate()%7)-1)*7))-1;
            }
            //to remove the previous custom color
            console.log("date"+date + "        i=    " + i);
            var index = localStorage.getItem("index");
            if(index >0){
                divs[index].style.backgroundColor = "rgb(46, 49, 51)";
            }
            
            //to let the day we are in in a custom color
            localStorage.setItem("index",(i+res-1));
            index = localStorage.getItem("index");
            divs[index].style.backgroundColor = "#dc4344"; 
            localStorage.setItem("index",i);
            var res = i;
            
            divs[i].innerText=date.getDate();
            this.putCaption(date.getDate(),date.getDay(),date.getMonth(),date.getFullYear(),0);
            
            //remove previous colors
            var begin = localStorage.getItem("begin");
            var end = localStorage.getItem("end");
            for(;begin>0;begin--){
                
                divs[begin].style.backgroundColor = "rgb(46, 49, 51)";
                divs[begin].style.color = "#fff";
            }
            for(;end<41;end++){
                
                divs[end].style.backgroundColor = "rgb(46, 49, 51)";
                divs[end].style.color = "#fff";
            }
            localStorage.setItem("begin",i);//set this month beginning           
            for(--i;i>=0;--i){
                
                date.setDate(date.getDate()-1);
                divs[i].innerText=date.getDate();
                divs[i].style.backgroundColor = "#fff";
                divs[i].style.color = "#bdbdbd";
                
            }
            date = new Date();
            date.setDate(1);
            for(i = res+1;i<42;++i){
                
                date.setDate(date.getDate()+1);
                divs[i].innerText=date.getDate();       
                if(date.getDate() == 1){
                    bool = 1;
                    localStorage.setItem("end",i);
                }
                if(bool == 1){
                    
                divs[i].style.backgroundColor = "#fff";
                divs[i].style.color = "#bdbdbd";
                }
            
            }
            
        });



 
    }
}
//#7047eb
//#f8f8fa
//background-color: rgb(55, 55, 245);
onload = new calender();