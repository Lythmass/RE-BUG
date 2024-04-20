export const fillPieChartData = (data: any) => {
  const pieChartData: any = [['Type', 'Number of bugs']];
  for (const [key, value] of Object.entries(data)) {
    pieChartData.push([key, value]);
  }
  return pieChartData;
};
