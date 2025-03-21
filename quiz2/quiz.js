function calculateSalesStats(salesData) {
  if (!salesData.length) {
    return { averageSales: 0, topSalesperson: null };
  }

  const totalSales = salesData.map((salesperson) => ({
    name: salesperson.name,
    total: salesperson.sales.reduce((sum, sale) => sum + sale, 0),
  }));

  const topSalesperson = totalSales.reduce((top, current) =>
    current.total > top.total ? current : top
  ).name;

  const totalSalesSum = totalSales.reduce(
    (sum, person) => sum + person.total,
    0
  );
  const averageSales = (totalSalesSum / salesData.length).toFixed(2);

  return {
    averageSales: parseFloat(averageSales),
    topSalesperson,
  };
}
