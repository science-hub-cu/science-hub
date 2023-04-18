const { useState } = require("react");
const { createContext } = require("react");

export const AuthContext = createContext();

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const signIn = (user) => setUser(user);
//   const signOut = () => setUser(null);

//   return (
//     <AuthContext.Provider value={(user, signIn, signOut)}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
