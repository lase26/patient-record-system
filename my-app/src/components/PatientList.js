import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const PatientListSection = () => {
  const patients = [
    {
      id: 1,
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      procedure: 'Appendectomy',
      date: '2025-05-20',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      procedure: 'Knee Arthroscopy',
      date: '2025-05-18',
      status: 'in-progress'
    },
    {
      id: 3,
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      procedure: 'Cataract Surgery',
      date: '2025-05-15',
      status: 'completed'
    },
    {
      id: 4,
      name: 'William Chen',
      email: 'william.chen@email.com',
      procedure: 'Colonoscopy',
      date: '2025-05-12',
      status: 'completed'
    },
    {
      id: 5,
      name: 'Cameron Jackson',
      email: 'cameron.jackson@email.com',
      procedure: 'Colonoscopy',
      date: '2025-08-12',
      status: 'scheduled'
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-emerald-500/10 text-emerald-500',
      'in-progress': 'bg-blue-500/10 text-blue-500',
      scheduled: 'bg-amber-500/10 text-amber-500',
    };
    return (
      <span className={`status-badge ${styles[status] || styles.completed}`}>
        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
      </span>
    );
  };

  return (
    <div className="patient-list-section">
      <div className="section-header">
        <h2 className="section-title">Recent Patients</h2>
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Filter patients..." />
        </div>
      </div>
      
      <div className="patient-table-container">
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Email</th>
              <th>Procedure</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="patient-name">
                  <div className="avatar">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span>{patient.name}</span>
                </td>
                <td className="patient-email">{patient.email}</td>
                <td className="patient-procedure">{patient.procedure}</td>
                <td className="patient-date">{patient.date}</td>
                <td>{getStatusBadge(patient.status)}</td>
                <td className="patient-actions">
                  <button className="action-btn">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientListSection;
