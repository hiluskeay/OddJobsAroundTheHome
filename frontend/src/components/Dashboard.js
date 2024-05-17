import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({ appointments: [], income: 0 });

  useEffect(() => {
    // Fetch data from backend
    fetch('/api/appointments')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Income: ${data.income}</p>
      <h2>Appointments</h2>
      <ul>
        {data.appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.name} - {new Date(appointment.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
