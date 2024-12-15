import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import {
  HomeIcon,
  CalendarIcon,
  UserIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  BuildingStorefrontIcon,
  PhoneIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const { isAuthenticated, partnerProfile } = useStore();

  const publicLinks = [
    { to: '/', icon: HomeIcon, label: 'Home' },
    { to: '/categories', icon: BuildingStorefrontIcon, label: 'All Services' },
    { to: '/contact', icon: PhoneIcon, label: 'Contact Us' },
    { to: '/about', icon: InformationCircleIcon, label: 'About Us' },
  ];

  const privateLinks = [
    { to: '/bookings', icon: CalendarIcon, label: 'My Bookings' },
    { to: '/profile', icon: UserIcon, label: 'Profile' },
    { to: '/favorites', icon: BookmarkIcon, label: 'Favorites' },
    { to: '/settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  const partnerLinks = [
    { to: '/partner/dashboard', icon: BriefcaseIcon, label: 'Partner Dashboard' },
    { to: '/partner/orders', icon: ClipboardDocumentListIcon, label: 'Orders' },
  ];

  const becomePartnerLink = [
    { to: '/partner/register', icon: BriefcaseIcon, label: 'Become a Partner' },
  ];

  const links = [
    ...publicLinks,
    ...(isAuthenticated ? privateLinks : []),
    ...(partnerProfile ? partnerLinks : isAuthenticated ? becomePartnerLink : []),
  ];

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className="h-full bg-white overflow-y-auto">
      <nav className="px-4 py-6">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            onClick={handleClick}
            className="flex items-center gap-3 px-4 py-3 rounded-md mb-2 transition-colors hover:bg-gray-50 text-gray-700"
          >
            <Icon className="w-5 h-5 text-gray-400" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}