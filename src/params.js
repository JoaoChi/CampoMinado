import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // proporção do cabecalho
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return width.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeigh = Dimensions.get('window').height
        const boardHeigh = totalHeigh * (1 - this.headerRatio)
        return Math.floor(boardHeigh / this.blockSize)
    }
}

export default params