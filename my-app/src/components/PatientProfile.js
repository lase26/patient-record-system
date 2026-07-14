import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Droplet, Heart, Edit, Download } from 'lucide-react';

const PatientProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Saving profile');
    setIsEditing(false);
  };
  
  const patient = {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodType: 'A+',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
    dateOfBirth: '1979-03-15',
    emergencyContact: 'Jane Doe - +1 (555) 987-6543',
    allergies: 'Penicillin, Peanuts',
    chronicConditions: 'Hypertension, Type 2 Diabetes',
    insurance: 'Blue Cross Blue Shield - #BC123456789'
  };

  return (
    <div className="patient-profile-section">
      <div className="section-header">
        <h2 className="section-title">Patient Profile</h2>
        <div className="section-actions">
          <button className="action-btn">
            <Download size={16} />
            Export Records
          </button>
          <button 
            className="action-btn primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={16} />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={48} />
          </div>
          <div className="profile-info">
            <h3>{patient.name}</h3>
            <p>Age: {patient.age} • {patient.gender} • Blood Type: {patient.bloodType}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h4>Contact Information</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <Mail size={16} />
                <div>
                  <span className="label">Email</span>
                  <span className="value">{patient.email}</span>
                </div>
              </div>
              <div className="detail-item">
                <Phone size={16} />
                <div>
                  <span className="label">Phone</span>
                  <span className="value">{patient.phone}</span>
                </div>
              </div>
              <div className="detail-item">
                <MapPin size={16} />
                <div>
                  <span className="label">Address</span>
                  <span className="value">{patient.address}</span>
                </div>
              </div>
              <div className="detail-item">
                <Calendar size={16} />
                <div>
                  <span className="label">Date of Birth</span>
                  <span className="value">{patient.dateOfBirth}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h4>Medical Information</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <Droplet size={16} />
                <div>
                  <span className="label">Blood Type</span>
                  <span className="value">{patient.bloodType}</span>
                </div>
              </div>
              <div className="detail-item">
                <Heart size={16} />
                <div>
                  <span className="label">Emergency Contact</span>
                  <span className="value">{patient.emergencyContact}</span>
                </div>
              </div>
              <div className="detail-item full-width">
                <span className="label">Allergies</span>
                <span className="value">{patient.allergies}</span>
              </div>
              <div className="detail-item full-width">
                <span className="label">Chronic Conditions</span>
                <span className="value">{patient.chronicConditions}</span>
              </div>
              <div className="detail-item full-width">
                <span className="label">Insurance</span>
                <span className="value">{patient.insurance}</span>
              </div>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="edit-profile-form">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSaveProfile}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" defaultValue={patient.name} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue={patient.email} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" defaultValue={patient.phone} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" defaultValue={patient.address} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Emergency Contact</label>
                  <input type="text" defaultValue={patient.emergencyContact} />
                </div>
                <div className="form-group">
                  <label>Allergies</label>
                  <input type="text" defaultValue={patient.allergies} />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfileSection;
