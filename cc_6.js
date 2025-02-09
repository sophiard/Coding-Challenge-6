// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold;
}
// I made a function to calculate profit
// The directiosn say the formula to divide it but I think to find profit its multiplying
console.log(`Task 1 profit 1: $${calculateProfit(20, 30, 100)}`);
console.log(`Task 1 profit 2: $${calculateProfit(50, 70, 200)}`);
//logged the profit 



//Task 2 - Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    return(amount * taxRate)};
//made a function to calculate sales tax

console.log(`Task 2 Sales tax 1: $${Math.floor(calculateSalesTax(100, 0.07))}`); 
console.log(`Task 2 Sales tax 1: $${Math.floor(calculateSalesTax(500, 0.1))}`);
//logged both sale tax (used math floor to make it whole numbers)



//Task 3 - Employee Bonus Calculation.

const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
//created arror function calculate bonus
    
    if (performanceRating === "Excellent") {
      bonus = salary * 0.20;
    } else if (performanceRating === "Good") {
      bonus = salary * 0.10;
    } else if (performanceRating === "Average") {
      bonus = salary * 0.05;
    }else return "No Bonus"
    return `Bonus: $${bonus}`; };
  //used if else statements to help calculate the bonus 
  //if there is no preformance rating it will state no bonus
  
  console.log("Task 3 bonus 1:", calculateBonus(5000, "Excellent")); 
  console.log("Task 3 Bonus 2:", calculateBonus(7000, "Good"));    
//logged what thier bonus is 




//Task 5

function convertCurrency(amount, exchangeRate) {
    return `Converted Currency: $${(amount * exchangeRate).toFixed(2)}`;
}
// made a function to convert currency
//used .toFix to round to 2 decimal places

console.log("Task 5 Conversion 1:", convertCurrency(100, 1.1));
console.log("Task 5 Conversion 2:", convertCurrency(250, 0.85));
//logged my conversions 


