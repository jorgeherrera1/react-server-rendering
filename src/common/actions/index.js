export const fetchDashboardStatistics = (week = new Date()) => {
  return {
    type: 'FETCH_DASHBOARD_STATISTICS',
    week
  }
};
