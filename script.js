
//Get input data.
function compute()
{
    var principal =parseVar (document.getElementById("principal").value); //get principal
    var rate= parseVar (document.getElementById("rate").value);//get rate of interest
    var years= parseVar(document.getElementById("years").value);
    var interest = principal * rate * years / 100 ; //calculate interest
    var yearInFuture =new Date().getFullYear()+years;

    document.getElementById("result").innerHTML="If you deposit "+principal+
 "<br> at an intrest rate of "+rate+"% <br> you recieve an amount of "+interest+
 "<br>in the year "+yearInFuture;//Display output
}

 //update the range. 
 function updateSlider(rate_val){
  var ratespan = document.getElementById("rate_val");
    ratespan.innerHTML=rate_val;
}
//Update the calculated Amount.
function validateAmount(){
    var principal=document.getElementById("principal").value;
    var greaterthanZero=parseInt(principal)>0;
    if(!greaterthanZero){
        alert("Enter a positive value");
        document.getElementById("principal").focus();
    }


}
 
        