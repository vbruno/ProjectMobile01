import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participante } from "../../componente/Participante";
import { styles } from "./style";

export default function Principal() {
  function adicionarParticipante() {
    console.log("Func add Participante");
  }

  function removerParticipante() {
    console.log("Func remover Participante");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textEvento}>Nome do Evento</Text>
      <Text style={styles.textData}> 02 de Março de 2023 </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInputParticipant}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarParticipante}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textParticipante} >Participantes</Text>

      <Participante nome={"Bruna"} btnRemover={() => removerParticipante()} />
      <Participante nome={"Janja"} btnRemover={() => removerParticipante()} />
      <Participante nome={"Adriana"} btnRemover={() => removerParticipante()} />

    </View>
  );
}
