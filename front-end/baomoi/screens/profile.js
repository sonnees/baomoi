// Dev: sonnees

import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useContext, useState } from 'react';
import { useNavigation } from "@react-navigation/native"
import Slider from '@react-native-community/slider';
import { MyContext } from '../context';

export default function Profile() {
  let { configAccount, setConfigAccount, account, user, ipv4, publisher, setUser, setPublisher } = useContext(MyContext)
  let fontSizeO = configAccount.fontSize
  let navigation = useNavigation()
  let [fontSize, setSize] = useState(fontSizeO)

  return (
    <View style={styles.container} >
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1 }} onPress={()=> {navigation.navigate("Home")}}>
          <Image style={styles.header_con_arrow} source={require("../assets/arrow-png-white1.png")} />
        </TouchableOpacity>
        <Text style={{flex: 4, textAlign: 'center', marginRight: '22%', fontSize: fontSize, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>CÁ NHÂN</Text>
      </View>
      <View style={{flex:0.1}}></View>

      {/* infor profile */}
      <View style={styles.profile}>
        <Image style={styles.profile_icon} source={require("../assets/user.png")} />
        <View style={styles.profile_text}>
          <Text style={{ fontSize: fontSize - 5, color: '#46A096' }}>{account.role}</Text>
          { user != null && <Text style={{ fontSize: fontSize + 5, fontWeight: 'bold' }}>{user.fullName}</Text>}
          { publisher != null && <Text style={{ fontSize: fontSize + 5, fontWeight: 'bold' }}>{publisher.name}</Text>}
          <TouchableOpacity style={{ flex: 1, right: 0, position: 'absolute' }}onPress={() => { 
            setPublisher(null)
            setUser(null)
            navigation.navigate("Login") }}>
            <Image style={{ height: 23, width: 23, resizeMode: 'contain' }} source={require("../assets/check-out.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.3 }}></View>
      
      <View style={{ flex: 0.07, backgroundColor: 'black', opacity: 0.1, marginLeft: '-7%', marginRight: '-7%' }}></View>
      <View style={{ flex: 0.2 }}></View>

      {/* setting */}
      <View style={{ flex: 0.5, flexDirection: 'row' }}>
        <Text style={{ fontSize: fontSize, fontWeight: 'bold', color:'#46A096' }}>CÀI ĐẶT</Text>
        <TouchableOpacity style={{ flex: 1, right:0, position:'absolute'}}
          onPress={()=>{
            configAccount.fontSize = fontSize;
            setConfigAccount(configAccount)
            console.log(JSON.stringify(configAccount))
            fetch("http://" + ipv4 +":8080/api/v1/config-account/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(configAccount),
            }).then(oke=>{
              if (oke.ok) Alert.alert("Thành công","Mọi thay đổi đã được lưu.")
              else Alert.alert("Thất bại", "Lưu thất bại, hãy kiểm tra lại hoặc liên lạc với chúng tôi.")
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
            style={[{ width: 'auto', height: '100%', zIndex: 999 }]}
            minimumValue={16}
            maximumValue={20}
            step={2}
            value={fontSize}
            onValueChange={setSize}
            minimumTrackTintColor="#46A096"
            maximumTrackTintColor="#000000"/>
        </View>
      </View>
      <View style={{ flex: 10 }}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingLeft:'6%', paddingRight: '6%'},
  header: {marginLeft: '-7%', marginRight: '-7%', height: 34, backgroundColor: '#459ead', flexDirection: 'row'} ,
  header_con_arrow: { height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 },
  profile: { flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center' },
  profile_icon: { flex: 1, height: "80%", width: 'auto', resizeMode: 'contain', left: 0 },
  profile_text: { flex: 5, marginLeft: 10, justifyContent: 'center' },
});
