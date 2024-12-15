import { Outlet } from 'react-router-dom';
import { Navbar } from './navigation/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 pt-24">
        <Outlet />
      </main>
    </div>
  );
}