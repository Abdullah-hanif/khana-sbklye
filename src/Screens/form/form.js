import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,Text, View,Image, TextInput,Button,TouchableOpacity,value} from "react-native";
import {Picker} from '@react-native-picker/picker';
export default function App(Navigation) {
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [cnicno, setCnicNo] = useState("");
  const [dob, setDob] = useState("");
  const [family, setFamily] = useState("");
//   const [pickervalue, setPickerValue] = useState("javascript");
  
 
  return (
    <View style={styles.container}>
      <Image style={styles.image } source={require("../../../assets/khanalogo.png") } />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Father Name."
          placeholderTextColor="#003f5c"
          onChangeText={(fathername) => setFatherName(fathername)}
         
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="CNIC NUMBER"
          placeholderTextColor="#003f5c"
          onChangeText={(cnicno)  => setCnicNo(cnicno)}
          value={Number}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date Of Birth"
          placeholderTextColor="#003f5c"
          onChangeText={(dob) => setDob(dob)}
          value={Number}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="No. Of Family Members "
          placeholderTextColor="#003f5c"
          onChangeText={(family) => setFamily(family)}
          value={Number}
          keyboardType="numeric"
        />
      </View>

                            {/* dropdown picker

                           <View style={styles.inputView}>
                               <picker style={styles.TextInput}
                               selectedValue={pickervalue}
                               onValueChange={(itemValue) =>
                                 setPickerValue(itemValue)>

                               <Picker.Item label="Java" value="java" />
                               <Picker.Item label="2" value="2" />
                               <Picker.Item label="4" value="4" />
                                   </picker>

                          </View>  */}

 
      {/* <TouchableOpacity>
    
        <Text> BACK TO LOGIN </Text>

      </TouchableOpacity>
     
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 100,
    height: 200,
    width: 150
  },
 
  inputView: {
    backgroundColor: "#76B947",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#76B947",
  },


  
});