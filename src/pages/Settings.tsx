import { useState } from 'react';
import { useStore } from '../store';

export default function Settings() {
  const { user } = useStore();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="bg-white rounded-lg shadow-md divide-y">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="input" 
                  value={user?.email} 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input 
                  type="tel" 
                  className="input" 
                  value={user?.phone} 
                  disabled 
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Receive booking updates via email</p>
                </div>
                <button
                  onClick={() => setNotifications(n => ({ ...n, email: !n.email }))}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${notifications.email ? 'bg-primary-600' : 'bg-gray-200'}
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${notifications.email ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-gray-600">Receive push notifications</p>
                </div>
                <button
                  onClick={() => setNotifications(n => ({ ...n, push: !n.push }))}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${notifications.push ? 'bg-primary-600' : 'bg-gray-200'}
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${notifications.push ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">SMS Notifications</h3>
                  <p className="text-sm text-gray-600">Receive SMS updates</p>
                </div>
                <button
                  onClick={() => setNotifications(n => ({ ...n, sms: !n.sms }))}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${notifications.sms ? 'bg-primary-600' : 'bg-gray-200'}
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${notifications.sms ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}