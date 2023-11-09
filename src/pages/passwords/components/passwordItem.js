import React from "react";

import { Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E0E0E",
    padding: 14,
    width: "95%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    marginLeft: "2.5%",
  },
  text: {
    color: "#FFF",
  },
});
