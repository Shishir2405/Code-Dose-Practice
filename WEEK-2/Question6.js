const transactions = [5.99, 12.99, 3.70, 19.99];
const discounted = transactions.map(amount => amount * 0.90);
const affordable = discounted.filter(amount => amount < 10);
const total = affordable.reduce((sum, amount) => sum + amount, 0);
console.log(total);
