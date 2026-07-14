import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const HealthChart = ({ data, title, color, type = 'line' }) => {
  const ChartComponent = type === 'area' ? AreaChart : LineChart;
  const DataComponent = type === 'area' ? Area : Line;

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <XAxis 
            dataKey="name" 
            className="chart-axis"
            tick={{ fill: 'currentColor' }}
          />
          <YAxis 
            className="chart-axis"
            tick={{ fill: 'currentColor' }}
          />
          <Tooltip 
            className="chart-tooltip"
            contentStyle={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-color)'
            }}
          />
          <DataComponent
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={type === 'area' ? color : 'none'}
            fillOpacity={0.3}
          />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
};

const HealthChartsSection = () => {
  const heartRateData = [
    { name: 'Mon', value: 72 },
    { name: 'Tue', value: 75 },
    { name: 'Wed', value: 71 },
    { name: 'Thu', value: 78 },
    { name: 'Fri', value: 74 },
    { name: 'Sat', value: 76 },
    { name: 'Sun', value: 73 },
  ];

  const bloodPressureData = [
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 118 },
    { name: 'Wed', value: 122 },
    { name: 'Thu', value: 119 },
    { name: 'Fri', value: 121 },
    { name: 'Sat', value: 117 },
    { name: 'Sun', value: 120 },
  ];

  const weightData = [
    { name: 'Mon', value: 75 },
    { name: 'Tue', value: 74.8 },
    { name: 'Wed', value: 74.9 },
    { name: 'Thu', value: 74.7 },
    { name: 'Fri', value: 74.6 },
    { name: 'Sat', value: 74.8 },
    { name: 'Sun', value: 74.5 },
  ];

  return (
    <div className="charts-section">
      <h2 className="section-title">Health Trends</h2>
      <div className="charts-grid">
        <HealthChart 
          data={heartRateData} 
          title="Heart Rate (7 Days)" 
          color="#ef4444" 
          type="area"
        />
        <HealthChart 
          data={bloodPressureData} 
          title="Blood Pressure (7 Days)" 
          color="#3b82f6" 
          type="line"
        />
        <HealthChart 
          data={weightData} 
          title="Weight Progress (7 Days)" 
          color="#10b981" 
          type="area"
        />
      </div>
    </div>
  );
};

export default HealthChartsSection;
