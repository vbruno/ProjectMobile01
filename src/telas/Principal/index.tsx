import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participante } from "../../componente/Participante";
import { styles } from "./style";

export default function Principal() {

  const [participantes, setParticipantes] = useState<String[]>([])
  const [participante, setParticipante] = useState("")

  function adicionarParticipante() {

    if (participantes.includes(participante.trim())) {
      return console.log(participante, "- encontrado");
    } else if (participante == "" || participante == null) {
      return console.log("encontrado vazio ou null");
    } else {
      setParticipantes(prevState => [...prevState, participante]);
    }

  }

  function removerParticipante(nome: string) {

    setParticipantes(prevState => prevState.filter(participante => participante !== nome));

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
          onChangeText={setParticipante}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarParticipante}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textParticipante} >Participantes</Text>

      <ScrollView showsVerticalScrollIndicator={false} >
        {
          participantes.map((participante, index) => (
            <Participante
              key={index}
              nome={String(participante)}
              btnRemover={() => removerParticipante(String(participante))} />
          ))
        }
      </ScrollView>


    </View>
  );
}
