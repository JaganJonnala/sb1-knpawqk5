import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { useAuthStore } from "../store/auth";

export function LoginScreen({ navigation }: NavigationProps<"Login">) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate("Home");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <stackLayout className="p-4">
      <label className="text-2xl font-bold mb-4">Login</label>
      
      <textField
        className="input mb-4 p-4 border rounded"
        hint="Email"
        keyboardType="email"
        text={email}
        onTextChange={(args) => setEmail(args.value)}
      />

      <textField
        className="input mb-4 p-4 border rounded"
        hint="Password"
        secure={true}
        text={password}
        onTextChange={(args) => setPassword(args.value)}
      />

      <button
        className="btn btn-primary p-4 rounded"
        text="Login"
        onTap={handleLogin}
      />

      <button
        className="btn btn-secondary p-4 mt-2 rounded"
        text="Register"
        onTap={() => navigation.navigate("Register")}
      />
    </stackLayout>
  );
}