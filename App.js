import React from "react";
import "./src/config/firebaseConfig";
import { useFonts } from "expo-font";
import { I18nManager, StatusBar } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import MainNavigator from "./src/navigation/MainNavigator";
import { NotificationProvider } from "./src/context/NotificationContext";
import { persistor, store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

//RTL
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const App = () => {
  // const [isNetConnected, setIsNetConnected] = useState(false);
  // state = { rtl: false };
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);
  //     setIsNetConnected(state.isConnected);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []); // add empty array to run only once

  /******************* Loading resourses **************************/
  const [fontLoaded] = useFonts({
    majalla: require("./src/assets/fonts/majalla.ttf"),
    Trebuchet: require("./src/assets/fonts/Trebuchet-MS-Italic.ttf"),
    TrebuchetMS: require("./src/assets/fonts/Trebuchet-MS-Italic.ttf"),
  });
  if (!fontLoaded) return null;

  // if (!isNetConnected) {
  //   return <RetryScreen />;
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle="auto"/>
        <NotificationProvider>
          <MainNavigator></MainNavigator>
        </NotificationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
