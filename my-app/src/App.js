import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VitalsSection from './components/VitalCard';
import HealthChartsSection from './components/HealthChart';
import AppointmentsSection from './components/Appointments';
import MedicationsSection from './components/Medications';
import PatientProfileSection from './components/PatientProfile';
import NotificationsSection from './components/Notifications';
import SettingsSection from './components/Settings';
import MedicalRecordsSection from './components/MedicalRecords';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const notifications = [
    { id: 1, type: 'appointment', title: 'Upcoming Appointment', message: 'Dr. Michael Chen - Follow-up in 30 minutes' },
    { id: 2, type: 'medication', title: 'Medication Reminder', message: 'Time to take Metformin 500mg' },
    { id: 3, type: 'vital', title: 'Vital Signs Alert', message: 'Blood pressure slightly elevated' },
  ];

  const vitals = {
    heartRate: 72,
    bloodPressure: '120/80',
    temperature: 36.6,
    oxygen: 98,
    weight: 75,
    bmi: 24.5
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <VitalsSection vitals={vitals} />
            <HealthChartsSection />
          </div>
        );
      case 'patients':
        return <PatientProfileSection />;
      case 'appointments':
        return <AppointmentsSection />;
      case 'medications':
        return <MedicationsSection />;
      case 'vitals':
        return (
          <div className="dashboard-content">
            <VitalsSection vitals={vitals} />
            <HealthChartsSection />
          </div>
        );
      case 'records':
        return <MedicalRecordsSection />;
      case 'settings':
        return <SettingsSection />;
      case 'notifications':
        return <NotificationsSection />;
      default:
        return <div className="coming-soon">Coming Soon</div>;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <div 
          className={`sidebar-overlay ${sidebarOpen && isMobile ? 'active' : ''}`}
          onClick={() => setSidebarOpen(false)}
        ></div>
        <Sidebar 
          isOpen={sidebarOpen} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Navbar 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            notifications={notifications}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            isMobile={isMobile}
          />
          <main className="content">
            {renderContent()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
