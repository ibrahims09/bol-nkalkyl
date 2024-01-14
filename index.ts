console.log("Script loaded!");

// Hämta referenser till input-fälten och resultatet
const loanAmountInput = document.getElementById("loanAmount") as HTMLInputElement;
const interestRateInput = document.getElementById("interestRate") as HTMLInputElement;
const loanTermInput = document.getElementById("loanTerm") as HTMLInputElement;
const resultElement = document.getElementById("result") as HTMLParagraphElement;
const calkelement = document.getElementById("calk") as HTMLParagraphElement;
const totalElement = document.getElementById("total") as HTMLParagraphElement
// Lägg till en händelselyssnare för knappen
document.getElementById("calculateButton")?.addEventListener("click", calculateLoan);

// Funktion för att beräkna bolånet
function calculateLoan() {
  console.log("calculateLoan function invoked");

  // Återställ resultat och felmeddelanden
  resultElement.innerHTML = '';

  // Hämta användarens inmatningar
  const loanAmountValue = parseFloat(loanAmountInput.value.trim());
  const interestRateValue = parseFloat(interestRateInput.value.trim());
  const loanTermValue = parseFloat(loanTermInput.value.trim());

  // Kontrollera om inmatningarna är giltiga
  if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(loanTermValue) || loanAmountValue <= 0 || interestRateValue <= 0 || loanTermValue <= 0) {
    resultElement.innerHTML = 'Vänligen ange giltiga numeriska värden för lånebelopp, ränta och lånetid.';
    return;
  }

  // Beräkna månadskostnaden med annuitetsmetoden
  const monthlyInterestRate = interestRateValue / 100 / 12;
  const numberOfPayments = loanTermValue * 12;

  // Beräkna månadskostnaden med formeln
  const monthlyPayment = loanAmountValue * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);


// Visa resultatet direkt på webbsidan
resultElement.innerHTML = `Månadskostnad: ${monthlyPayment.toFixed(2)} kr`;
calkelement.innerHTML = `
  Lånebelopp: ${loanAmountValue.toFixed(2)} kr <br>
  Månadsränta: ${(interestRateValue / 12).toFixed(4)} % <br>
  lånetid: ${numberOfPayments.toFixed(0)}

`;

  console.log("calculateLoan function completed");
}

// Funktion för att beräkna månadskostnaden
function calculateMonthlyPayment(loanAmount: number, annualInterestRate: number, loanTermInYears: number): number {
  console.log("Inside calculateMonthlyPayment function");

  // Konvertera årlig ränta till månatlig ränta
  const monthlyInterestRate: number = annualInterestRate / 100 / 12;

  // Konvertera lånetid från år till månader
  const numberOfPayments: number = loanTermInYears * 12;

  // Beräkna månadskostnaden med annuitetsformeln
  const monthlyPayment: number = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  console.log("Monthly Payment calculated successfully");

  return monthlyPayment;
}







