// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold;
}
// I made a function to calculate profit
// The directiosn say the formula to divide it but I think to find profit its multiplying
console.log("Task 1 profit 1:", calculateProfit(20, 30, 100)); 
console.log("Task 1 Profit 2:", calculateProfit(50, 70, 200));
//logged the profit 



//Task 2 - Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    return(amount * taxRate)};
//made a function to calculate sales tax

console.log(`Task 2 Sales tax 1: $${Math.floor(calculateSalesTax(100, 0.07))}`); 
console.log(`Task 2 Sales tax 1: $${Math.floor(calculateSalesTax(500, 0.1))}`);
//logged both sale tax (used math floor to make it whole numbers)
