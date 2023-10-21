import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../screens/constants/colors";

const Button = (props) => {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedBgColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedBgColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{ fontSize: 18, fontWeight: "bold", ...{ color: textColor } }}
      >
        {" "}
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    top: 70,
    paddingVertical: 20,
    borderColor: COLORS.primary,
    borderWidth: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
