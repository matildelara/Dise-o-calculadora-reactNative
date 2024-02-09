import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  // Estilos del botón
  boton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    borderWidth: 2,
    margin: 3, // Reducido el margen entre los botones
    alignItems: 'center',
    justifyContent: 'center',
    width: 70, // Tamaño fijo para los botones de los números
    height: 70, // Tamaño fijo para los botones de los números
  },
  textoB: {
    color: 'black',
    fontSize: 20,
  },
  logoB: {
    height: 35,
    width: 35,
    marginRight: 7,
  },
  // Estilos de la caja
  boxContainer: {
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 5,
    height: 70,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  TextBox: {
    color: 'black',
    fontSize: 30,
  },
  // Estilo del contenedor de los botones
  botonescontainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
