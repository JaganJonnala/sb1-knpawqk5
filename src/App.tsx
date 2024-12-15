import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceList from './pages/ServiceList';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AllServices from './pages/AllServices';
import Contact from './pages/Contact';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import BecomePartner from './pages/partner/BecomePartner';
import PartnerDashboard from './pages/partner/PartnerDashboard';
import PartnerOrders from './pages/partner/PartnerOrders';
import Bookings from './pages/Bookings';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<AllServices />} />
        <Route path="/services/:categoryId" element={<ServiceList />} />
        <Route path="/service/:providerId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/booking/:providerId/:serviceId" element={<Booking />} />
          <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/partner/register" element={<BecomePartner />} />
          <Route path="/partner/dashboard" element={<PartnerDashboard />} />
          <Route path="/partner/orders" element={<PartnerOrders />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;