import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Bell, Search, User, Menu, X } from 'lucide-react';

const Navbar = ({ toggleSidebar, notifications, setActiveTab, activeTab, isMobile }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNotificationsPanel, setShowNotificationsPanel] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search patients, appointments..." />
        </div>
      </div>
      
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button 
          className="notification-btn"
          onClick={() => {
            setShowNotificationsPanel(!showNotificationsPanel);
            setShowProfilePanel(false);
            if (setActiveTab) setActiveTab('notifications');
          }}
        >
          <Bell size={20} />
          {notifications.length > 0 && (
            <span className="notification-badge">{notifications.length}</span>
          )}
        </button>
        
        <button 
          className="profile-btn"
          onClick={() => {
            setShowProfilePanel(!showProfilePanel);
            setShowNotificationsPanel(false);
            if (setActiveTab) setActiveTab('patients');
          }}
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
