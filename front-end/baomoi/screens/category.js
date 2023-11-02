import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native"

export default function Category() {
  let navigation = useNavigation()
  let route = useRoute()
  let { configAccount, account } = route.params
  let fontSize = configAccount.fontSize
  let DATA = [
    
    {
      id: 'MOI',
      name: 'Mới',
      img: require('../assets/category/b_MOI.jpg')
    },
    {
      id:'AMTHUC',
      name: 'Ẩm thực',
      img:require('../assets/category/b_AMTHUC.jpg')
    },
    {
      id: 'BONGDA',
      name: 'Bóng đá',
      img: require('../assets/category/b_BONGDA.jpg')
    },
    {
      id: 'CONGNGHE',
      name: 'Công nghệ',
      img: require('../assets/category/b_CONGNGHE.jpg')
    },
    {
      id: 'DOCLA',
      name: 'Độc lạ',
      img: require('../assets/category/b_DOCLA.jpg')
    },
    {
      id: 'GIAITRI',
      name: 'Giải trí',
      img: require('../assets/category/b_GIAITRI.jpg')
    },
    {
      id: 'GIAODUC',
      name: 'Giáo dục',
      img: require('../assets/category/b_GIAODUC.jpg')
    },
    {
      id: 'KINHTE',
      name: 'Kinh tế',
      img: require('../assets/category/b_KINHTE.jpg')
    },
    {
      id: 'PHAPLUAT',
      name: 'Pháp luật',
      img: require('../assets/category/b_PHAPLUAT.jpg')
    },
    {
      id: 'SUCKHOE',
      name: 'Sức khỏe',
      img: require('../assets/category/b_SUCKHOE.jpg')
    },
    {
      id: 'THEGIOI',
      name: 'Thế giới',
      img: require('../assets/category/b_THEGIOI.jpg')
    },
    {
      id: 'TINHYEU',
      name: 'Tình yêu',
      img: require('../assets/category/b_TINHYEU.jpg')
    },
    {
      id: 'XE',
      name: 'Xe',
      img: require('../assets/category/b_XE.jpg')
    }
  ]
  

  let Item = ({i}) =>(
    <View style={{width:'50%', height:105, margin:7, flex:1}}>
      <TouchableOpacity style={{ flex: 1, shadowOffset:{width:1, height:0}, shadowOpacity:0.5, shadowRadius:4, shadowColor:'black', borderRadius:5}}
        onPress={()=>{
          navigation.navigate("Home", { catagory:i.id })
        }}
      >
        <View style={{ height: '100%', width: "100%", borderRadius: 5, backgroundColor:'black', position:'absolute', zIndex:9, opacity:0.3}}></View>
        <Image style={{ height: '100%', width: "100%", borderRadius: 5 }} source={i.img}></Image>
        <Text style={{ position: 'absolute', color: 'white', fontSize: fontSize - 2 , zIndex:99, fontWeight:'bold', bottom:0, margin:10}}>{i.name}</Text>
      </TouchableOpacity> 
    </View>
  )

  return (
    <View style={styles.container} >
      <View style={{marginLeft: '-10%', marginRight: '-10%', height: 34, backgroundColor: '#459ead', flexDirection:'row'}}>
        <Text style={{flex:3, marginLeft: "9%", textAlign: 'left', fontSize: fontSize, fontWeight: 'bold', color: 'white', alignSelf:'center'}}>CHUYÊN MỤC</Text>
        <TouchableOpacity style={{ flex: 1}}>
          <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 }} source={require("../assets/arrow-png-white.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Text style={{ color: '#46A096', fontSize: fontSize - 4 }}>
          Mời bạn chọn chuyên mục muốn đọc
        </Text>
      </View>
      <FlatList style={{ flex: 1, marginLeft: -7, marginRight: -7 }}
        data={DATA}
        renderItem={({ item }) => <Item i={item} />}
        numColumns={2} />
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
