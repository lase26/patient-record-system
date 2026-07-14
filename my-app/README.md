# Patient Record System

A comprehensive React-based patient record management system with modern UI, dark/light mode support, and responsive design.

## Features

- **Dashboard Overview** - View vital signs and health trends at a glance
- **Patient Management** - Detailed patient profiles with medical history
- **Appointment Scheduling** - Book and manage patient appointments
- **Medication Tracking** - Track medications and schedules
- **Health Charts** - Visualize health data trends with interactive charts
- **Medical Records** - Comprehensive medical record management
- **Notifications** - Real-time alerts for appointments and medications
- **Settings** - Customizable application settings
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional interface with ashy/grey color theme and vibrant accents

## Tech Stack

- **React 19.1.1** - Frontend framework
- **Create React App** - Project scaffolding
- **Lucide React** - Icon library
- **Recharts** - Data visualization for health charts
- **CSS Variables** - Dynamic theming support
- **React Context API** - Theme management

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lase26/patient-record-system.git
```

2. Navigate to the project directory:
```bash
cd patient-record-system/my-app
```

3. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Run the application in development mode:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Production Build

Build the app for production:
```bash
npm run build
```

The optimized build will be created in the `build` folder.

### Running Tests

Launch the test runner:
```bash
npm test
```

## Project Structure

```
my-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── VitalCard.js
│   │   ├── HealthChart.js
│   │   ├── Appointments.js
│   │   ├── Medications.js
│   │   ├── PatientProfile.js
│   │   ├── Notifications.js
│   │   ├── Settings.js
│   │   └── MedicalRecords.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Features in Detail

### Vital Signs Monitoring
- Real-time display of heart rate, blood pressure, temperature, blood oxygen, weight, and BMI
- Trend indicators showing changes over time
- Color-coded alerts for abnormal readings

### Patient Profiles
- Comprehensive patient information management
- Contact details and medical history
- Edit functionality with form validation

### Appointment Management
- Schedule and manage patient appointments
- Filter by status (upcoming, completed)
- Add new appointments with date/time selection

### Medication Tracking
- Track patient medications and schedules
- Dosage and timing information
- Medication statistics and compliance tracking

### Health Charts
- Interactive charts showing health trends over time
- Visual representation of vital signs data
- Multiple chart types for different metrics

## Responsive Design

The application is fully responsive and adapts to different screen sizes:
- **Desktop** (1024px+): Full sidebar navigation
- **Tablet/Mobile** (≤1024px): Collapsible sidebar with hamburger menu
- **Mobile** (≤768px): Optimized layout with stacked components

## Theme Support

The application supports both light and dark modes:
- **Light Mode**: Ashy/grey base with vibrant color accents (red, purple, green, blue, pink, orange)
- **Dark Mode**: Deep grey base with brighter accent colors for visibility
- Theme preference is persisted in localStorage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue on GitHub.
