import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { MyContext } from '../context';


export default function Detail({route}) {
  let { configAccount, setConfigAccount, account, user, ipv4, setIpv4, publisher, setUser, setPublisher } = useContext(MyContext)
  let fontSizeO = configAccount.fontSize
  let [fontSize, setSize] = useState(fontSizeO)

  const { id, tg } = route.params;
  // console.log(tg);

  const navigation = useNavigation();


  const [data, setData] = useState(dataDefaul);

  useEffect(()=>{
      fetch('http://'+ipv4+':8080/api/v1/article-page/article-detail?id='+id)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  function ArticleScreen() {
    // Tách nội dung thành các phần dựa trên '{img}'
    const contentParts = data.content.split('{img}');
    let fontSize = 16
    
    return (
      <View>
        {contentParts.map((part, index) => (
          <View key={index} style={{alignItems:'center'}}>
            <Text style={{fontSize: fontSize, fontWeight: '400', marginVertical:10}}>{part}</Text>
            {index < data.imageURLs.length && (
              <Image source={{ uri: data.imageURLs[index] }} style={{ width: 320, height: 200 }} />
            )}
          </View>
        ))}
      </View>
    );
  }


  

  return (
    <View style={styles.container}>
      <View style={{height: 50, backgroundColor: '#FFFFFF', flexDirection:'row', }}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ flex: 1, backgroundColor:'#FFF',}}>
          <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 }} source={require("../assets/back.png")} />
        </TouchableOpacity>

        <View style={{flex:6, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <Image style={{height:20, width: 100, resizeMode:'contain'}} source={{uri: data.imageURLBrand}} />
          {/* <TouchableOpacity style={{ width: 50, alignItems: 'center', justifyContent:'center',}}>
            <Text style={{ flex:1, color:'#FFFFFF', fontSize: 24, backgroundColor: '#459ead', borderRadius: 50, paddingHorizontal:15, }}>+</Text>
          </TouchableOpacity> */}
        </View>

        <TouchableOpacity style={{ flex: 1, backgroundColor:'#FFF',}}>
          {/* <Image style={{ height: "50%", width: 'auto', resizeMode: 'contain', marginTop: 9 }} source={require("../assets/options.png")} /> */}
        </TouchableOpacity>

      </View>


      <SafeAreaView style={{flex:1, padding:15, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical:10}}>{data.title}</Text>
        
        <Text style={{fontSize: 16, fontWeight: '400', marginVertical:10, alignSelf:'flex-start'}}>{tg}</Text>

        <Text style={{fontSize: 16, fontWeight: '500', marginVertical:10}}>{data.summary}</Text>

        
        {/* <Image source={{uri: data.imageURLs[0] }} style={{height: 200, width: 320,}}/> */}
        

        {/* <Text style={{fontSize: 16, fontWeight: '400', marginVertical:10}}>{data.content}</Text> */}

        <ArticleScreen/>
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

const dataDefaul= {"id":"da0e6f3a-0010-4bc7-99ef-d0cbc02102dd","title":"'hồi sinh', vượt qua trầm cảm nhờ tình yêu và sự quyết tâm của con trai","summary":"Nhận ra mẹ đang chìm trong tâm trạng trầm cảm và cô đơn, Phan Văn Chiêu đã đưa mẹ trở về quê hương và cùng bắt đầu một hành trình mới.","content":"Trong một ngôi nhà nhỏ tại ấp Bình Chánh 1, Bình Mỹ, huyện Châu Phú, tỉnh An Giang, cuộc sống của chị Nguyễn Thị Trinh, 45 tuổi, và con trai Phan Văn Chiêu, 27 tuổi, đã trải qua những thay đổi kỳ diệu trong suốt hơn một năm qua.\nCuộc sống gia đình thay đổi kể từ khi họ quay lại quê hương để theo đuổi nghệ thuật sáng tạo nội dung trên mạng và giới thiệu những đặc sản địa phương, đã chạm đến nhiều tâm hồn và thay đổi cuộc sống của nhiều người.\nMọi thay đổi bắt đầu từ cuối năm trước, khi Phan Văn Chiêu quyết định đưa mẹ trở lại quê hương và tạo một kênh video trực tuyến để giới thiệu đặc sản nơi họ đang sống. Ban đầu, chị Trinh cảm thấy lo lắng và không tin tưởng vào khả năng của mình, nhưng cuối cùng, chị đã bị con trai thuyết phục.\nChiêu từng tốt nghiệp ngành cơ khí ô tô và đoạt học bổng du học Hàn Quốc, sau đó nâng cao kiến thức tại Nhật Bản. Tuy nhiên, anh quyết định từ bỏ tất cả để ở gần mẹ. Trước khi nghỉ việc, anh làm trong lĩnh vực bất động sản và thu nhập của anh khá ổn định.\n\"Một đêm, khi tôi nghe bài 'Mười năm' của rapper Đen Vâu, tôi nhận ra rằng tiền bạc không có ý nghĩa nếu người quan trọng nhất trong cuộc đời tôi, mẹ, cứ mãi tự ti và trầm cảm\", chàng trai 27 tuổi kể.\nVideo đầu tiên mà Chiêu tạo ra là một câu chuyện về mẹ. Bố mẹ của Chiêu là bạn thân, hai bên gia đình đã hứa gả con trai và con gái cho nhau, và vì vậy, mẹ Chiêu đã lấy bố hồi 17 tuổi. Nhưng cuộc hôn nhân của họ chỉ kéo dài không đầy một năm, sau đó, bố Chiêu bỏ rơi hai mẹ con, đi lấy vợ khác.{img}Chiêu lớn lên từ những đồng tiền mà mẹ mình kiếm được từ việc làm đồng và chạy chợ. Khi Chiêu vào đại học ở TPHCM, chị Trinh cùng lên thành phố làm việc trong công trường và giúp việc nhà để tiện chăm sóc con trai.\nTheo thời gian, chị Trinh ngày càng trở nên ít nói, tránh xa cuộc sống xã hội, ngại giao du với người khác. Mỗi khi phải xuất hiện tại nơi đông người, chị hay rụt rè, bối rối không biết phải nói gì.\nNhưng khi con trai làm người sáng tạo trên mạng xã hội, chị Trinh phải đứng trước ống kính máy quay. Dù con trai đã viết sẵn kịch bản, chị Trinh vẫn mất tự tin đến mức chỉ nói được một vài từ, bị vấp và không thể hoàn thành cảnh quay. Có những lần, hai mẹ con phải quay cả buổi mà không thể có một đoạn nào hoàn chỉnh.\n\"Có những cảnh mà mẹ khóc, và tôi cũng khóc vì tôi không thể kết thúc cảnh quay\", Chiêu kể. Chi Trinh nhớ lại, giai đoạn đầu xây kênh, chị chỉ đồng ý tham gia làm video vì tin tưởng vào con trai chứ không phải vì mình.{img}Hai video đầu tiên được đăng lên chỉ thu hút một số lượng lượng người xem rất ít. Mặc dù đã chuẩn bị trước, Chiêu vẫn cảm thấy buồn và thất vọng. Chàng trai cũng phải đối mặt với áp lực từ phía hàng xóm. Có người bảo Chiêu dành quá nhiều thời gian cho việc quay phim vô bổ. Người khác lại đồn Chiêu bị đuổi việc và vướng mắc nợ nần.\n\"Khi đồng ý làm video, mẹ cho tôi thời hạn ba tháng. Tôi rất lo với tốc độ chậm chạp như vậy, không biết bao giờ mới thấy được kết quả\", chàng trai nói.\nVideo thứ ba được đăng lên vào một buổi chiều nắng nóng đầu mùa hè. Trên đoạn đường dài hơn 40km về nhà, mẹ con đã dừng lại để nghỉ ngơi và đã cùng chia sẻ trên kênh video của họ. Chỉ sau vài phút, video này đã thu hút hơn 10.000 lượt xem. Trên con đường về nhà, Chiêu cảm thấy bồi hồi, mong rằng mình sẽ \"bắn trúng mục tiêu.\"\nChiêu và chị Trinh đã chứng minh rằng dù bất kỳ tình huống nào, hãy dám thay đổi và khám phá, vì đôi khi, sẽ có những điều kỳ diệu xảy ra khi bạn dám bước ra khỏi vùng thoải mái và thách thức chính mình.","postTime":[2023,1,1,3,45,10],"imageURLBrand":"https://i.imgur.com/GNQguqW.png","imageURLs":["https://i.postimg.cc/d3gsB5LM/image-article5.webp","https://i.postimg.cc/L8t9tBS7/image-article6.webp"]}
