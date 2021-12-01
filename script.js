let numbers=["68","88","72","55","92"];
let largest=0;

function listNumbers(){
  document.getElementById("main").innerHTML=numbers.toString();
}

function go(){
  for(i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
      largest=numbers[i];
    }
  }
  alert("The largest number is: "+largest);
}
