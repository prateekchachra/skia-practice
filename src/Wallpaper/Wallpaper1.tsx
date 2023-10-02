import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Canvas,
  Group,
  LinearGradient,
  Fill,
  vec,
  Rect,
  rect,
  interpolate,
  Mask,
  Shadow,
  Turbulence,
} from "@shopify/react-native-skia";
import React from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { Routes } from "../Routes";

const length = 9;
const STRIPES = new Array(length).fill(0).map((_, i) => i);
// ["#5a3ec3", "#eba5c5", "#e1d4b7", "#e9b74c", "#cf1403"]

export const Wallpaper = () => {
  const { height, width: wWidth } = useWindowDimensions();
  const width = wWidth / length;
  const origin = vec(width / 2, height / 2);
  const { goBack } = useNavigation<StackNavigationProp<Routes, "Examples">>();
  return (
    <Pressable onPress={()  => goBack()} style={{flex: 1}}>
    <Canvas style={{ flex: 1 }}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={["#1A0049", "#2F0604"]}
        />
      </Fill>
      <Group>
      <LinearGradient start={vec(0,0)} end={vec(0, height)}
      colors={["#5a3ec3", "#eba5c5", "#e1d4b7", "#e9b74c", "#cf1403"]} />
      <Shadow dx={0} dy={0} blur={20} color='black'/>
      {STRIPES.map((_, i) => {
        return (<Group origin={origin} transform={[{scaleY: interpolate(i, [0, (length - 1) / 2, length - 1], [1, 0.61, 1])}]} >
          <Mask mask={<Rect rect={rect(i * width, 0, width, height)}>
          <LinearGradient start={vec(0,0)} end={vec(0, height)} colors={['transparent', 'black', 'black', 'transparent']}></LinearGradient>
        </Rect>}><Rect rect={rect(i * width, 0, width, height)} key={i}/>
        </Mask>
        </Group>)
      })}
      </Group>
      <Fill blendMode={"softLight"}>
         <Turbulence freqX={1} freqY={1} octaves={3} />
      </Fill>
    </Canvas>
    </Pressable>
  );
};
