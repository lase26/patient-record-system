import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Lock, User, Palette, Globe, Shield, Database, Trash2 } from 'lucide-react';

const SettingsSection = () => {
  const [activeSection, setActiveSection] = useState('general');
  
  const settingsSections = [
    { id: 'general', icon: SettingsIcon, label: 'General' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'privacy', icon: Lock, label: 'Privacy' },
    { id: 'account', icon: User, label: 'Account' },
    { id: 'appearance', icon: Palette, label: 'Appearance' },
    { id: 'language', icon: Globe, label: 'Language' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'data', icon: Database, label: 'Data Management' },
  ];

  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div className="settings-content">
            <h3>General Settings</h3>
            <div className="settings-group">
              <div className="setting-item">
                <label>Application Name</label>
                <input type="text" defaultValue="HealthCare+" />
              </div>
              <div className="setting-item">
                <label>Default View</label>
                <select>
                  <option>Dashboard</option>
                  <option>Patients</option>
                  <option>Appointments</option>
                </select>
              </div>
              <div className="setting-item">
                <label>Time Zone</label>
                <select>
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>GMT</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="settings-content">
            <h3>Notification Settings</h3>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label>Push Notifications</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item toggle">
                <label>Email Notifications</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item toggle">
                <label>SMS Notifications</label>
                <input type="checkbox" />
              </div>
              <div className="setting-item">
                <label>Reminder Time (minutes before)</label>
                <input type="number" defaultValue="30" />
              </div>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="settings-content">
            <h3>Privacy Settings</h3>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label>Profile Visibility</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item toggle">
                <label>Show Online Status</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item toggle">
                <label>Allow Data Sharing</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        );
      case 'account':
        return (
          <div className="settings-content">
            <h3>Account Settings</h3>
            <div className="settings-group">
              <div className="setting-item">
                <label>Username</label>
                <input type="text" defaultValue="johndoe" />
              </div>
              <div className="setting-item">
                <label>Email</label>
                <input type="email" defaultValue="john.doe@email.com" />
              </div>
              <div className="setting-item">
                <label>Phone</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <button className="danger-btn">Delete Account</button>
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="settings-content">
            <h3>Appearance Settings</h3>
            <div className="settings-group">
              <div className="setting-item">
                <label>Theme</label>
                <select>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System Default</option>
                </select>
              </div>
              <div className="setting-item">
                <label>Font Size</label>
                <select>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className="setting-item toggle">
                <label>Compact Mode</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        );
      case 'language':
        return (
          <div className="settings-content">
            <h3>Language Settings</h3>
            <div className="settings-group">
              <div className="setting-item">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div className="setting-item">
                <label>Date Format</label>
                <select>
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="settings-content">
            <h3>Security Settings</h3>
            <div className="settings-group">
              <div className="setting-item toggle">
                <label>Two-Factor Authentication</label>
                <input type="checkbox" />
              </div>
              <div className="setting-item">
                <label>Current Password</label>
                <input type="password" />
              </div>
              <div className="setting-item">
                <label>New Password</label>
                <input type="password" />
              </div>
              <div className="setting-item">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
              <button className="primary-btn">Update Password</button>
            </div>
          </div>
        );
      case 'data':
        return (
          <div className="settings-content">
            <h3>Data Management</h3>
            <div className="settings-group">
              <div className="setting-item">
                <button className="primary-btn">Export All Data</button>
              </div>
              <div className="setting-item">
                <button className="secondary-btn">Clear Cache</button>
              </div>
              <div className="setting-item">
                <button className="danger-btn">
                  <Trash2 size={16} />
                  Delete All Data
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-section">
      <h2 className="section-title">Settings</h2>
      <div className="settings-container">
        <div className="settings-sidebar">
          {settingsSections.map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                className={`settings-nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon size={18} />
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>
        <div className="settings-main">
          {renderSettingsContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
