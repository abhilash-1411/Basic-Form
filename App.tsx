

import React, { useState } from 'react';

import {
  
  StyleSheet,
  Text,
  Button,

  TextInput,

  View,
} from 'react-native';

const App=()=> {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [display,setDsiplay]=useState(false)

  const resetFormData=()=>{ 
    setDsiplay(false);
    setEmail(" ");
    setName(" ");
    setPassword(" ");
  }
 

  return (
    <View>
      <Text>Basic Form</Text>
      <TextInput 
      style={styles.textInput}
      placeholder='Enter User Name'
      onChangeText={(text) =>setName(text)}
      value={name}
       />
        <TextInput 
      style={styles.textInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChangeText={(text) =>setPassword(text)}
      value={password}
       />
        <TextInput 
      style={styles.textInput}
      placeholder='Enter User Email'
      onChangeText={(text) =>setEmail(text)}
      value={email}
       />
       <View style={{marginBottom:10}}>

       <Button color='green' title='Print Details' onPress={()=>setDsiplay(true)}/>
       </View>
       <Button title='Clear Details' onPress={resetFormData}/>
       <View>
        {
          display?
          <View>
            <Text style={{fontSize:20}}>User Name is :{name}</Text>
            <Text style={{fontSize:20}}>User Password is :{password}</Text>
            <Text style={{fontSize:20}}>User Email is :{email}</Text>
            </View>:null
        }
       </View>
    </View>
    
       
  );
}

const styles = StyleSheet.create({
 textInput:{
  fontSize:18,
  color:'red',
  borderWidth:2,
  borderColor:'blue',
  margin :10

 }
  
});

export default App;
