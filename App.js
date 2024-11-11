import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render(){
    return (
    
      <View style={styles.sectionContainer}>
        <Text style={styles.welcome}>Iniciando o mines!</Text>
        <Text style={styles.introductions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={4} />
        <Field opened nearMines={7} />
        <Field opened nearMines={3} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


