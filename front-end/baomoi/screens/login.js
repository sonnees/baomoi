// Dev: sonnees

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native"
import { MyContext } from '../context';
import { useContext, useState } from 'react';

export default function Login() {
  let navigation = useNavigation()
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError] = useState(false)
  let { setConfigAccount, setAccount, setPublisher, setUser, ipv4 } = useContext(MyContext)

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} >
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: '-10%', marginRight: '-10%', height: 34, backgroundColor: '#459ead', justifyContent:'center'}}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'white'}}>ĐĂNG NHẬP</Text>
        </View>
        <Image style={styles.logo} source={require("../assets/login/Logo_baomoi.png")}/>
        {/* alert error */}
        {error &&
          <View>
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 15, marginBottom: 10 }}>Vui lòng nhập đúng thông tin</Text>
          </View>
        }
        <TextInput style={styles.input} placeholder='Số di động hoặc email' onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholder='Mật khẩu' secureTextEntry onChangeText={setPassword}/>
        <TouchableOpacity style={styles.btnLogin}
          onPress={() => { 
            if (email === "" || password === ""){
              setError(true)
              return;
            }

            fetch("http://" + ipv4 +":8080/api/v1/account/login?gmail=" + email + "&password=" + password)
              .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json()
              })
              .then(account =>{
                if (account==null){
                  setError(true)
                  return;
                }
                  if (account.role === 'USER') setUser(account.users)
                  else setPublisher(account.publisher)
                  setConfigAccount(account.configAccount)
                  setAccount(account)
                  navigation.navigate("Home")
              })
              .catch(e => {
                setError(true)
                return;
              });
          }}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.contentAternativeLogin}>
          <View style={styles.hrAternativeLogin} />
          <Text style={styles.textAternativeLogin}>hoặc</Text>
          <View style={styles.hrAternativeLogin} />
        </View>
        <TouchableOpacity style={styles.btnNewAccount}>
          <Text style={styles.textNewAccount}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
        <Text style={styles.textForgetPassword}>Quên mật khẩu?</Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#fff',paddingLeft:'6%',paddingRight: '6%'},
  logo:{marginTop: 30,marginBottom: 20, height: 28, width: 'auto', resizeMode: 'contain'},
  input: { borderRadius: 3, marginBottom: 10, paddingLeft:20, fontSize: 16,  height: 38, backgroundColor: '#F3F3F3'},
  btnLogin: {  borderRadius: 3, height: 38, backgroundColor: '#005CC6', justifyContent: 'center' },
  textLogin: {  textAlign: 'center', fontSize: 16, fontWeight:'bold', color: '#FFFFFF' },
  contentAternativeLogin: { alignItems: 'center',height: 15, flexDirection: 'row', marginBottom: 7, marginTop: 7 },
  hrAternativeLogin: { opacity: 0.5, flex: 1, height: 1, backgroundColor: '#858587' },
  textAternativeLogin: { color: "#858587", width: 50, textAlign: 'center', marginTop: -4 },
  btnNewAccount: { borderRadius: 3,  height: 35, backgroundColor: '#079F05',justifyContent: 'center' },
  textNewAccount: { textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' },
  textForgetPassword: { textAlign: 'center', marginTop: 7, fontSize: 16, color: "#858587" }
});
