import React, { useState, useEffect } from 'react';
import { Bell, X, Calendar, Pill, Activity, AlertCircle, CheckCircle } from 'lucide-react';

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'Dr. Michael Chen - Follow-up consultation in 30 minutes',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'medication',
      title: 'Medication Reminder',
      message: 'Time to take Metformin 500mg',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 3,
      type: 'vital',
      title: 'Vital Signs Alert',
      message: 'Blood pressure reading is slightly elevated',
      time: '1 hour ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'Lab Results Available',
      message: 'Your blood test results from July 10th are now available',
      time: '2 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'medication',
      title: 'Medication Refill Needed',
      message: 'Lisinopril prescription needs refill soon',
      time: '1 day ago',
      read: true
    },
  ]);

  const [showPanel, setShowPanel] = useState(false);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'appointment':
        return <Calendar size={18} />;
      case 'medication':
        return <Pill size={18} />;
      case 'vital':
        return <Activity size={18} />;
      case 'alert':
        return <AlertCircle size={18} />;
      default:
        return <Bell size={18} />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'appointment':
        return '#3b82f6';
      case 'medication':
        return '#10b981';
      case 'vital':
        return '#f59e0b';
      case 'alert':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="notifications-section">
      <div className="notification-header">
        <h2 className="section-title">Notifications</h2>
        {unreadCount > 0 && (
          <button className="mark-read-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
        )}
      </div>

      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="no-notifications">
            <CheckCircle size={48} />
            <p>No notifications</p>
          </div>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div 
                className="notification-icon"
                style={{ backgroundColor: `${getNotificationColor(notification.type)}20`, color: getNotificationColor(notification.type) }}
              >
                {getNotificationIcon(notification.type)}
              </div>
              <div className="notification-content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
              <div className="notification-actions">
                {!notification.read && (
                  <button 
                    className="action-btn"
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark read
                  </button>
                )}
                <button 
                  className="delete-btn"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsSection;
