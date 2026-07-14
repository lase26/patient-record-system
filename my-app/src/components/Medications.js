import React, { useState } from 'react';
import { Pill, Clock, AlertCircle, CheckCircle, Plus, Bell } from 'lucide-react';

const MedicationsSection = () => {
  const [showNewMedication, setShowNewMedication] = useState(false);
  
  const medications = [
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      time: '08:00 AM',
      status: 'taken',
      nextDose: 'Tomorrow 08:00 AM',
      prescribedBy: 'Dr. Michael Chen'
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      time: '08:00 AM, 08:00 PM',
      status: 'pending',
      nextDose: 'Today 08:00 PM',
      prescribedBy: 'Dr. Emily Davis'
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      time: '09:00 PM',
      status: 'pending',
      nextDose: 'Today 09:00 PM',
      prescribedBy: 'Dr. Michael Chen'
    },
    {
      id: 4,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      time: '12:00 PM',
      status: 'missed',
      nextDose: 'Tomorrow 12:00 PM',
      prescribedBy: 'Dr. Sarah Johnson'
    },
  ];

  const takenMedications = medications.filter(med => med.status === 'taken');
  const pendingMedications = medications.filter(med => med.status === 'pending');
  const missedMedications = medications.filter(med => med.status === 'missed');

  const handleAddMedication = (e) => {
    e.preventDefault();
    console.log('Adding medication');
    setShowNewMedication(false);
  };

  const markAsTaken = (id) => {
    // In a real app, this would update the state
    console.log('Mark medication as taken:', id);
  };

  return (
    <div className="medications-section">
      <div className="section-header">
        <h2 className="section-title">Medications</h2>
        <button 
          className="add-btn"
          onClick={() => setShowNewMedication(!showNewMedication)}
        >
          <Plus size={16} />
          Add Medication
        </button>
      </div>

      {showNewMedication && (
        <div className="new-medication-form">
          <h3>Add New Medication</h3>
          <form onSubmit={handleAddMedication}>
            <div className="form-row">
              <div className="form-group">
                <label>Medication Name</label>
                <input type="text" placeholder="Enter medication name" />
              </div>
              <div className="form-group">
                <label>Dosage</label>
                <input type="text" placeholder="e.g., 10mg" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Frequency</label>
                <select>
                  <option>Once daily</option>
                  <option>Twice daily</option>
                  <option>Three times daily</option>
                  <option>As needed</option>
                </select>
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="text" placeholder="e.g., 08:00 AM" />
              </div>
            </div>
            <div className="form-group">
              <label>Prescribed By</label>
              <select>
                <option>Dr. Michael Chen</option>
                <option>Dr. Emily Davis</option>
                <option>Dr. Sarah Johnson</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setShowNewMedication(false)}>Cancel</button>
              <button type="submit">Add Medication</button>
            </div>
          </form>
        </div>
      )}

      <div className="medication-stats">
        <div className="stat-card taken">
          <CheckCircle size={20} />
          <div>
            <span className="stat-value">{takenMedications.length}</span>
            <span className="stat-label">Taken Today</span>
          </div>
        </div>
        <div className="stat-card pending">
          <Clock size={20} />
          <div>
            <span className="stat-value">{pendingMedications.length}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>
        <div className="stat-card missed">
          <AlertCircle size={20} />
          <div>
            <span className="stat-value">{missedMedications.length}</span>
            <span className="stat-label">Missed</span>
          </div>
        </div>
      </div>

      <div className="medications-list">
        {pendingMedications.length > 0 && (
          <>
            <h3>Pending ({pendingMedications.length})</h3>
            {pendingMedications.map(medication => (
              <div key={medication.id} className="medication-card pending">
                <div className="medication-icon">
                  <Pill size={24} />
                </div>
                <div className="medication-details">
                  <h4>{medication.name}</h4>
                  <p>{medication.dosage} - {medication.frequency}</p>
                  <div className="medication-meta">
                    <span><Clock size={14} /> {medication.time}</span>
                    <span>Next: {medication.nextDose}</span>
                  </div>
                  <span className="prescribed-by">by {medication.prescribedBy}</span>
                </div>
                <div className="medication-actions">
                  <button 
                    className="take-btn"
                    onClick={() => markAsTaken(medication.id)}
                  >
                    <CheckCircle size={16} />
                    Mark Taken
                  </button>
                  <button className="remind-btn">
                    <Bell size={16} />
                    Remind
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {missedMedications.length > 0 && (
          <>
            <h3>Missed ({missedMedications.length})</h3>
            {missedMedications.map(medication => (
              <div key={medication.id} className="medication-card missed">
                <div className="medication-icon">
                  <AlertCircle size={24} />
                </div>
                <div className="medication-details">
                  <h4>{medication.name}</h4>
                  <p>{medication.dosage} - {medication.frequency}</p>
                  <div className="medication-meta">
                    <span><Clock size={14} /> {medication.time}</span>
                    <span>Next: {medication.nextDose}</span>
                  </div>
                  <span className="prescribed-by">by {medication.prescribedBy}</span>
                </div>
                <div className="medication-status">
                  <span className="status-badge missed">Missed</span>
                </div>
              </div>
            ))}
          </>
        )}

        <h3>Taken Today ({takenMedications.length})</h3>
        {takenMedications.map(medication => (
          <div key={medication.id} className="medication-card taken">
            <div className="medication-icon">
              <CheckCircle size={24} />
            </div>
            <div className="medication-details">
              <h4>{medication.name}</h4>
              <p>{medication.dosage} - {medication.frequency}</p>
              <div className="medication-meta">
                <span><Clock size={14} /> {medication.time}</span>
                <span>Next: {medication.nextDose}</span>
              </div>
              <span className="prescribed-by">by {medication.prescribedBy}</span>
            </div>
            <div className="medication-status">
              <span className="status-badge taken">Taken</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationsSection;
