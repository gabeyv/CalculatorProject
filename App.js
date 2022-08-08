import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





class CalculatorScreen extends Component {

constructor() {
  super()
  this.state = {
    displayText:"",
    storedText:"",
    divisonButtonPressed: false,
    multiplicationButtonPressed: false,
    additionButtonPressed: false,
    subtractionButtonPressed: false,
    switchValue:false,
    expanded:false,
    history:[],
    splitHistory:''
  }
  this.operations= ['+', '-', '*', '/']

}


expandComponent(){
this.setState({
expanded: !this.state.expanded
})
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
    history:this.state.history+text+'='+eval(text)+'\n'
  })
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
  }
  this.setState({
    storedText: this.state.storedText+text,
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

displayHistory(){
    const splitList= this.state.history.split(',').join('\n')
    this.setState({splitHistory:splitList})
}



  render(){

  return (
    <View style={styles.container}>
      <View style={this.state.switchValue === true? styles.altTopbar : styles.topbar}>
        <TouchableOpacity style={{flex:1, }} onPress= {() => this.expandComponent()}>
          <Image source={require("./images/menuIcon.png")} style={{height:'50%', width:undefined, aspectRatio:1, position:'absolute', bottom:10, left:10}}/>
        </TouchableOpacity>
        <View style={{position:'absolute', bottom:10, right:10}}>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        value={this.state.switchValue}
        onValueChange={(switchValue) => this.setState({switchValue})}
      />
      </View>
      </View>
      <View style={this.state.expanded === true? styles.expandedView :styles.shrinkView}>
      <ScrollView >
        <Text style={styles.buttonText}>{this.state.history}</Text>
      </ScrollView>
      </View>
      <View style={this.state.switchValue === true? styles.altNumberDisplay : styles.numberDisplay}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.displayText}>{this.state.storedText}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <View style={this.state.switchValue === true? styles.altRows : styles.rows}>
          <TouchableOpacity onPress= {() => this.operate('C') } style={this.state.switchValue === true? styles.altClearButton : styles.clearButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText} >C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('/'); this.changeDivisonColor()} } style={this.state.divisonButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText} >/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('*'); this.changeMultiplicationColor()}} style={this.state.multiplicationButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.switchValue === true? styles.altRows : styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(7) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(8) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(9) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>9</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress= {() => {this.operate('-'); this.changeSubtractionColor()} } style={this.state.subtractionButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.switchValue === true? styles.altRows : styles.rows}>
        <TouchableOpacity onPress= {() => this.buttonPressed(4) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(5) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(6) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => {this.operate('+'); this.changeAdditionColor()} } style={this.state.additionButtonPressed === true? styles.pressedOperationButton : styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.switchValue === true? styles.altRows : styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(1) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(2) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed(3) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('=') } style={styles.operationButton}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.operationButtonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.switchValue === true? styles.altRows : styles.rows}>
          <TouchableOpacity onPress= {() => this.buttonPressed(0) } style={this.state.switchValue === true? styles.altButton : styles.button}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.buttonPressed('.') } style={this.state.switchValue === true? styles.altButton : styles.button}>
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
    borderWidth:10,
    flexDirection:'row'
    
  },
  altTopbar: {
    flex: 1,
    backgroundColor: 'rgb(56,206,213)',
    borderBottomColor:'rgb(50,38,80)',
    borderWidth:10,
    flexDirection:'row'
    
  },
  expandedView:{
    width:'100%',
    height:'50%',
    backgroundColor:'black'
  },
  shrinkView:{
    width:'100%',
    height:0
  },
  numberDisplay: {
    flex: 2,
    backgroundColor:'rgb(67,50,110)',
    justifyContent:'center',
    alignItems:'flex-end',
    borderBottomColor:"white",
    borderWidth:2,
  
  },
  altNumberDisplay: {
    flex: 2,
    backgroundColor:'rgb(56,213,142)',
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
  altRows: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'rgb(110,147,116)',
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
  altButton:{
    backgroundColor:'rgb(110,147,116)',
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
  altClearButton:{
    backgroundColor:'rgb(110,147,116)',
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

export default CalculatorScreen;