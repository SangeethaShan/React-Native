import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: ''
    }
    
  }
  buttonPressed(text) {
    //TODO: Get username and Password
    /*  console.log(this._username, this._password);
     const username = this._username.lastNativeText
     const password = this._password.lastNativeText 
    console.log(this.username, this.password)*/

     console.log(text);
     this.setState({
       resultText: this.state.resultText + text
     })
  }
  render() {
    let rows = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']]
    for(let i=0; i< 4; i++){
      let row =[]
      for(let j=0; j<3; j++){
        row.push( <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
         <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push( <View style={styles.row}>{row}</View>)
    }

    let operations = ['+', '-', '*', '/']
    let ops = []
    for(let i=0; i<4; i++){
      ops.push(<TouchableOpacity style={styles.btn}>
        <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>10*10</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
             {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  btntext: {
    fontSize: 30
  },  
  result: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    color: '#2c3e50',
    fontSize: 35  
  },
  calculation: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    color: '#34495e',
    fontSize: 20
  },
  buttons: {    
    flex: 7,
    flexDirection: 'row'
   },
  numbers: {
    flex: 3,    
    backgroundColor: '#132B38',
    color: '#95a5a6'   
  },  
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#000000',
    color: '#ffffff'
  }
});
