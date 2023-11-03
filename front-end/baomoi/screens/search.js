import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Item = ({ item }) => {
  let fontSize=16
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hour = new Date().getHours(); //Current Year
    var minute = new Date().getMinutes(); //Current Year
    var second = new Date().getSeconds(); //Current Year
    setCurrentDate([year, month, date, hour, minute, second]);
  }, []);
  // console.log(item.imageURL);
    return (
        
        <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id: item.id, tg: checkDay(currentDate, item.postTime)+''}   )}>        
          <View style={{flexDirection:'row', justifyContent:'space-around', height: 120,}}>
            <View style={{flex:4, alignItems:'center'}}>
                <Image style={{flex:1, height: 120, width: 140, borderRadius: 5, marginVertical:10}} source={{uri: item.imageURL}}/>
                {/* <Image style={{flex:1, height: 120, width: 140, resizeMode:'contain'}} source={require('../assets/image_article/image_article1.jpg')}></Image> */}
            </View>
            <View style={{flex:6, padding:10, marginLeft:10}}>
                <SafeAreaView style={{height: fontSize*3+20}}>
                  <Text numberOfLines={3} ellipsizeMode="tail" style={{flex:3, fontSize:fontSize}}>{item.title}</Text>
                </SafeAreaView>

                <View style={{flexDirection:'row', alignContent:'center', flex:1, position:'absolute', bottom:10}}>
                  <Image style={{height: 20, width: 50, resizeMode:'contain', alignSelf:'flex-start', marginRight:10}} source={{uri: item.imageURLBrand}}/>
                  <Text >• {checkDay(currentDate, item.postTime)}</Text>
                </View>

                {/* <Image style={{height: 10, width: 50, resizeMode:'contain', alignSelf:'flex-start'}} source={{uri: item.imageURLBrand}}/> */}
                {/* <Text numberOfLines={3} ellipsizeMode="tail">{item.title}</Text> */}
                {/* <Image style={{height: 40,width: 40, resizeMode:'contain'}} source={require('../assets/publisher/dantri.png')}/> */}
            </View>
          </View>
        </TouchableOpacity>
        
    );
  };

export default function Search() {
  let fontSize =16;
  const navigation = useNavigation();

  const [data, setData] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:8080/api/v1/article-page/article-new?page=0&size=3")
      .then(response => response.json())
      .then(json => setData(json.content));
  }, []);

  // http://localhost:8080/api/v1/article-page/article-new?page=0&size=3


  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', backgroundColor: '#459ead', justifyContent:'space-around', alignItems:'center', height: 34}}>
          
          <TextInput style={{borderWidth:1, position: 'absolute', left:'5%', paddingLeft:'10%', paddingVertical:3, borderRadius: 5, backgroundColor: '#d9dbda', width: '75%',}} placeholder='Tìm kiếm'/>
          <Image style={{height: 20, width: 20, position: 'absolute', left:'7%'}} source={require('../assets/search.png')}/>

          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ position: 'absolute', right:'7%'}}>
            <Text style={{color:'#FFF', fontSize:16}}>Đóng</Text>
          </TouchableOpacity>

          
        </View>

        <View>
          <View styles={{justifyContent: 'center'}}>
            <Text style={{fontSize:18, fontWeight:400, paddingTop: 10, paddingLeft:10}}>NÓNG 24H</Text>
          </View>

          <View style={{ height: 360, marginHorizontal:15}}>
              <FlatList
              data={data}
              renderItem={({item}) => <Item item={item} />}
              // keyExtractor={item => item.article.id}
              // keyExtractor={(item) => item.title}
              />
          </View>

          <View style={{alignItems:'center', }}>
            
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{borderTopWidth: 2, borderTopColor: '#d9dbda', width: '90%', alignItems:'center',}}>
              <Text style={{fontSize:fontSize, padding:5}}>Đọc thêm</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{flex:1, backgroundColor:'#D5D5D5'}}>

        </View>

        
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});

function checkDay(currentDate, day) {
  if (currentDate[0]!=day[0]) 
    return currentDate[0] - day[0] + ' năm';
  else if (currentDate[1]!=day[1])
    return currentDate[1] - day[1] + ' tháng';
  else if (currentDate[2]!=day[2])
    return currentDate[2] - day[2] + ' ngày';
  else if (currentDate[3]!=day[3])
    return currentDate[3] - day[3] + ' giờ';
  else if (currentDate[4]!=day[4])
    return currentDate[4] - day[4] + ' phút';
  else if (currentDate[5]!=day[5])
    return currentDate[5] - day[5] + ' giây';
}





