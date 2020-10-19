const getTotalRevenue = arr =>
  arr.map(el => el.amount)
  .reduce((acc, currentValue) => acc + currentValue)