function calculateTip(){
    var billamt = document.getElementById("bill").value;
    var servicegiven = document.getElementById("service").value;
    var people = document.getElementById("num").value;


if(billamt==="" || servicegiven==="0"){
    alert("Please enter the values");
    return;
}
if(people ==="" || people<=1){
     people =1;
    document.getElementById("each").style.display="none";
}else{
    document.getElementById("each").style.display="block";
}

//calculate tip
var total = (billamt*servicegiven)/people;
//till two decimal places
total = Math.round(total*100)/100;
//toFixed will print in next line upto two decimal places
total = total.toFixed(2);

document.getElementById("totalTip").style.display="block";
document.getElementById("tip").innerHTML =total;
}
//hide till load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="visibility";

document.getElementById("click").onclick=function(){
   calculateTip();
};


