import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={{height: 50, backgroundColor: '#FFFFFF', flexDirection:'row', }}>
        <TouchableOpacity style={{ flex: 1, backgroundColor:'#000000',}}>
          <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 }} source={require("../assets/arrow-png-white.png")} />
        </TouchableOpacity>

        <View style={{flex:6, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <Image style={{height:25, width: 80,}} source={require("../assets/publisher/dantri.png")} />
          <TouchableOpacity style={{ width: 50, alignItems: 'center', justifyContent:'center',}}>
            <Text style={{ flex:1, color:'#FFFFFF', fontSize: 24, backgroundColor: '#459ead', borderRadius: 50, paddingHorizontal:15, }}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ flex: 1, backgroundColor:'#000000',}}>
          <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 }} source={require("../assets/options.png")} />
        </TouchableOpacity>

      </View>


      <SafeAreaView style={{flex:1, padding:15, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical:10}}>{Data.article.title}</Text>
        
        <Text style={{fontSize: 16, fontWeight: '400', marginVertical:10, alignSelf:'flex-start'}}>1 giờ trước</Text>

        <Text style={{fontSize: 16, fontWeight: '500', marginVertical:10}}>{Data.article.summary}</Text>

        <Image source={require('../assets/image_article/image_article1.jpg')} style={{height: 200, width: 320,}}/>

        <Text style={{fontSize: 16, fontWeight: '400', marginVertical:10}}>{Data.article.content}</Text>
      </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Data = 
{
  "title": "Azzurri đối diện với nguy cơ trở thành cựu vương của giải đấu. Ảnh: Eurosports",
  "imageURL": "../assets/image_article/image_article1.jpg",
  "article": {
    "id": "da0e6f3a-0000-4bc7-99ef-d0cbc88137dd",
    "title":"Vòng loại EURO 2024: Nhà đương kim vô địch lâm nguy",
    "postTime":"2023-01-01T00:15:10",
    "summary":"Chiến dịch vòng loại EURO 2024 đang đi đến những lượt trận cuối cùng và lúc này đã xác định được khá nhiều đội bóng giành tấm vé thông hành tới Đức mùa hè năm sau. Đáng chú ý, cuộc cạnh tranh suất vé thứ 2 tại bảng C vẫn diễn ra căng thẳng và khó đoán, nơi nhà ĐKVĐ Italy đang lâm nguy.",
    "content":"Vắng mặt ở 2 kỳ World Cup gần nhất, Italy - một trong những đội tuyển giàu thành tích nhất bóng đá thế giới - hiện đang gặp khó khăn trong nỗ lực giành vé tham dự VCK EURO 2024 và bảo vệ danh hiệu mà đội giành được tại Wembley 2 năm trước. {img}Sau thất bại 1 - 3 trước tuyển Anh trên sân Wembley, nhà ĐKVĐ Italy mới có được 10 điểm và đang phải chiến đấu với Ukraine (13 điểm). Đây là lần đầu tiên Italy thua trên sân khách trước Tam sư kể từ năm 1977. Đội bóng Thiên thanh tuy thất thế về điểm số nhưng đang thi đấu ít hơn 1 trận và có hiệu số bàn thắng bại nhỉnh hơn Ukraine.\nDo ở trận đấu cùng giờ, Ukraine thắng trên sân Malta 3 - 1 và tạm vươn lên vị trí nhì bảng. Cuộc cạnh tranh tấm vé còn lại của bảng đấu hứa hẹn sẽ rất hấp dẫn giữa Italy và Ukraine cho đến vòng đấu cuối {img}Azzurri đang gặp khủng hoảng tâm lý với 2 ngôi sao Sandro Tonali và Nicolo Fagioli dính nghi án cá độ và đánh bài bất hợp pháp. Rắc rối mà hai cầu thủ trên gặp khải không chỉ khiến Azzurri mất những quân bài quan trọng, mà tâm lý của cả đội cũng chịu dao động.\nĐội bóng áo Thiên thanh đang phải đối mặt với nguy cơ không vượt qua vòng loại. Nếu điều đó xảy ra, họ sẽ sớm trở thành cựu vương của giải đấu.\nTuy nhiên, cơ hội giành vé trực tiếp vào vòng chung kết EURO 2024 của thầy trò HLV Spalletti vẫn còn nếu họ thắng 2 trận còn lại trước Bắc Macedonia và với đối thủ cạnh tranh trực tiếp Ukraine trong tháng 11.\nNếu đánh bại Bắc Macedonia (đội đã bị loại), Italy sẽ vượt qua Ukraine để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Trong trường hợp không đánh bại Bắc Macedonia, Ukraine sẽ vượt qua Italy để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Để chắc chắn bay đến Đức và bảo vệ danh hiệu đã giành được vào năm 2021, Azzurri cần ít nhất 4 điểm ở lượt trận tới.\nUkraine chính là đối thủ cuối cùng của Italy tại vòng loại EURO 2024 - trận đấu diễn ra trên sân trung lập Bay Arena, Leverkusen, Đức (ngày 21/11) - trận \"sinh tử\" xác định đội thứ hai đi tiếp ở bảng C. Chắc chắn đây sẽ là chuyến “đi dễ khó về” của Spalletti cùng các học trò. {img}Đoạn đường cuối đầy gian nan với Azzurri, nhưng dưới tài lèo lái của HLV Spalletti - nhà vô địch Serie A với Napoli - người hâm mộ tin tưởng các nhà ĐKVĐ sẽ vượt qua khó khăn để giành vé tới vòng chung kết EURO 2024.",
    "category":0,
    "imageArticles":[],
    "publisher":{
      "id": 1,
      "name":"DanTri",
      "imageURLBrand":"../assets/publisher/dantri.png",
      "articles":[]
    }
  }
}
