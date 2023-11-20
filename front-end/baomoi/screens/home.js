import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MyContext } from '../context';




const Item = ({ item }) => {
  let { configAccount, setConfigAccount, account, user, ipv4, publisher, setUser, setPublisher } = useContext(MyContext)
  let fontSizeO = configAccount.fontSize
  let [fontSize, setSize] = useState(fontSizeO)
  // let fontSize=16
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Months
    var year = new Date().getFullYear(); //Current Year
    var hour = new Date().getHours(); //Current Year
    var minute = new Date().getMinutes(); //Current Year
    var second = new Date().getSeconds(); //Current Year
    setCurrentDate([year, month, date, hour, minute, second]);
  }, []);
    // console.log(item.imageURL);
    return (
        
        <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id: item.id, tg: checkDay(currentDate, item.postTime)+''}   )}>        
          <View style={{flexDirection:'row', justifyContent:'space-around', height:120 ,gap:10}}>
            <View style={{flex:4, alignItems:'center'}}>
                <Image style={{flex:1, height: 100, width: 140, borderRadius: 5, marginVertical:10}} source={{uri: item.imageURL}}/>
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


export default function Home() {
    const navigation = useNavigation();
    const [currentDate, setCurrentDate] = useState('');
    const [load, setLoad] = useState(0);
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState([]);
    let { configAccount, setConfigAccount, account, user, ipv4, setIpv4, publisher, setUser, setPublisher } = useContext(MyContext)
    let fontSizeO = configAccount.fontSize
    let [fontSize, setSize] = useState(fontSizeO)
    
    // setIpv4('192.168.1.7');
    // console.log(ipv4);
    const route = useRoute();
    const { catagory } = route.params || { catagory: "" };
    const { textSearch } = route.params || { textSearch: "" };

    console.log(catagory+textSearch+load);

    // fetch('http://'+ipv4+':8080/api/v1/article-page/article-new?page=0&size=7')
    //   .then(response => response.json())
    //   .then(json => setData(json.content));


    
  
    useEffect(() => {
      const fet = async () => {
        try {
          setLoad(0);
          let apiUrl = '';
    
          if (catagory === "MOI") {
            console.log("ngungu1");
            apiUrl = 'http://' + ipv4 + ':8080/api/v1/article-page/article-new?page=0&size=7';
          } else if (textSearch !== "" && textSearch !== undefined) {
            console.log("ngungu2");
            console.log(textSearch);
            apiUrl = 'http://' + ipv4 + ':8080/api/v1/article-page/search?keySearch=' + textSearch;
          } else if (catagory !== "" && catagory !== undefined ) {
            console.log("ngungu3");
            apiUrl = 'http://' + ipv4 + ':8080/api/v1/article-page/article-category?category=' + catagory + '&page=0&size=7';
          } else {
            console.log("ngungu4");
            apiUrl = 'http://' + ipv4 + ':8080/api/v1/article-page/article-new?page=0&size=7';
          }
    
          const response = await fetch(apiUrl);
          const json = await response.json();
          setData(json.content);
          data.forEach(i => {
            console.log(i.id);
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fet();
    }, [catagory, textSearch]);


    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hour = new Date().getHours(); //Current Year
      var minute = new Date().getMinutes(); //Current Year
      var second = new Date().getSeconds(); //Current Year
      setCurrentDate([year, month, date, hour, minute, second]);
    }, []);

    
    const fetchData = async (pageIndex) => {
      const url = catagory !== "" && catagory !== "MOI"
        ? `http://${ipv4}:8080/api/v1/article-page/article-category?category=${catagory}&page=${pageIndex}&size=7`
        : `http://${ipv4}:8080/api/v1/article-page/article-new?page=${pageIndex}&size=7`;
    
      const response = await fetch(url);
      const json = await response.json();
    
      return json.content;
    };
    
    const loadMoreData = async () => {
      try {
        // Đặt cờ đang tải
        setFlag(true);
    
        // Tăng giá trị load
        setLoad((prevLoad) => prevLoad + 1);
    
        // Fetch dữ liệu
        const results = await fetchData(load);
    
        // Kiểm tra dữ liệu trùng lặp và cập nhật trạng thái data
        const uniqueResults = results.filter((result) => !data.some((item) => item.id === result.id));
        setData((prevData) => [...prevData, ...uniqueResults]);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        // Đặt lại cờ đang tải
        setFlag(false);
      }
    };
    
    

    // console.log(data);

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', backgroundColor: '#459ead', justifyContent:'space-around', alignItems:'center', height: 34}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Category')} style={{height: 20, width: 20, position: 'absolute', left:'2%'}}>
              <Image style={{height: 20, width: 20, position: 'absolute', left:'2%'}} source={require('../assets/options.png')}/>
            </TouchableOpacity>
            <Text style={{color:'#FFF', position: 'absolute', left:'10%'}}>{currentDate[2]+ ' tháng '+currentDate[1]+', '+currentDate[0]}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={{height: 20, width: 20, position: 'absolute', right:'10%'}}>
              <Image style={{height: 20, width: 20, position: 'absolute', right:'10%'}} source={require('../assets/search.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{height: 20, width: 20, position: 'absolute', right:'2%'}}>
              <Image style={{height: 20, width: 20, position: 'absolute', right:'2%'}} source={require('../assets/user.png')}/>
            </TouchableOpacity>
        </View>
        <View style={{flex:16, marginHorizontal:15}}>
            <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} /> }
            keyExtractor={item => item.id}
            onEndReached={loadMoreData} // Xác định khi cần tải thêm dữ liệu
            onEndReachedThreshold={0.01}
            />

        </View>
        <View style={{height:50, flexDirection:'row', backgroundColor: '#FFFFFF', alignItems:'center'}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image style={{height: 20, width: 20, resizeMode:'contain'}} source={require('../assets/Home/home.png')}/>
              <Text style={{color: '#05b0a5'}}>Tin Tức</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Image style={{height: 20, width: 20, resizeMode:'contain'}} source={require('../assets/Home/video.png')}/>
              <Text style={{color: '#05b0a5'}}>Tin Tức</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Image style={{height: 20, width: 20, resizeMode:'contain'}} source={require('../assets/Home/trading.png')}/>
              <Text style={{color: '#05b0a5'}}>Tin Tức</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
              <Image style={{height: 20, width: 20, resizeMode:'contain'}} source={require('../assets/Home/utilities.jpg')}/>
              <Text style={{color: '#05b0a5'}}>Tin Tức</Text>
            </View>
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


