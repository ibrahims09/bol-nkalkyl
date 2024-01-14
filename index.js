var _a;
console.log("Script loaded!");
// Hämta referenser till input-fälten och resultatet
var loanAmountInput = document.getElementById("loanAmount");
var interestRateInput = document.getElementById("interestRate");
var loanTermInput = document.getElementById("loanTerm");
var resultElement = document.getElementById("result");
var calkelement = document.getElementById("calk");
var totalElement = document.getElementById("total");
// Lägg till en händelselyssnare för knappen
(_a = document.getElementById("calculateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", calculateLoan);
// Funktion för att beräkna bolånet
function calculateLoan() {
    console.log("calculateLoan function invoked");
    // Återställ resultat och felmeddelanden
    resultElement.innerHTML = '';
    // Hämta användarens inmatningar
    var loanAmountValue = parseFloat(loanAmountInput.value.trim());
    var interestRateValue = parseFloat(interestRateInput.value.trim());
    var loanTermValue = parseFloat(loanTermInput.value.trim());
    // Kontrollera om inmatningarna är giltiga
    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(loanTermValue) || loanAmountValue <= 0 || interestRateValue <= 0 || loanTermValue <= 0) {
        resultElement.innerHTML = 'Vänligen ange giltiga numeriska värden för lånebelopp, ränta och lånetid.';
        return;
    }
    // Beräkna månadskostnaden med annuitetsmetoden
    var monthlyInterestRate = interestRateValue / 100 / 12;
    var numberOfPayments = loanTermValue * 12;
    // Beräkna månadskostnaden med formeln
    var monthlyPayment = loanAmountValue * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    // Visa resultatet direkt på webbsidan
    resultElement.innerHTML = "M\u00E5nadskostnad: ".concat(monthlyPayment.toFixed(2), " kr");
    calkelement.innerHTML = "\n  L\u00E5nebelopp: ".concat(loanAmountValue.toFixed(2), " kr <br>\n  M\u00E5nadsr\u00E4nta: ").concat((interestRateValue / 12).toFixed(4), " % <br>\n  l\u00E5netid: ").concat(numberOfPayments.toFixed(0), "\n\n");
    console.log("calculateLoan function completed");
}
// Funktion för att beräkna månadskostnaden
function calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermInYears) {
    console.log("Inside calculateMonthlyPayment function");
    // Konvertera årlig ränta till månatlig ränta
    var monthlyInterestRate = annualInterestRate / 100 / 12;
    // Konvertera lånetid från år till månader
    var numberOfPayments = loanTermInYears * 12;
    // Beräkna månadskostnaden med annuitetsformeln
    var monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    console.log("Monthly Payment calculated successfully");
    return monthlyPayment;
}
