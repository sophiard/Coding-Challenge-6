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


//Task 4 - Subscription Pricing Model
const calculateSubscriptionCost = (plan, months, discount = 0) => {
    let monthCost;
// created a const for subscription costs with variables plans months and disocunts

    if (plan === "Basic") {
        monthCost = 10;
    } else if (plan === "Premium") {
        monthCost = 20;
    } else if (plan === "Enterprise") {
        monthCost = 50;
    } else {
        return "No plan";
    }
// stated what plan a person had and how much it costs a month

let discountedCost = (monthCost * months) - discount;
// created a function to add discount into plan of subscription 

    return `Total Cost: $${discountedCost}`;
};


console.log("Task 4 Subscription 1:", calculateSubscriptionCost("Basic", 6, 10));
console.log("Task 4 Subscription 2:", calculateSubscriptionCost("Premium", 12, 0));
//logged the 2 different subsriptions with the disocunted price 





//Task 5

function convertCurrency(amount, exchangeRate) {
    return `Converted Currency: $${(amount * exchangeRate).toFixed(2)}`;
}
// made a function to convert currency
//used .toFix to round to 2 decimal places

console.log("Task 5 Conversion 1:", convertCurrency(100, 1.1));
console.log("Task 5 Conversion 2:", convertCurrency(250, 0.85));
//logged my conversions 


//Task 6 - Higher-Order Function for Bulk Order

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}
//made a function for a bulk discount

let orders = [200, 600, 1200, 450, 800];
//orginal order numbers

let discountedOrders = applyBulkDiscount
(orders, amount => amount > 500 ? amount * 0.9 : amount);
// Declared a 10% discount on orders more than 500

console.log("Task 6 Original orders:", orders); 
console.log("Task 6 Discount orders:", discountedOrders); 
//logged both original and discounted orders


//Task 7 - Business Expense Tracker
function createExpenseTracker() {
    let totalexpense = 0;
    return function(expense) {
      totalexpense = totalexpense + expense;
      return `Total Expenses: $${totalexpense}`;
    };
  }
  // I created a function to find the total expenses 

  const tracker = createExpenseTracker()
  console.log("Task 7 total 1:", tracker(200)); 
  console.log("Task 7 Total 2:", tracker(150)); 
  // Logged both totals for the tracker
  
//Task 8 - Employee Promotion Evaluation."
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
      return 0;
    }
    let remainingLevels = 10 - employeeLevel;
    return remainingLevels * 2;
  }
  //I created a functions calculates how many years an eployyee has to reach level 10
  //then I made a calculation to figure out how many years left they have
  
  console.log("Task 8 part 1: years to Level 10:", + calculateYearsToPromotion(7)); 
  console.log("Task 8 part 2: years to Level 10:", + calculateYearsToPromotion(5));
  //I logged both parts of task 8
