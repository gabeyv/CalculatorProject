import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

constructor() {
  super()
  this.state = {
    displayText:"",
    storedText:""
  }
  this.operations= ['+', '-', '*', '/']
}
calculateAnswer(){
  const text = this.state.displayText
  console.log(text, eval(text))
  this.setState({
    storedText: eval(text)
  })
  
  
}

buttonPressed(text){
  console.log(text)

  if(text == '='){

    return this.calculateAnswer()
  }
  this.setState({
    displayText: this.state.displayText+text
  })
}

operate(operation) {
  switch(operation){
    case 'C':
      this.setState({
        displayText:''
      })
      break
    case '+':
    case '-':
    case '*':
    case '/':
      const lastChar = this.state.displayText.split('').pop()
      if(this.operations.indexOf(lastChar) != -1) return
      if(this.state.text == "") return
      this.setState({
        displayText: this.state.displayText + operation
      })
  }
}

  render(){

  return (
    <View style={styles.container}>
      <View style={styles.topbar}></View>
      <View style={styles.numberDisplay}>
        <Text style={styles.displayText}>{this.state.displayText}{this.state.storedText}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.operate('C') } style={styles.button}>
            <Text style={styles.buttonText} >C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.operate('/') } style={styles.button}>
            <Text style={styles.buttonText} >/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.operate('*') } style={styles.button}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(7) } style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(8) } style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(9) } style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.operate('-') } style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(4) } style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(5) } style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(6) } style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.operate('+') } style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(1) } style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(2) } style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(3) } style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('=') } style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(0) } style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('.') } style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    flex: 1,
    backgroundColor: 'red',
  },
  numberDisplay: {
    flex: 2,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'flex-end',
  
  },
  buttonContainer: {
    flex: 3,
  },
  rows: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'yellow',
    justifyContent:'space-around',
    alignitems:'center',
  },
  button:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  keepLeftButton:{
    flex:1,
    backgroundColor:'white',
    alignItems:'left',
    justifyContent:'center',
  },
  topRow:{
    backgroundColor:'pink',
    flex:1,

  },
  displayText:{
    fontSize:20,
    color:'black',
  },
  buttonText:{
    fontSize:20,
  }
});
