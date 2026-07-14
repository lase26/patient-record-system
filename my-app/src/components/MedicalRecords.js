import React, { useState } from 'react';
import { FileText, Calendar, Download, Plus, Search, Filter, Eye, Edit, Trash2 } from 'lucide-react';

const MedicalRecordsSection = () => {
  const [showNewRecord, setShowNewRecord] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  
  const medicalRecords = [
    {
      id: 1,
      type: 'Lab Result',
      title: 'Blood Work Panel',
      date: '2024-07-10',
      doctor: 'Dr. Michael Chen',
      status: 'normal',
      description: 'Complete blood count, metabolic panel, lipid panel'
    },
    {
      id: 2,
      type: 'Imaging',
      title: 'Chest X-Ray',
      date: '2024-06-15',
      doctor: 'Dr. Emily Davis',
      status: 'normal',
      description: 'Routine chest X-ray, no abnormalities detected'
    },
    {
      id: 3,
      type: 'Prescription',
      title: 'Medication Prescription',
      date: '2024-07-01',
      doctor: 'Dr. Michael Chen',
      status: 'active',
      description: 'Lisinopril 10mg, Metformin 500mg'
    },
    {
      id: 4,
      type: 'Procedure',
      title: 'Annual Physical',
      date: '2024-05-20',
      doctor: 'Dr. Sarah Johnson',
      status: 'completed',
      description: 'Complete physical examination'
    },
    {
      id: 5,
      type: 'Lab Result',
      title: 'Urinalysis',
      date: '2024-07-08',
      doctor: 'Dr. Michael Chen',
      status: 'abnormal',
      description: 'Elevated protein levels detected'
    },
  ];

  const filteredRecords = medicalRecords.filter(record => {
    if (!selectedRecord) return true;
    return record.type === selectedRecord;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal':
        return '#10b981';
      case 'abnormal':
        return '#ef4444';
      case 'active':
        return '#3b82f6';
      case 'completed':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    // Prevent page refresh and handle form submission
    console.log('Adding new medical record');
    setShowNewRecord(false);
  };

  return (
    <div className="medical-records-section">
      <div className="section-header">
        <h2 className="section-title">Medical Records</h2>
        <div className="section-actions">
          <button className="filter-btn">
            <Filter size={16} />
            Filter
          </button>
          <button 
            className="add-btn"
            onClick={() => setShowNewRecord(!showNewRecord)}
          >
            <Plus size={16} />
            Add Record
          </button>
        </div>
      </div>

      {showNewRecord && (
        <div className="new-record-form">
          <h3>Add New Medical Record</h3>
          <form onSubmit={handleAddRecord}>
            <div className="form-row">
              <div className="form-group">
                <label>Record Type</label>
                <select>
                  <option>Lab Result</option>
                  <option>Imaging</option>
                  <option>Prescription</option>
                  <option>Procedure</option>
                  <option>Vaccination</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="Enter record title" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" />
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
            <div className="form-group">
              <label>Description</label>
              <textarea rows="3" placeholder="Enter detailed description"></textarea>
            </div>
            <div className="form-group">
              <label>Attach Files</label>
              <input type="file" multiple />
            </div>
            <div className="form-actions">
              <button type="button" onClick={() => setShowNewRecord(false)}>Cancel</button>
              <button type="submit">Save Record</button>
            </div>
          </form>
        </div>
      )}

      <div className="records-filter">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search records..." />
        </div>
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${!selectedRecord ? 'active' : ''}`}
            onClick={() => setSelectedRecord(null)}
          >
            All
          </button>
          <button 
            className={`filter-tab ${selectedRecord === 'Lab Result' ? 'active' : ''}`}
            onClick={() => setSelectedRecord('Lab Result')}
          >
            Lab Results
          </button>
          <button 
            className={`filter-tab ${selectedRecord === 'Imaging' ? 'active' : ''}`}
            onClick={() => setSelectedRecord('Imaging')}
          >
            Imaging
          </button>
          <button 
            className={`filter-tab ${selectedRecord === 'Prescription' ? 'active' : ''}`}
            onClick={() => setSelectedRecord('Prescription')}
          >
            Prescriptions
          </button>
          <button 
            className={`filter-tab ${selectedRecord === 'Procedure' ? 'active' : ''}`}
            onClick={() => setSelectedRecord('Procedure')}
          >
            Procedures
          </button>
        </div>
      </div>

      <div className="records-list">
        {filteredRecords.map(record => (
          <div key={record.id} className="record-card">
            <div className="record-icon">
              <FileText size={24} />
            </div>
            <div className="record-details">
              <div className="record-header">
                <h4>{record.title}</h4>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: `${getStatusColor(record.status)}20`, color: getStatusColor(record.status) }}
                >
                  {record.status}
                </span>
              </div>
              <p className="record-type">{record.type}</p>
              <p className="record-description">{record.description}</p>
              <div className="record-meta">
                <span><Calendar size={14} /> {record.date}</span>
                <span>• {record.doctor}</span>
              </div>
            </div>
            <div className="record-actions">
              <button className="action-btn" title="View">
                <Eye size={16} />
              </button>
              <button className="action-btn" title="Edit">
                <Edit size={16} />
              </button>
              <button className="action-btn" title="Download">
                <Download size={16} />
              </button>
              <button className="action-btn danger" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordsSection;
