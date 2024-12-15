import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { AddServiceModal } from './components/AddServiceModal';
import { EditServiceModal } from './components/EditServiceModal';
import { PartnerHeader } from './components/PartnerHeader';
import { ServicesList } from './components/ServicesList';
import { ServiceData } from '../../services/services/types';

export default function PartnerDashboard() {
  const navigate = useNavigate();
  const { 
    user, 
    partnerProfile,
    loadProfile,
    loadPartnerServices,
    isLoading,
    error: storeError 
  } = useStore();
  
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeData = useCallback(async () => {
    if (!user || isInitialized) return;

    try {
      await loadProfile();
      if (partnerProfile) {
        await loadPartnerServices();
      }
      setIsInitialized(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load profile');
    }
  }, [user, loadProfile, loadPartnerServices, partnerProfile, isInitialized]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!partnerProfile && isInitialized) {
      navigate('/partner/register');
      return;
    }

    initializeData();
  }, [user, partnerProfile, navigate, initializeData, isInitialized]);

  if (!isInitialized || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!partnerProfile) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {(error || storeError) && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error || storeError}
          </div>
        )}

        <PartnerHeader 
          profile={partnerProfile}
          onAddService={() => setIsAddModalOpen(true)}
        />

        <ServicesList 
          onEdit={(service) => {
            setSelectedService(service);
            setIsEditModalOpen(true);
          }}
        />
      </div>

      <AddServiceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {selectedService && (
        <EditServiceModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}
    </div>
  );
}