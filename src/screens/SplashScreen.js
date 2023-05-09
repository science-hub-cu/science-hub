import React, { useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const SplachScreen = ({ setIsLoading }) => {

  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const onAnimationFinish = () => {
    setIsLoading(false);
    setIsAnimationFinished(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
      <LottieView
        source={require("../assets/animations/splashAnimation.json")}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

export default SplachScreen;
