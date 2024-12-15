import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-primary-600 text-white' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
}