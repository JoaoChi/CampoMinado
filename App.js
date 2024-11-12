import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params';
import { createdMinedBoard, 
  cloneBoard, 
  openField, 
  hasExplosion, 
  wonGame, 
  showMines, 
  invertFlag, 
  flagsUsed } from './src/functions';
import MineField from './src/components/MineField'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()

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
      board: createdMinedBoard(rows, cols, this.minesAmount()) || [],
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu tongooo!!!!!', 'kkkkkkkkkkkkkkkk')
    }

    if (won) {
      Alert.alert('Ganho ihu vamooo time', 'vamo gremioo')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Ganho ihu vamooo time', 'vamo gremioo')
    }

    this.setState({ board, won })
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.welcome}>Iniciando o mines!</Text>
        <Text style={styles.introductions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField} 
            onSelectField={this.onSelectField}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});


