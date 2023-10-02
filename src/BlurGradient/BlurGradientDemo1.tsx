import {
  Canvas,
  useImage,
  ImageShader,
  vec,
  RadialGradient,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { Title } from "./Title";
import { BlurGradient } from "./BlurGradient";

const { width, height } = Dimensions.get("window");

export const BlurGradientDemo = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const image = useImage(require("./zurich3.jpg"));

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <BlurGradient>
          <ImageShader
            image={image}
            x={0}
            y={0}
            width={width}
            height={height}
            fit="cover"
          />
        </BlurGradient>
        <Title />
      </Canvas>
    </View>
  );
};
