import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const YourNotVerified = () => {
  return (
    <View
      style={{
        backgroundColor: "#2B2D31",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "white", marginBottom: 20 }}>
        YOU ARE NOT VERIFIED :(
      </Text>
      <Svg
        width={190}
        height={190}
        viewBox="0 0 190 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          cx={95}
          cy={95}
          r={72.25}
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M66.9214 133.827C69.8423 131.298 73.9841 129.243 78.8895 127.827C83.8028 126.409 89.3578 125.667 95.0002 125.667C100.643 125.667 106.198 126.409 111.111 127.827C116.016 129.243 120.158 131.298 123.079 133.827"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Circle
          cx={71.2502}
          cy={79.1667}
          r={8.16667}
          fill="white"
          stroke="white"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <Circle
          cx={118.75}
          cy={79.1667}
          r={8.16667}
          fill="white"
          stroke="white"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={{ fontSize: 16, color: "white", marginTop: 20 }}>
        ASK YOUR FRIEND VERIFY YOU
      </Text>
    </View>
  );
};

export default YourNotVerified;
