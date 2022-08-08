import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

export default class App extends Component {

constructor() {
  super()
  this.state = {
    displayText:"",
    storedText:"",
    divisonButtonPressed: false,
    multiplicationButtonPressed: false,
    additionButtonPressed: false,
    subtractionButtonPressed: false,
  }
  this.operations= ['+', '-', '*', '/']
}


changeDivisonColor(){
  if(!this.state.multiplicationButtonPressed & !this.state.divisonButtonPressed & !this.state.additionButtonPressed &!this.state.subtractionButtonPressed){
    this.setState({divisonButtonPressed:true})
  } 
}
changeMultiplicationColor(){
  if(!this.state.multiplicationButtonPressed & !this.state.divisonButtonPressed & !this.state.additionButtonPressed &!this.state.subtractionButtonPressed){
    this.setState({multiplicationButtonPressed:true})
  } 
}
changeAdditionColor(){
  if(!this.state.multiplicationButtonPressed & !this.state.divisonButtonPressed & !this.state.additionButtonPressed &!this.state.subtractionButtonPressed){
    this.setState({additionButtonPressed:true})
  } 
}
changeSubtractionColor(){
  if(!this.state.multiplicationButtonPressed & !this.state.divisonButtonPressed & !this.state.additionButtonPressed &!this.state.subtractionButtonPressed){
    this.setState({subtractionButtonPressed:true})
  } 
}

calculateAnswer(){
  const text = this.state.storedText
  this.setState({
    storedText: eval(text)
  })
  
  
}

validate(){
  const text = this.state.storedText
  switch(text.slice(-1)){
    case '+':
    case '-':
    case '*':
    case '/':
      return false
  }
  return true
}

clearDisplay() {
  this.setState({displayText:''},
 console.log("clear")
  )
}

buttonPressed(text){
  this.setState({
    divisonButtonPressed:false,
    multiplicationButtonPressed: false,
    additionButtonPressed: false,
    subtractionButtonPressed: false,
  })

  if(text == '='){

    return this.validate() && this.calculateAnswer()
  }
  const lastChar = this.state.storedText.split('').pop()
  if(this.operations.indexOf(lastChar) != -1) {

    this.setState({displayText:''}, () => console.log(this.state.displayText))
  }
  this.setState({
    storedText: this.state.storedText+text,
    displayText: this.state.displayText+text
  })
}

operate(operation) {
  switch(operation){
    case 'C':
      this.setState({
        storedText:'',
        displayText:'',
        divisonButtonPressed: false,
        multiplicationButtonPressed: false,
        additionButtonPressed: false,
        subtractionButtonPressed: false,

      })
      break
    case '+':
    case '-':
    case '*':
    case '/':
      const lastChar = this.state.storedText.split('').pop()
      if(this.operations.indexOf(lastChar) != -1) return
      if(this.state.text == "") return
      this.setState({
        storedText: this.state.storedText + operation
      })
  }
}

  render(){

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={{flex:1, }}>
          <Image source={require("./images/menuIcon.png")} style={{height:'50%', width:undefined, aspectRatio:1, position:'absolute', bottom:10, left:10}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.numberDisplay}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.displayText}>{this.state.storedText}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.operate('C') } style={styles.clearButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText} >C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('/'); this.changeDivisonColor()} } style={this.state.divisonButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText} >/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('*'); this.changeMultiplicationColor()}} style={this.state.multiplicationButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(7) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(8) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(9) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>9</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress= {() => {this.operate('-'); this.changeSubtractionColor()} } style={this.state.subtractionButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(4) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(5) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(6) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('+'); this.changeAdditionColor()} } style={this.state.additionButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(1) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(2) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(3) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('=') } style={styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(0) } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('.') } style={styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>.</Text>
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
    backgroundColor: 'rgb(100,83,144)',
    borderBottomColor:'rgb(50,38,80)',
    borderWidth:10
    
  },
  numberDisplay: {
    flex: 2,
    backgroundColor:'rgb(67,50,110)',
    justifyContent:'center',
    alignItems:'flex-end',
    borderBottomColor:"white",
    borderWidth:2,
  
  },
  buttonContainer: {
    flex: 3,
  },
  rows: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'rgb(67,50,110)',
    justifyContent:'space-around',
    alignitems:'center',
    paddingTop:3
  },
  button:{
    backgroundColor:'rgb(67,50,110)',
    alignItems:'center',
    justifyContent:'center',
    height:undefined,
    width:'23%',
    borderRadius:'50%',
    padding:10,
    borderColor:'white',
    borderWidth:2,
  },
  operationButton:{
    backgroundColor:'rgb(250,214,82)',
    alignItems:'center',
    justifyContent:'center',
    height:undefined,
    width:'23%',
    borderRadius:'50%',
    padding:10,

  },
  clearButton:{
    backgroundColor:'rgb(67,50,110)',
    alignItems:'center',
    justifyContent:'center',
    height:undefined,
    width:'23%',
    borderRadius:'50%',
    padding:10,
    borderColor:'rgb(250,214,82)',
    borderWidth:2,
  },
  pressedOperationButton:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:undefined,
    width:'23%',
    borderRadius:'50%',
    padding:10,
    borderColor:'white',
    borderWidth:2,
  },
  displayText:{
    fontSize:30,
    color:'white',
  },
  buttonText:{
    fontSize:30,
    color:'white'
  },
  operationButtonText:{
    fontSize:20,
    color:'rgb(67,50,110)'
  }
});
