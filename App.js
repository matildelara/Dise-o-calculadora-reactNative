import { StyleSheet, Text, View } from 'react-native';
import { Calculadora } from './Componentes/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <Calculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
