import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './templates/shared-theme/AppTheme'; // Ensure this path is correct after moving the folder

// Import the templates
import SignIn from './templates/sign-in/SignIn';
import Dashboard from './templates/dashboard/Dashboard';
import Blog from './templates/blog/Blog';

export default function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn />} />

        {/* Protected Routes (we'll add real auth later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diary" element={<Blog />} />
      </Routes>
    </AppTheme>
  );
}