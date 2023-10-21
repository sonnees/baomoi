import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i_logo from '../assets/login/Logo_baomoi.png'

export default function Login() {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} >
      <View style={{ flex: 1 }}>
        <Image style={styles.logo} source={i_logo}/>
        <TextInput style={styles.input} placeholder='Số di động hoặc email'/>
        <TextInput style={styles.input} placeholder='Mật khẩu' secureTextEntry />
        <TouchableOpacity style={styles.btnLogin}>
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
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:'6%',
    paddingRight: '6%'
  },
  logo:{
    marginTop: 30,
    marginBottom: 20, 
    height: 28, 
    width: 'auto', 
    resizeMode: 'contain'
  },
  input: { 
    borderRadius: 3, 
    marginBottom: 10, 
    padding: 10, 
    fontSize: 16, 
    height: 38, 
    backgroundColor: '#F3F3F3' 
  },
  btnLogin: { 
    borderRadius: 3, 
    height: 38, 
    backgroundColor: '#005CC6', 
    justifyContent: 'center' 
  },
  textLogin: { 
    textAlign: 'center', 
    fontSize: 16, 
    fontWeight: 
    'bold', 
    color: '#FFFFFF'
  },
  contentAternativeLogin: { 
    alignItems: 'center',
    height: 15, 
    flexDirection: 'row', 
    marginBottom: 7, 
    marginTop: 7 
  },
  hrAternativeLogin: { 
    opacity: 0.5, 
    flex: 1, 
    height: 1, 
    backgroundColor: '#858587' 
  },
  textAternativeLogin: { 
    color: "#858587", 
    width: 50, 
    textAlign: 'center', 
    marginTop: -4 
  },
  btnNewAccount: { 
    borderRadius: 3, 
    height: 35, 
    backgroundColor: '#079F05', 
    justifyContent: 'center' 
  },
  textNewAccount: { 
    textAlign: 'center', 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#FFFFFF' 
  },
  textForgetPassword: { 
    textAlign: 'center', 
    marginTop: 7, 
    fontSize: 16, 
    color: "#858587" 
  }
});
