import { PartnerProfile } from '../../../types/partner';

interface PartnerHeaderProps {
  profile: PartnerProfile;
  onAddService: () => void;
}

export function PartnerHeader({ profile, onAddService }: PartnerHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Partner Dashboard</h1>
        <button
          onClick={onAddService}
          className="btn btn-primary"
        >
          Add Service
        </button>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Business Name</label>
          <p className="text-lg">{profile.businessName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <p className="text-lg">{profile.description}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Status</label>
          <p className={`inline-block px-2 py-1 rounded-full text-sm ${
            profile.isVerified 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {profile.isVerified ? 'Verified' : 'Pending Verification'}
          </p>
        </div>
      </div>
    </div>
  );
}