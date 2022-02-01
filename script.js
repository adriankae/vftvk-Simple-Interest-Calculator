function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == ""){
        alert("Please enter principal.");
        document.getElementById("principal").focus();
        return false;
    }

    if(principal <= 0){
        alert("Please enter a principal greater than 0.");
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = Math.round(parseInt(principal) * (rate / 100) * years * 100)/100;
    var year = new Date().getFullYear()+parseInt(years);
    var interestString = "If you deposit " + principal.bold() + ",\<br/>at an interest rate of " + rate.bold() + ".\<br/>You will receive an amount of " + String(interest).bold() + ",\<br/>in the year " + String(year).bold() + ".";
    document.getElementById("result").innerHTML=interestString

}
        