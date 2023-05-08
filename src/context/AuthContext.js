import { getAuth, onAuthStateChanged } from "@firebase/auth";

const { useState, useEffect, useContext } = require("react");
const { createContext } = require("react");

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      console.log("-------Auth changed-----");
      console.log(user);
      setUser(user);
    });
    return unsubscribe;
  }, []);
  //   const signIn = (user) => setUser(user);
  //   const signOut = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
