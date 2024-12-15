import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useStore } from '../../store';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Sidebar } from './Sidebar';

export function Navbar() {
  const { isAuthenticated } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Don't show navbar on auth pages
  if (['/login', '/register'].includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
              <Link to="/" className="text-2xl font-bold text-primary-600">
                ServicePro
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link 
                    to="/register"
                    className="btn btn-primary"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen sidebar */}
      <div 
        className={`
          fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div 
          className="fixed inset-0 bg-black bg-opacity-50" 
          onClick={() => setIsOpen(false)}
        />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg pt-16">
          <Sidebar onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
}