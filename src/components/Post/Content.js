import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import Lightbox from "react-native-lightbox-v2";
import {
  PinchGestureHandler,
  State,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Pinchable from "react-native-pinchable";
import COLORS from "../../constants/colors";
import { event } from "react-native-reanimated";

const Content = ({ content = "", imageSource = "" }) => {
  const [imageExist, setIsImageExist] = useState(imageSource !== "");
  const scale = React.useRef(new Animated.Value(1)).current;

  const onZoomEvent = Animated.event([{ nativeEvent: { scale } }], {
    useNativeDriver: true,
  });
  const onZoomStatChange = (event) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.postContaner}>
      <Text style={styles.content}>{content}</Text>
      {imageExist && (
        <Lightbox underlayColor="black">
          <PinchGestureHandler
            onGestureEvent={onZoomEvent}
            onHandlerStateChange={onZoomStatChange}
          >
            <Animated.Image
              style={[styles.image, { transform: [{ scale }] }]}
              source={{
                uri: imageSource,
              }}
            />
          </PinchGestureHandler>
        </Lightbox>
      )}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    marginBottom: 9,
    color: COLORS.white,
    paddingHorizontal: "3%",
  },
});
