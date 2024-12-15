import { useState } from 'react';
import { useStore } from '../../store';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { SERVICE_CATEGORIES } from '../../constants/services';
import { PartnerService } from '../../types/partner';

interface EditServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: PartnerService;
}

export default function EditServiceModal({ isOpen, onClose, service }: EditServiceModalProps) {
  const { updateService, isLoading } = useStore();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: service.name,
    description: service.description,
    price: service.price.toString(),
    duration: service.duration.toString(),
    category: service.category
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await updateService(service.id, {
        ...formData,
        price: parseFloat(formData.price),
        duration: parseInt(formData.duration)
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update service');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <h2 className="text-xl font-bold mb-6">Edit Service</h2>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Service Name</label>
              <input
                type="text"
                className="input mt-1"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="input mt-1"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                className="input mt-1"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input mt-1"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (min)</label>
                <input
                  type="number"
                  min="15"
                  step="15"
                  className="input mt-1"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="btn btn-primary flex-1"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : 'Save Changes'}
              </button>
              <button
                type="button"
                className="btn btn-secondary flex-1"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}