import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native"
import Slider from '@react-native-community/slider';
import { MyContext } from '../App';
import { useContext } from 'react';


export default function Profile() {
  let { configAccount, setConfigAccount, account, setAccount, ipv4, setIpv4, user, setUser, publisher, setPublisher } = useContext(MyContext)
  let fontSizeO = configAccount.fontSize
  let navigation = useNavigation()
  let [fontSize, setSize] = React.useState(fontSizeO)

  return (
    <View style={styles.container} >
      <View style={{ marginLeft: '-7%', marginRight: '-7%', height: 34, backgroundColor: '#459ead', flexDirection: 'row' }}>
        <TouchableOpacity style={{ flex: 1 }}
          onPress={()=> {
            navigation.navigate("Home")
          }}
        >
          <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9}} source={require("../assets/arrow-png-white1.png")} />
        </TouchableOpacity>
        <Text style={{ flex: 4 , textAlign: 'center',marginRight:'22%', fontSize: fontSize, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>CÁ NHÂN</Text>
      </View>
      <View style={{flex:0.1}}></View>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 10,alignItems:'center'}}>
        <Image style={{ flex: 1, height: "80%", width: 'auto', resizeMode: 'contain', left:0}} source={require("../assets/user.png")} />
        <View style={{ flex: 5, marginLeft:10, justifyContent:'center'}}>
          <Text style={{ fontSize: fontSize - 5, color: '#46A096' }}>{account.role}</Text>
          <Text style={{ fontSize: fontSize + 5, fontWeight: 'bold' }}>{user.fullName}</Text>
        </View>
      </View>
      <View style={{ flex: 0.3 }}></View>
      <View style={{ flex: 0.07, backgroundColor: 'black', opacity: 0.1, marginLeft: '-7%', marginRight: '-7%' }}></View>
      <View style={{ flex: 0.2 }}></View>
      <View style={{ flex: 0.5, flexDirection: 'row' }}>
        <Text style={{ fontSize: fontSize, fontWeight: 'bold', color:'#46A096' }}>CÀI ĐẶT</Text>
        <TouchableOpacity style={{ flex: 1, right:0, position:'absolute'}}
          onPress={()=>{
            configAccount.fontSize = fontSize;
            setConfigAccount(configAccount)
            console.log(JSON.stringify(configAccount))
            fetch("http://localhost:8080/api/v1/config-account/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(configAccount),
            });
          }}>
          <Image style={{height: 20, width: 20, resizeMode: 'contain'}} source={require("../assets/save.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.7, flexDirection: 'row', alignItems:'flex-end'}}>
        <Image style={{ flex: 1, height: "60%", width: 'auto', resizeMode: 'contain' }} source={require("../assets/text-size.png")} />
        <View style={{flex:5, marginLeft:12}}>
          <Text style={{ fontSize: fontSize, fontWeight: 'bold', color: '#46A096' }}>Cở chữ {fontSize}</Text>
        </View>
        <View style={{ flex: 5}}>
          <Slider
            style={{ width:'auto', height: '100%' }}
            minimumValue={16}
            maximumValue={20}
            step={2}
            value={fontSize}
            onValueChange={setSize}
            minimumTrackTintColor="#46A096"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
      <View style={{ flex: 10 }}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:'6%',
    paddingRight: '6%'
  }
});
