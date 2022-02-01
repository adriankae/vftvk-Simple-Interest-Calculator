function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * (rate / 100) * years;
    // add amount to principal
    let amount = interest + parseInt(principal);
    var year = new Date().getFullYear()+parseInt(years);
    var interestString = "If you deposit " + principal.bold() + ",\n at an interest rate of " + rate + ".\n You will receive an amount of " + amount + ",\n in the year " + year + ".";
    document.getElementById("result").innerText=interestString

}
        