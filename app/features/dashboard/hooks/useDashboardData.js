import { useCallback, useEffect, useState } from 'react';


const API_URL = 'https://subdirent.bscs3a.com/api/dashboard'; 

const TEST_EMAIL = 'Jebreilblancada20@gmail.com'; 

export const useDashboardData = (selectedDate) => {
  const [loading, setLoading] = useState(true);
  
  const [tenantData, setTenantData] = useState(null);
  const [maintenanceData, setMaintenanceData] = useState({ pending: 0, inProgress: 0, completed: 0 });
  const [payments, setPayments] = useState([]);
  const [maintenanceEvents, setMaintenanceEvents] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]); 
  const [overview, setOverview] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      const response = await fetch(`${API_URL}?email=${TEST_EMAIL}&year=${year}&month=${month}`);
      const data = await response.json();

      if (data.tenant) setTenantData(data.tenant);
      if (data.maintenance) setMaintenanceData(data.maintenance);
      if (data.payments) setPayments(data.payments);
      if (data.maintenance_events) setMaintenanceEvents(data.maintenance_events);
      if (data.recent_payments) setRecentPayments(data.recent_payments); 
      if (data.overview) setOverview(data.overview);

      setNotifications([
        { id: 1, title: 'System', message: 'Welcome to your new dashboard.', date: '2026-01-29' }
      ]);

    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { 
    loading, tenantData, maintenanceData, payments, maintenanceEvents, 
    recentPayments, overview, notifications, refetch: fetchData 
  };
};