//Interest calculations and results message
function compute()
{
    //Stores the inputs provided by the user. Then calculates the interest
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = parseInt(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    
    //Checks that amount is a valid value
    if (principal <=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }    
    //Stores the year for which the user wishes to calculate
    let target_year = new Date().getFullYear() + years;
    //Updates the page with the results
    let result = document.getElementById("result");
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
                                                at an interest rate of <mark>${rate}%.</mark><br>
                                                You will receive an amount of <mark>${interest},</mark><br>
                                                in the year <mark>${target_year}</mark>`;        
}
//Updates the interest rate shown
function rate_value() 
{
    let rate = document.getElementById("rate").value;
    document.getElementById("rate_value").innerHTML = rate + "%";
}
        
