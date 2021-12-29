
function update_timer(){
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    document.getElementById("current_hour").innerHTML=hours;
    document.getElementById("current_min").innerHTML=minutes;
    document.getElementById("current_sec").innerHTML=seconds;
    
    var am_pm=document.getElementById("am_pm");
    if(hours > 11){
     am_pm.innerHTML="PM";

    }

}



  setInterval(update_timer, 1000);

 

function set_wakeup_time(){
  var a=document.getElementById("set-time").value;
console.log(a);


var h= time=new Date();
var hours=time.getHours()%12;


if(a%12==hours){
  document.getElementById("images").style.backgroundImage="url('./wakeup.jpeg')";
}


var b=document.getElementById("set-lunch").value;
console.log(b);

if(b%12==hours){
  document.getElementById("images").style.backgroundImage="url(./lunch.jpeg)";

}

  var c=document.getElementById("set_nap").value;
  
  if(c%12==hours){
    document.getElementById("images").style.backgroundImage="url(./good night.jpeg)";
  }

 var set_time= $("#set-time option:selected").text();
  var p1= document.getElementById("p1");
   if(set_time!="Default" && set_time!=""){                         //||
     p1.innerHTML=set_time;
   } 
   else{
     p1.innerHTML="";
   }
 
   var lunch_time=$("#set-lunch option:selected").text();
   var p2=document.getElementById("p2");

   if(lunch_time!="Default" && lunch_time!=""){
     p2.innerHTML= lunch_time;
   }
   else{
    p2.innerHTML="";
  }

   var nap_time=$("#set_nap option:selected").text();
   var p3=document.getElementById("p3");

   if(nap_time!="Default" && nap_time!=""){
     p3.innerHTML=nap_time;
   }
   
   else{
    p3.innerHTML="";
  }

  
}







