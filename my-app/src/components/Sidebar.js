import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Pill, 
  FileText, 
  Users, 
  Settings, 
  Activity,
  Heart,
  Thermometer
} from 'lucide-react';

const Sidebar = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'patients', icon: Users, label: 'Patients' },
    { id: 'appointments', icon: Calendar, label: 'Appointments' },
    { id: 'medications', icon: Pill, label: 'Medications' },
    { id: 'vitals', icon: Activity, label: 'Vitals' },
    { id: 'records', icon: FileText, label: 'Medical Records' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <Heart className="logo-icon" size={28} />
        <span className="logo-text">HealthCare+</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="sidebar-footer">
        <div className="quick-stats">
          <div className="stat-item">
            <Thermometer size={16} />
            <span>12 Active Patients</span>
          </div>
          <div className="stat-item">
            <Calendar size={16} />
            <span>5 Today's Appointments</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
