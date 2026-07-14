import React, { useState } from 'react';
import { Calendar, Clock, User, Video, MapPin, Plus, Filter } from 'lucide-react';

const AppointmentsSection = () => {
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  
  const appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      doctorName: 'Dr. Michael Chen',
      date: '2024-07-15',
      time: '09:00 AM',
      type: 'video',
      status: 'upcoming',
      reason: 'Follow-up consultation'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      doctorName: 'Dr. Emily Davis',
      date: '2024-07-15',
      time: '11:30 AM',
      type: 'in-person',
      status: 'upcoming',
      reason: 'Annual checkup'
    },
    {
      id: 3,
      patientName: 'Maria Garcia',
      doctorName: 'Dr. Michael Chen',
      date: '2024-07-14',
      time: '02:00 PM',
      type: 'video',
      status: 'completed',
      reason: 'Prescription review'
    },
  ];

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const completedAppointments = appointments.filter(apt => apt.status === 'completed');

  const handleAddAppointment = (e) => {
    e.preventDefault();
    console.log('Adding appointment');
    setShowNewAppointment(false);
  };

  return (
    <div className="appointments-section">
      <div className="section-header">
        <h2 className="section-title">Appointments</h2>
        <div className="section-actions">
          <button className="filter-btn">
            <Filter size={16} />
            Filter
          </button>
          <button 
            className="add-btn"
            onClick={() => setShowNewAppointment(!showNewAppointment)}
          >
            <Plus size={16} />
            New Appointment
          </button>
        </div>
      </div>

      {showNewAppointment && (
        <div className="new-appointment-form">
          <h3>Schedule New Appointment</h3>
          <form onSubmit={handleAddAppointment}>
            <div className="form-row">
              <div className="form-group">
                <label>Patient Name</label>
                <input type="text" placeholder="Enter patient name" />
              </div>
              <div className="form-group">
                <label>Doctor</label>
                <select>
                  <option>Dr. Michael Chen</option>
                  <option>Dr. Emily Davis</option>
                  <option>Dr. Sarah Johnson</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Type</label>
                <select>
                  <option>Video Consultation</option>
                  <option>In-Person Visit</option>
                </select>
              </div>
              <div className="form-group">
                <label>Reason</label>
                <input type="text" placeholder="Reason for visit" />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setShowNewAppointment(false)}>Cancel</button>
              <button type="submit">Schedule Appointment</button>
            </div>
          </form>
        </div>
      )}

      <div className="appointments-list">
        <h3>Upcoming ({upcomingAppointments.length})</h3>
        {upcomingAppointments.map(appointment => (
          <div key={appointment.id} className="appointment-card upcoming">
            <div className="appointment-icon">
              {appointment.type === 'video' ? <Video size={20} /> : <MapPin size={20} />}
            </div>
            <div className="appointment-details">
              <h4>{appointment.patientName}</h4>
              <p>{appointment.reason}</p>
              <div className="appointment-meta">
                <span><Calendar size={14} /> {appointment.date}</span>
                <span><Clock size={14} /> {appointment.time}</span>
                <span><User size={14} /> {appointment.doctorName}</span>
              </div>
            </div>
            <div className="appointment-actions">
              <button className="action-btn">Reschedule</button>
              <button className="action-btn danger">Cancel</button>
            </div>
          </div>
        ))}

        <h3>Completed ({completedAppointments.length})</h3>
        {completedAppointments.map(appointment => (
          <div key={appointment.id} className="appointment-card completed">
            <div className="appointment-icon">
              {appointment.type === 'video' ? <Video size={20} /> : <MapPin size={20} />}
            </div>
            <div className="appointment-details">
              <h4>{appointment.patientName}</h4>
              <p>{appointment.reason}</p>
              <div className="appointment-meta">
                <span><Calendar size={14} /> {appointment.date}</span>
                <span><Clock size={14} /> {appointment.time}</span>
                <span><User size={14} /> {appointment.doctorName}</span>
              </div>
            </div>
            <div className="appointment-status">
              <span className="status-badge completed">Completed</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsSection;
