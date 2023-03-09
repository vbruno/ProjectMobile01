import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface Props {
  nome: string
  btnRemover: () => void
}

export function Participante({ nome, btnRemover }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textParticipante} > {nome} </Text>
      <TouchableOpacity style={styles.botao} onPress={btnRemover}>
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
