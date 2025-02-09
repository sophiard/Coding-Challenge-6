// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold;
}
// I made a function to calculate profit
// The directiosn say the formula to divide it but I think to find profit its multiplying
console.log("Task 1 profit 1:", calculateProfit(20, 30, 100)); 
console.log("Task 1 Profit 2:", calculateProfit(50, 70, 200));
//logged the profit 

