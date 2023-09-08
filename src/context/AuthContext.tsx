import React, { ReactNode, useContext, useState } from "react";

const AuthContext = React.createContext(undefined as any);

export default function AuthProvider({ children }: { children?: ReactNode }) {
  const [user, setUser] = useState({ name: "Harsh Arora" });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
