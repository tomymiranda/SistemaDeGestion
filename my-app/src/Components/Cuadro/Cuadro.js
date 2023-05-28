import React from 'react';
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const Cuadro = ({ objetos }) => {
  
  const styles = StyleSheet.create({
    cuadro: {
      flex: 1,
      padding: 5,
      flexDirection: 'column',
    },
    row:{
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10,
    },
    column: {
      flexDirection: 'column',
    },
    item: {
      backgroundColor: 'white',
      padding: 5,
      margin: 5,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'flex-start'
    },
    spaceRight:{
      marginRight: 2,
    },
    border:{
     
      borderColor: '#000',
      borderStyle: 'solid',
      borderTopWidth: '2px',
    },
    letra:{
      fontSize: 12,
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10,
    },
    total: {
      backgroundColor: 'white',
      padding: 20,
      margin: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignSelf: 'flex-end',
    },
  });

      return (
        <View style={styles.cuadro}>
          <View style={[styles.column,styles.border]}>
          {objetos.map(objeto => (
            <View style={[styles.row,styles.letra]} key={objeto.producto}>
            <Text style={[styles.spaceRight]}>Producto: {objeto.producto}</Text>
            <Text style={[styles.spaceRight]}>Cantidad: {objeto.cantidad}</Text>
            <Text style={[styles.spaceRight]}>Precio: ${objeto.precioParcial}</Text>
            <Text style={[styles.spaceRight]}>Descuento: {objeto.descuento}%</Text>
            <Text style={[styles.spaceRight]}>Total: ${objeto.precioFinal}</Text>
          </View>
          ))}
          </View>
        </View>
      );
    };

export default Cuadro;