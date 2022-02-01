function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * (rate / 100) * years;
    // add amount to principal
    let amount = interest + parseInt(principal);
    var year = new Date().getFullYear()+parseInt(years);
    var interestString = "If you deposit " + principal.bold() + ",\<br/>at an interest rate of " + rate.bold() + ".\<br/>You will receive an amount of " + String(amount).bold() + ",\<br/>in the year " + String(year).bold() + ".";
    document.getElementById("result").innerHTML=interestString

}
        