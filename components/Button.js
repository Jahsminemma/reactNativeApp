import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        position: "absolute",
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{ height: 24, width: 24 }}
      />
    </TouchableOpacity>
  );
};


export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color:COLORS.white,
        textAlign: "center",
        marginTop:10
      }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}

