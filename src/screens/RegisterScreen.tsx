import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { useAuthStore } from "../store/auth";
import { showError } from "../utils/alerts";

export function RegisterScreen({ navigation }: NavigationProps<"Register">) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const register = useAuthStore(state => state.register);

  const handleRegister = async () => {
    if (!name || !email || !phone || !password) {
      showError("Please fill in all fields");
      return;
    }

    try {
      await register({ name, email, phone, password });
      navigation.navigate("Home");
    } catch (error) {
      showError("Registration failed");
    }
  };

  return (
    <scrollView>
      <stackLayout className="p-4">
        <label className="text-2xl font-bold mb-4">Register</label>
        
        <textField
          className="input mb-4 p-4 border rounded"
          hint="Full Name"
          text={name}
          onTextChange={(args) => setName(args.value)}
        />

        <textField
          className="input mb-4 p-4 border rounded"
          hint="Email"
          keyboardType="email"
          text={email}
          onTextChange={(args) => setEmail(args.value)}
        />

        <textField
          className="input mb-4 p-4 border rounded"
          hint="Phone"
          keyboardType="phone"
          text={phone}
          onTextChange={(args) => setPhone(args.value)}
        />

        <textField
          className="input mb-4 p-4 border rounded"
          hint="Password"
          secure={true}
          text={password}
          onTextChange={(args) => setPassword(args.value)}
        />

        <button
          className="btn btn-primary p-4 rounded mb-2"
          text="Register"
          onTap={handleRegister}
        />

        <button
          className="btn btn-secondary p-4 rounded"
          text="Back to Login"
          onTap={() => navigation.navigate("Login")}
        />
      </stackLayout>
    </scrollView>
  );
}