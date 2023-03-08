import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  textEvento: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    fontFamily: "Roboto_300Light"
  },
  textData: {
    color: "#6B6B6B",
    fontSize: 16,
    fontFamily: "Roboto_300Light"
  },
  textInputParticipant: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    fontFamily: "Roboto_300Light"
  },
  botao: {
    width: 56,
    height: 56,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  textParticipante: {
    fontFamily: "Roboto_300Light",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    color: "#FDFCFE",
    marginBottom: 16,
  }

});
