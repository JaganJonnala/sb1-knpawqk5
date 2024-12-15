import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { mockServiceProviders } from "../constants/mockData";
import { showError } from "../utils/alerts";

export function ServiceDetailScreen({ route, navigation }: NavigationProps<"ServiceDetail">) {
  const { providerId } = route.params;
  const provider = mockServiceProviders.find(p => p.id === providerId);

  if (!provider) {
    showError("Provider not found");
    navigation.goBack();
    return null;
  }

  return (
    <scrollView>
      <stackLayout className="p-4">
        <image
          src={provider.avatar}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        
        <label className="text-2xl font-bold text-center mb-2" text={provider.name} />
        <label className="text-lg text-gray-600 text-center mb-4" text={`⭐ ${provider.rating} (${provider.reviews} reviews)`} />
        
        <label className="text-xl font-semibold mb-2">About</label>
        <label className="text-gray-600 mb-4" text={provider.description} />
        
        <label className="text-xl font-semibold mb-2">Services</label>
        {provider.services.map(service => (
          <gridLayout
            key={service.id}
            className="bg-white p-4 rounded-lg mb-2 elevation-1"
            rows="auto, auto"
            columns="*, auto"
            onTap={() => navigation.navigate("Booking", { 
              providerId: provider.id,
              serviceId: service.id
            })}
          >
            <label
              row={0}
              col={0}
              className="font-semibold"
              text={service.name}
            />
            <label
              row={0}
              col={1}
              className="text-blue-600"
              text={`$${service.price}`}
            />
            <label
              row={1}
              col={0}
              colSpan={2}
              className="text-sm text-gray-600"
              text={service.description}
            />
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}