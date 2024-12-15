import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { ServiceGrid } from "../components/home/ServiceGrid";
import { WelcomeHeader } from "../components/home/WelcomeHeader";
import { useAuthStore } from "../store/auth";

export function HomeScreen({ navigation }: NavigationProps<"Home">) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <scrollView>
      <stackLayout className="p-4">
        <WelcomeHeader username={user?.name} />
        <ServiceGrid navigation={navigation} />
        
        <button
          className="btn btn-secondary p-4 mt-4 rounded"
          text="Logout"
          onTap={() => {
            logout();
            navigation.navigate("Login");
          }}
        />
      </stackLayout>
    </scrollView>
  );
}