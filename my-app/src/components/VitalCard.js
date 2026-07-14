import React from 'react';
import { Heart, Activity, Thermometer, Droplets, Weight, TrendingUp, TrendingDown } from 'lucide-react';

const VitalCard = ({ title, value, unit, icon: Icon, trend, trendValue, color }) => {
  const isPositive = trend === 'up';
  
  return (
    <div className="vital-card">
      <div className="vital-header">
        <div className="vital-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          <Icon size={24} />
        </div>
        <div className={`vital-trend ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trendValue}</span>
        </div>
      </div>
      
      <div className="vital-content">
        <h3 className="vital-title">{title}</h3>
        <div className="vital-value">
          <span className="value">{value}</span>
          <span className="unit">{unit}</span>
        </div>
      </div>
    </div>
  );
};

const VitalsSection = ({ vitals }) => {
  return (
    <div className="vitals-section">
      <h2 className="section-title">Vital Signs</h2>
      <div className="vitals-grid">
        <VitalCard
          title="Heart Rate"
          value={vitals.heartRate}
          unit="bpm"
          icon={Heart}
          trend="up"
          trendValue="+2.5%"
          color="#ef4444"
        />
        <VitalCard
          title="Blood Pressure"
          value={vitals.bloodPressure}
          unit="mmHg"
          icon={Activity}
          trend="down"
          trendValue="-1.2%"
          color="#3b82f6"
        />
        <VitalCard
          title="Temperature"
          value={vitals.temperature}
          unit="°C"
          icon={Thermometer}
          trend="stable"
          trendValue="0%"
          color="#f59e0b"
        />
        <VitalCard
          title="Blood Oxygen"
          value={vitals.oxygen}
          unit="%"
          icon={Droplets}
          trend="up"
          trendValue="+0.8%"
          color="#10b981"
        />
        <VitalCard
          title="Weight"
          value={vitals.weight}
          unit="kg"
          icon={Weight}
          trend="down"
          trendValue="-0.5%"
          color="#8b5cf6"
        />
        <VitalCard
          title="BMI"
          value={vitals.bmi}
          unit=""
          icon={Activity}
          trend="stable"
          trendValue="0%"
          color="#ec4899"
        />
      </div>
    </div>
  );
};

export default VitalsSection;
