import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

export function Participante() {
  return (
    <View style={styles.container}>
      <Text style={styles.textParticipante} > Participante  </Text>
      <TouchableOpacity style={styles.botao} >
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
