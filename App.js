import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import mineField from './src/components/mineField';
import { createdMinedBoard } from './src/functions';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state =  this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createdMinedBoard(rows, cols, this.minesAmount),
    }
  }

  render() {
    return (

      <View style={styles.sectionContainer}>
        <Text style={styles.welcome}>Iniciando o mines!</Text>
        <Text style={styles.introductions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={4} />
        <Field opened nearMines={7} />
        <Field opened nearMines={3} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged opened />
        <Field flagged />
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


