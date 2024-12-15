import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { SERVICE_CATEGORIES } from '../../constants/services';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';

export default function BecomePartner() {
  const navigate = useNavigate();
  const { user, createProfile, partnerProfile, isLoading, error: storeError } = useStore();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (partnerProfile) {
      navigate('/partner/dashboard');
    }
  }, [user, partnerProfile, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await createProfile({
        businessName: formData.get('businessName') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        address: formData.get('address') as string,
        phone: formData.get('phone') as string,
        email: user?.email || '',
      });
      navigate('/partner/dashboard');
    } catch (error) {
      console.error('Failed to create partner profile:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Become a Partner</h1>
          
          {storeError && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
              {storeError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                className="input"
                placeholder="Enter your business name"
                required
                minLength={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                className="input"
                rows={4}
                placeholder="Describe your business and services"
                required
                minLength={20}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Service Category
              </label>
              <select
                name="category"
                className="input"
                required
              >
                <option value="">Select a category</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Address
              </label>
              <textarea
                name="address"
                className="input"
                rows={2}
                placeholder="Enter your business address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="+1 (555) 123-4567"
                required
                pattern="^\+?[1-9]\d{1,14}$"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter a valid phone number with country code (e.g., +1 for US)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user?.email}
                className="input bg-gray-50"
                disabled
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-blue-800 mb-2">What happens next?</h3>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>Your profile will be reviewed by our team</li>
                <li>You can start adding your services immediately</li>
                <li>Once verified, your services will be visible to customers</li>
                <li>You'll receive notifications for new bookings</li>
              </ul>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner />
                  <span>Creating Profile...</span>
                </div>
              ) : (
                'Create Partner Profile'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}