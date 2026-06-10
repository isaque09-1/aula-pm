import {router} from "expo-router":
import { Text, View, StyleSheet, Touchable, TouchableOpacicty } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HOME </Text>
      <Text style={styles.subtitulo}>Bem vindo ao nosso APP!</Text>
      <TouchableOpacicty style={styles.Botao} onPrass={router.push('/detalhes')}>
      <Text style={styles.textoBotao}><Detalhes></Text>
      </TouchableOpacicty>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
