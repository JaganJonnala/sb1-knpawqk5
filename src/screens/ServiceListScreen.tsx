import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { ServiceProvider } from "../types/models";
import { mockServiceProviders } from "../constants/mockData";

export function ServiceListScreen({ route, navigation }: NavigationProps<"ServiceList">) {
  const { categoryId, title } = route.params;
  const providers = mockServiceProviders.filter(
    (provider) => provider.categoryId === categoryId
  );

  return (
    <scrollView>
      <stackLayout className="p-4">
        <label className="text-2xl font-bold mb-4">{title}</label>
        
        {providers.map((provider) => (
          <gridLayout
            key={provider.id}
            className="bg-white p-4 rounded-lg mb-4 elevation-2"
            rows="auto, auto, auto"
            columns="auto, *"
            onTap={() => navigation.navigate("ServiceDetail", { providerId: provider.id })}
          >
            <image
              row={0}
              col={0}
              rowSpan={2}
              src={provider.avatar}
              className="w-16 h-16 rounded-full mr-4"
            />
            
            <label
              row={0}
              col={1}
              className="text-lg font-bold"
              text={provider.name}
            />
            
            <stackLayout row={1} col={1} orientation="horizontal">
              <label className="text-yellow-500 mr-1" text="⭐" />
              <label text={`${provider.rating} (${provider.reviews} reviews)`} />
            </stackLayout>
            
            <label
              row={2}
              col={0}
              colSpan={2}
              className="text-gray-600 mt-2"
              text={provider.description}
            />
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}