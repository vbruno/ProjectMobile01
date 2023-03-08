import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textParticipante: {
    marginLeft: 16,
    fontFamily: "Roboto_300Light",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FCFDFE",
  },
  botao: {
    width: 56,
    height: 60,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },


});
