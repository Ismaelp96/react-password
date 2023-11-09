import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

import useStorage from "../../hooks/useStorage";

import * as Clipboard from "expo-clipboard";

export function ModalPassword({ password, handleClose }) {
  const { getItem, saveItem, removeItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);
    alert("Senha copiada");

    handleClose();
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>
        <Pressable style={styles.innerPasword} onLongPress={handleCopyPassword}>
          <Text style={styles.textInnerPassword}>{password}</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleClose}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleCopyPassword}
          >
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPasword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  textInnerPassword: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonArea: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 8,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginVertical: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
