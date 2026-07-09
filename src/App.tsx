import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import Help from "./pages/Help";
import Business from "./pages/Business";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/help" element={<Help />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
