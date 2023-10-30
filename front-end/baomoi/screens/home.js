import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const Item = ({ item }) => {
  // console.log(item.imageURL);
    return (
        
        <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-around', height: 120,}}>
            <View style={{flex:4, alignItems:'center'}}>
                {/* <Image style={{flex:1, height: 120, width: 140, resizeMode:'contain'}} source={{uri: item.imageURL}}/> */}
                <Image style={{flex:1, height: 120, width: 140, resizeMode:'contain'}} source={require('../assets/image_article/image_article1.jpg')}></Image>
            </View>
            <View style={{flex:6,  justifyContent:'space-between', padding:10,}}>
                <Text >{item.title}</Text>
                {/* <Image style={{height: 10, width: 'auto',}} source={{uri: item.article.publisher.imageURLBrand}}/> */}
                <Image style={{height: 40,width: 40, resizeMode:'contain'}} source={require('../assets/publisher/dantri.png')}/>
            </View>
          </View>
        </TouchableOpacity>
        
    );
  };


export default function Home() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        setCurrentDate(
        date + ' tháng ' + month + ', ' + year 
        );
    }, []);


  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', backgroundColor: '#459ead', justifyContent:'space-around', alignItems:'center', height: 60}}>
            <Image style={{height: 20, width: 20, position: 'absolute', left:'2%'}} source={require('../assets/options.png')}/>
            <Text style={{color:'#FFF', position: 'absolute', left:'10%'}}>{currentDate}</Text>
            <Image style={{height: 20, width: 20, position: 'absolute', right:'10%'}} source={require('../assets/search.png')}/>
            <Image style={{height: 20, width: 20, position: 'absolute', right:'2%'}} source={require('../assets/user.png')}/>
        </View>
        <View style={{flex:16}}>
            <FlatList
            data={Data}
            renderItem={({item}) => <Item item={item} />}
            // keyExtractor={item => item.article.id}
            keyExtractor={(item) => item.title}
            
            />

        </View>
        <View style={{height:50, flexDirection:'row', backgroundColor: '#8fc7c3', alignItems:'center'}}>
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


const Data = [
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
  },
  {
    "title": "Tuyển Italy thua liền 2 trận trước tuyển Anh. Ảnh: Eurosports",
    "imageURL": "../assets/image_article/image_article2.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99ef-d0cbc88137dd",
      "title":"Vòng loại EURO 2024: Nhà đương kim vô địch lâm nguy",
      "postTime":"2023-01-01T00:15:10",
      "summary":"Chiến dịch vòng loại EURO 2024 đang đi đến những lượt trận cuối cùng và lúc này đã xác định được khá nhiều đội bóng giành tấm vé thông hành tới Đức mùa hè năm sau. Đáng chú ý, cuộc cạnh tranh suất vé thứ 2 tại bảng C vẫn diễn ra căng thẳng và khó đoán, nơi nhà ĐKVĐ Italy đang lâm nguy.",
      "content":"Vắng mặt ở 2 kỳ World Cup gần nhất, Italy - một trong những đội tuyển giàu thành tích nhất bóng đá thế giới - hiện đang gặp khó khăn trong nỗ lực giành vé tham dự VCK EURO 2024 và bảo vệ danh hiệu mà đội giành được tại Wembley 2 năm trước. {img}Sau thất bại 1 - 3 trước tuyển Anh trên sân Wembley, nhà ĐKVĐ Italy mới có được 10 điểm và đang phải chiến đấu với Ukraine (13 điểm). Đây là lần đầu tiên Italy thua trên sân khách trước Tam sư kể từ năm 1977. Đội bóng Thiên thanh tuy thất thế về điểm số nhưng đang thi đấu ít hơn 1 trận và có hiệu số bàn thắng bại nhỉnh hơn Ukraine.\nDo ở trận đấu cùng giờ, Ukraine thắng trên sân Malta 3 - 1 và tạm vươn lên vị trí nhì bảng. Cuộc cạnh tranh tấm vé còn lại của bảng đấu hứa hẹn sẽ rất hấp dẫn giữa Italy và Ukraine cho đến vòng đấu cuối. {img}Azzurri đang gặp khủng hoảng tâm lý với 2 ngôi sao Sandro Tonali và Nicolo Fagioli dính nghi án cá độ và đánh bài bất hợp pháp. Rắc rối mà hai cầu thủ trên gặp khải không chỉ khiến Azzurri mất những quân bài quan trọng, mà tâm lý của cả đội cũng chịu dao động.\nĐội bóng áo Thiên thanh đang phải đối mặt với nguy cơ không vượt qua vòng loại. Nếu điều đó xảy ra, họ sẽ sớm trở thành cựu vương của giải đấu.\nTuy nhiên, cơ hội giành vé trực tiếp vào vòng chung kết EURO 2024 của thầy trò HLV Spalletti vẫn còn nếu họ thắng 2 trận còn lại trước Bắc Macedonia và với đối thủ cạnh tranh trực tiếp Ukraine trong tháng 11.\nNếu đánh bại Bắc Macedonia (đội đã bị loại), Italy sẽ vượt qua Ukraine để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Trong trường hợp không đánh bại Bắc Macedonia, Ukraine sẽ vượt qua Italy để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Để chắc chắn bay đến Đức và bảo vệ danh hiệu đã giành được vào năm 2021, Azzurri cần ít nhất 4 điểm ở lượt trận tới.\nUkraine chính là đối thủ cuối cùng của Italy tại vòng loại EURO 2024 - trận đấu diễn ra trên sân trung lập Bay Arena, Leverkusen, Đức (ngày 21/11) - trận \"sinh tử\" xác định đội thứ hai đi tiếp ở bảng C. Chắc chắn đây sẽ là chuyến “đi dễ khó về” của Spalletti cùng các học trò. {img}Đoạn đường cuối đầy gian nan với Azzurri, nhưng dưới tài lèo lái của HLV Spalletti - nhà vô địch Serie A với Napoli - người hâm mộ tin tưởng các nhà ĐKVĐ sẽ vượt qua khó khăn để giành vé tới vòng chung kết EURO 2024.",
      "category":0,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "HLV Spalletti cùng tuyển Italy sẽ có chặng đường cuối đầy khó khăn ở vòng loại EURO 2024. Ảnh: Eurosports",
    "imageURL": "../assets/image_article/image_article3.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99ef-d0cbc88137dd",
      "title":"Vòng loại EURO 2024: Nhà đương kim vô địch lâm nguy",
      "postTime":"2023-01-01T00:15:10",
      "summary":"Chiến dịch vòng loại EURO 2024 đang đi đến những lượt trận cuối cùng và lúc này đã xác định được khá nhiều đội bóng giành tấm vé thông hành tới Đức mùa hè năm sau. Đáng chú ý, cuộc cạnh tranh suất vé thứ 2 tại bảng C vẫn diễn ra căng thẳng và khó đoán, nơi nhà ĐKVĐ Italy đang lâm nguy.",
      "content":"Vắng mặt ở 2 kỳ World Cup gần nhất, Italy - một trong những đội tuyển giàu thành tích nhất bóng đá thế giới - hiện đang gặp khó khăn trong nỗ lực giành vé tham dự VCK EURO 2024 và bảo vệ danh hiệu mà đội giành được tại Wembley 2 năm trước. {img}Sau thất bại 1 - 3 trước tuyển Anh trên sân Wembley, nhà ĐKVĐ Italy mới có được 10 điểm và đang phải chiến đấu với Ukraine (13 điểm). Đây là lần đầu tiên Italy thua trên sân khách trước Tam sư kể từ năm 1977. Đội bóng Thiên thanh tuy thất thế về điểm số nhưng đang thi đấu ít hơn 1 trận và có hiệu số bàn thắng bại nhỉnh hơn Ukraine.\nDo ở trận đấu cùng giờ, Ukraine thắng trên sân Malta 3 - 1 và tạm vươn lên vị trí nhì bảng. Cuộc cạnh tranh tấm vé còn lại của bảng đấu hứa hẹn sẽ rất hấp dẫn giữa Italy và Ukraine cho đến vòng đấu cuối.{img}Azzurri đang gặp khủng hoảng tâm lý với 2 ngôi sao Sandro Tonali và Nicolo Fagioli dính nghi án cá độ và đánh bài bất hợp pháp. Rắc rối mà hai cầu thủ trên gặp khải không chỉ khiến Azzurri mất những quân bài quan trọng, mà tâm lý của cả đội cũng chịu dao động.\nĐội bóng áo Thiên thanh đang phải đối mặt với nguy cơ không vượt qua vòng loại. Nếu điều đó xảy ra, họ sẽ sớm trở thành cựu vương của giải đấu.\nTuy nhiên, cơ hội giành vé trực tiếp vào vòng chung kết EURO 2024 của thầy trò HLV Spalletti vẫn còn nếu họ thắng 2 trận còn lại trước Bắc Macedonia và với đối thủ cạnh tranh trực tiếp Ukraine trong tháng 11.\nNếu đánh bại Bắc Macedonia (đội đã bị loại), Italy sẽ vượt qua Ukraine để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Trong trường hợp không đánh bại Bắc Macedonia, Ukraine sẽ vượt qua Italy để giành suất dự EURO 2024 nếu họ tránh được thất bại ở trận cuối cùng. Để chắc chắn bay đến Đức và bảo vệ danh hiệu đã giành được vào năm 2021, Azzurri cần ít nhất 4 điểm ở lượt trận tới.\nUkraine chính là đối thủ cuối cùng của Italy tại vòng loại EURO 2024 - trận đấu diễn ra trên sân trung lập Bay Arena, Leverkusen, Đức (ngày 21/11) - trận \"sinh tử\" xác định đội thứ hai đi tiếp ở bảng C. Chắc chắn đây sẽ là chuyến “đi dễ khó về” của Spalletti cùng các học trò.{img}Đoạn đường cuối đầy gian nan với Azzurri, nhưng dưới tài lèo lái của HLV Spalletti - nhà vô địch Serie A với Napoli - người hâm mộ tin tưởng các nhà ĐKVĐ sẽ vượt qua khó khăn để giành vé tới vòng chung kết EURO 2024.",
      "category":0,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Người bệnh nhập viện với khối u khổng lồ đã bị vỡ và được cấp cứu ban đầu ở tuyến dưới",
    "imageURL": "../assets/image_article/image_article4.jpg",
    "article": {
      "id": "da0e6f3a-0001-4bc7-99ef-d0cbc88137dd",
      "title":"Người đàn ông được cắt bỏ khối u khổng lồ nặng tới 23kg",
      "postTime":"2023-01-01T06:15:10",
      "summary":"ANTD.VN - Nam bệnh nhân 39 tuổi vào Bệnh viện Việt Đức trong tình trạng vùng lưng có khối u khổng lồ, kích thước to hơn cả phần ngực và lưng còn lại của người bệnh và bắt đầu vỡ…",
      "content":"Ngày 18-10, thông tin từ Bệnh viện Việt Đức cho biết, khoa Phẫu thuật Hàm mặt, Tạo hình và Thẩm mỹ của bệnh viện vừa tiếp nhận đã bệnh nhân N.V.S (39 tuổi) nhập viện với một khối u khổng lồ vùng ngực lưng. Khối u to hơn cả phần ngực và lưng còn lại của người bệnh. Do khối u quá to nên đã vỡ, gây chảy máu ồ ạt bên trong u, gây nguy hiểm đến tính mạng.\nTheo lời kể, bệnh nhân N.V.S mang khối u từ khi còn nhỏ, cách đây hơn 20 năm đã từng mổ ở bệnh viện tỉnh nhưng khi phẫu thuật khối u chảy máu quá nhiều nên phải đóng lại, chấp nhận sống chung với u. Càng ngày khối u càng phát triển nhanh, lớn hơn cả phần ngực và lưng anh.\nGần đây, anh S. không may bị va nhẹ vào mạng sườn, khối u sưng to căng tức nên được đưa vào bệnh viện địa phương để cấp cứu. Tại đây bệnh nhân được chỉ định phẫu thuật nhưng do máu trong khối u chảy ra xối xả nên các bác sĩ chỉ có thể nhét vào đó hơn 20 miếng gạc to để cầm máu, băng ép chặt lại rồi chuyển lên Bệnh viện Việt Đức cấp cứu.\nPGS.TS. Nguyễn Hồng Hà, Trưởng khoa Phẫu thuật Hàm mặt, Tạo hình và Thẩm mỹ - Bệnh viện Việt Đức cho biết, khi nhập viện, người bệnh trong tình trạng lơ mơ, nhợt nhạt sốc mất máu nặng, toàn thân đã xuất hiện dấu hiệu suy gan suy thận. Khối u chiếm hết toàn bộ phần ngực lưng bên phải, căng bóng chỉ dọa vỡ tung ra. Khi sờ vào khối u cũng nóng hơn bình thường 1 đến 2 độ chứng tỏ trong khối u có sự tăng sinh mạch máu rất lớn.\nQua thăm khám lâm sàng, các bác sĩ chẩn đoán anh S. bị chứng bệnh u xơ thần kinh. U đã bị vỡ bên trong gây tình trạng chảy máu trong khối u, nếu vỡ ra ngoài sẽ lập tức nguy hiểm đến tính mạng.{img}Ngày 18-10, thông tin từ Bệnh viện Việt Đức cho biết, khoa Phẫu thuật Hàm mặt, Tạo hình và Thẩm mỹ của bệnh viện vừa tiếp nhận đã bệnh nhân N.V.S (39 tuổi) nhập viện với một khối u khổng lồ vùng ngực lưng. Khối u to hơn cả phần ngực và lưng còn lại của người bệnh. Do khối u quá to nên đã vỡ, gây chảy máu ồ ạt bên trong u, gây nguy hiểm đến tính mạng.\nTheo lời kể, bệnh nhân N.V.S mang khối u từ khi còn nhỏ, cách đây hơn 20 năm đã từng mổ ở bệnh viện tỉnh nhưng khi phẫu thuật khối u chảy máu quá nhiều nên phải đóng lại, chấp nhận sống chung với u. Càng ngày khối u càng phát triển nhanh, lớn hơn cả phần ngực và lưng anh.\nGần đây, anh S. không may bị va nhẹ vào mạng sườn, khối u sưng to căng tức nên được đưa vào bệnh viện địa phương để cấp cứu. Tại đây bệnh nhân được chỉ định phẫu thuật nhưng do máu trong khối u chảy ra xối xả nên các bác sĩ chỉ có thể nhét vào đó hơn 20 miếng gạc to để cầm máu, băng ép chặt lại rồi chuyển lên Bệnh viện Việt Đức cấp cứu.\nPGS.TS. Nguyễn Hồng Hà, Trưởng khoa Phẫu thuật Hàm mặt, Tạo hình và Thẩm mỹ - Bệnh viện Việt Đức cho biết, khi nhập viện, người bệnh trong tình trạng lơ mơ, nhợt nhạt sốc mất máu nặng, toàn thân đã xuất hiện dấu hiệu suy gan suy thận. Khối u chiếm hết toàn bộ phần ngực lưng bên phải, căng bóng chỉ dọa vỡ tung ra. Khi sờ vào khối u cũng nóng hơn bình thường 1 đến 2 độ chứng tỏ trong khối u có sự tăng sinh mạch máu rất lớn.\nQua thăm khám lâm sàng, các bác sĩ chẩn đoán anh S. bị chứng bệnh u xơ thần kinh. U đã bị vỡ bên trong gây tình trạng chảy máu trong khối u, nếu vỡ ra ngoài sẽ lập tức nguy hiểm đến tính mạng.\nNguy hiểm hơn nữa là hình ảnh chụp mạch cho thấy bên trong khối u dày đặc các mạch máu to như ngón tay chạy ngoằn ngoèo. Do tính chất khối u, các mạch máu này không còn khả năng đàn hồi chun giãn, nên 1 khi bị vỡ ra rất khó cầm máu.\nCác bác sĩ đã quyết định tiến hành phẫu thuật theo nhiều giai đoạn. Kíp phẫu thuật huy động gần 10 phẫu thuật viên cùng 20 nhân viên, bác sĩ khu mổ và gây mê hồi sức. Sau 2 lần phẫu thuật, mỗi lần 6 đến 7 tiếng, các bác sĩ đã cắt được hầu hết khối u vùng lưng và ngực, tổng cộng khoảng 23 kg. Tổng lượng máu phải truyền cho bệnh nhân là hơn 5 lít.\nHiện phần cơ thể ngực và lưng của bệnh nhân đã trở về gần như người bình thường. Các phần u sưng to hay nóng giàu mạch máu đã không còn trên cơ thể. Bệnh nhân có thể trở lại cuộc sống sinh hoạt nhẹ nhàng và thoải mái nhanh nhẹn hơn nhiều so với trước mổ.",
      "category":1,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "2 mẹ con chị Nguyễn Thị Trinh",
    "imageURL": "../assets/image_article/image_article5.jpg",
    "article": {
      "id": "da0e6f3a-0010-4bc7-99ef-d0cbc88137dd",
      "title":"Người mẹ 'hồi sinh', vượt qua trầm cảm nhờ tình yêu và sự quyết tâm của con trai",
      "postTime":"2023-01-01T03:45:10",
      "summary":"Nhận ra mẹ đang chìm trong tâm trạng trầm cảm và cô đơn, Phan Văn Chiêu đã đưa mẹ trở về quê hương và cùng bắt đầu một hành trình mới.",
      "content":"Trong một ngôi nhà nhỏ tại ấp Bình Chánh 1, Bình Mỹ, huyện Châu Phú, tỉnh An Giang, cuộc sống của chị Nguyễn Thị Trinh, 45 tuổi, và con trai Phan Văn Chiêu, 27 tuổi, đã trải qua những thay đổi kỳ diệu trong suốt hơn một năm qua.\nCuộc sống gia đình thay đổi kể từ khi họ quay lại quê hương để theo đuổi nghệ thuật sáng tạo nội dung trên mạng và giới thiệu những đặc sản địa phương, đã chạm đến nhiều tâm hồn và thay đổi cuộc sống của nhiều người.\nMọi thay đổi bắt đầu từ cuối năm trước, khi Phan Văn Chiêu quyết định đưa mẹ trở lại quê hương và tạo một kênh video trực tuyến để giới thiệu đặc sản nơi họ đang sống. Ban đầu, chị Trinh cảm thấy lo lắng và không tin tưởng vào khả năng của mình, nhưng cuối cùng, chị đã bị con trai thuyết phục.\nChiêu từng tốt nghiệp ngành cơ khí ô tô và đoạt học bổng du học Hàn Quốc, sau đó nâng cao kiến thức tại Nhật Bản. Tuy nhiên, anh quyết định từ bỏ tất cả để ở gần mẹ. Trước khi nghỉ việc, anh làm trong lĩnh vực bất động sản và thu nhập của anh khá ổn định.\n\"Một đêm, khi tôi nghe bài 'Mười năm' của rapper Đen Vâu, tôi nhận ra rằng tiền bạc không có ý nghĩa nếu người quan trọng nhất trong cuộc đời tôi, mẹ, cứ mãi tự ti và trầm cảm\", chàng trai 27 tuổi kể.\nVideo đầu tiên mà Chiêu tạo ra là một câu chuyện về mẹ. Bố mẹ của Chiêu là bạn thân, hai bên gia đình đã hứa gả con trai và con gái cho nhau, và vì vậy, mẹ Chiêu đã lấy bố hồi 17 tuổi. Nhưng cuộc hôn nhân của họ chỉ kéo dài không đầy một năm, sau đó, bố Chiêu bỏ rơi hai mẹ con, đi lấy vợ khác.{img}Chiêu lớn lên từ những đồng tiền mà mẹ mình kiếm được từ việc làm đồng và chạy chợ. Khi Chiêu vào đại học ở TPHCM, chị Trinh cùng lên thành phố làm việc trong công trường và giúp việc nhà để tiện chăm sóc con trai.\nTheo thời gian, chị Trinh ngày càng trở nên ít nói, tránh xa cuộc sống xã hội, ngại giao du với người khác. Mỗi khi phải xuất hiện tại nơi đông người, chị hay rụt rè, bối rối không biết phải nói gì.\nNhưng khi con trai làm người sáng tạo trên mạng xã hội, chị Trinh phải đứng trước ống kính máy quay. Dù con trai đã viết sẵn kịch bản, chị Trinh vẫn mất tự tin đến mức chỉ nói được một vài từ, bị vấp và không thể hoàn thành cảnh quay. Có những lần, hai mẹ con phải quay cả buổi mà không thể có một đoạn nào hoàn chỉnh.\n\"Có những cảnh mà mẹ khóc, và tôi cũng khóc vì tôi không thể kết thúc cảnh quay\", Chiêu kể. Chi Trinh nhớ lại, giai đoạn đầu xây kênh, chị chỉ đồng ý tham gia làm video vì tin tưởng vào con trai chứ không phải vì mình.{img}Hai video đầu tiên được đăng lên chỉ thu hút một số lượng lượng người xem rất ít. Mặc dù đã chuẩn bị trước, Chiêu vẫn cảm thấy buồn và thất vọng. Chàng trai cũng phải đối mặt với áp lực từ phía hàng xóm. Có người bảo Chiêu dành quá nhiều thời gian cho việc quay phim vô bổ. Người khác lại đồn Chiêu bị đuổi việc và vướng mắc nợ nần.\n\"Khi đồng ý làm video, mẹ cho tôi thời hạn ba tháng. Tôi rất lo với tốc độ chậm chạp như vậy, không biết bao giờ mới thấy được kết quả\", chàng trai nói.\nVideo thứ ba được đăng lên vào một buổi chiều nắng nóng đầu mùa hè. Trên đoạn đường dài hơn 40km về nhà, mẹ con đã dừng lại để nghỉ ngơi và đã cùng chia sẻ trên kênh video của họ. Chỉ sau vài phút, video này đã thu hút hơn 10.000 lượt xem. Trên con đường về nhà, Chiêu cảm thấy bồi hồi, mong rằng mình sẽ \"bắn trúng mục tiêu.\"\nChiêu và chị Trinh đã chứng minh rằng dù bất kỳ tình huống nào, hãy dám thay đổi và khám phá, vì đôi khi, sẽ có những điều kỳ diệu xảy ra khi bạn dám bước ra khỏi vùng thoải mái và thách thức chính mình.",
      "category":2,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Phan Chiêu cùng mẹ (thứ 2 và 3 từ phải sang) tham gia livestream bán vải cho bà con Bắc Giang",
    "imageURL": "../assets/image_article/image_article6.jpg",
    "article": {
      "id": "da0e6f3a-0010-4bc7-99ef-d0cbc88137dd",
      "title":"Người mẹ 'hồi sinh', vượt qua trầm cảm nhờ tình yêu và sự quyết tâm của con trai",
      "postTime":"2023-01-01T03:45:10",
      "summary":"Nhận ra mẹ đang chìm trong tâm trạng trầm cảm và cô đơn, Phan Văn Chiêu đã đưa mẹ trở về quê hương và cùng bắt đầu một hành trình mới.",
      "content":"Trong một ngôi nhà nhỏ tại ấp Bình Chánh 1, Bình Mỹ, huyện Châu Phú, tỉnh An Giang, cuộc sống của chị Nguyễn Thị Trinh, 45 tuổi, và con trai Phan Văn Chiêu, 27 tuổi, đã trải qua những thay đổi kỳ diệu trong suốt hơn một năm qua.\nCuộc sống gia đình thay đổi kể từ khi họ quay lại quê hương để theo đuổi nghệ thuật sáng tạo nội dung trên mạng và giới thiệu những đặc sản địa phương, đã chạm đến nhiều tâm hồn và thay đổi cuộc sống của nhiều người.\nMọi thay đổi bắt đầu từ cuối năm trước, khi Phan Văn Chiêu quyết định đưa mẹ trở lại quê hương và tạo một kênh video trực tuyến để giới thiệu đặc sản nơi họ đang sống. Ban đầu, chị Trinh cảm thấy lo lắng và không tin tưởng vào khả năng của mình, nhưng cuối cùng, chị đã bị con trai thuyết phục.\nChiêu từng tốt nghiệp ngành cơ khí ô tô và đoạt học bổng du học Hàn Quốc, sau đó nâng cao kiến thức tại Nhật Bản. Tuy nhiên, anh quyết định từ bỏ tất cả để ở gần mẹ. Trước khi nghỉ việc, anh làm trong lĩnh vực bất động sản và thu nhập của anh khá ổn định.\n\"Một đêm, khi tôi nghe bài 'Mười năm' của rapper Đen Vâu, tôi nhận ra rằng tiền bạc không có ý nghĩa nếu người quan trọng nhất trong cuộc đời tôi, mẹ, cứ mãi tự ti và trầm cảm\", chàng trai 27 tuổi kể.\nVideo đầu tiên mà Chiêu tạo ra là một câu chuyện về mẹ. Bố mẹ của Chiêu là bạn thân, hai bên gia đình đã hứa gả con trai và con gái cho nhau, và vì vậy, mẹ Chiêu đã lấy bố hồi 17 tuổi. Nhưng cuộc hôn nhân của họ chỉ kéo dài không đầy một năm, sau đó, bố Chiêu bỏ rơi hai mẹ con, đi lấy vợ khác.{img}Chiêu lớn lên từ những đồng tiền mà mẹ mình kiếm được từ việc làm đồng và chạy chợ. Khi Chiêu vào đại học ở TPHCM, chị Trinh cùng lên thành phố làm việc trong công trường và giúp việc nhà để tiện chăm sóc con trai.\nTheo thời gian, chị Trinh ngày càng trở nên ít nói, tránh xa cuộc sống xã hội, ngại giao du với người khác. Mỗi khi phải xuất hiện tại nơi đông người, chị hay rụt rè, bối rối không biết phải nói gì.\nNhưng khi con trai làm người sáng tạo trên mạng xã hội, chị Trinh phải đứng trước ống kính máy quay. Dù con trai đã viết sẵn kịch bản, chị Trinh vẫn mất tự tin đến mức chỉ nói được một vài từ, bị vấp và không thể hoàn thành cảnh quay. Có những lần, hai mẹ con phải quay cả buổi mà không thể có một đoạn nào hoàn chỉnh.\n\"Có những cảnh mà mẹ khóc, và tôi cũng khóc vì tôi không thể kết thúc cảnh quay\", Chiêu kể. Chi Trinh nhớ lại, giai đoạn đầu xây kênh, chị chỉ đồng ý tham gia làm video vì tin tưởng vào con trai chứ không phải vì mình.{img}Hai video đầu tiên được đăng lên chỉ thu hút một số lượng lượng người xem rất ít. Mặc dù đã chuẩn bị trước, Chiêu vẫn cảm thấy buồn và thất vọng. Chàng trai cũng phải đối mặt với áp lực từ phía hàng xóm. Có người bảo Chiêu dành quá nhiều thời gian cho việc quay phim vô bổ. Người khác lại đồn Chiêu bị đuổi việc và vướng mắc nợ nần.\n\"Khi đồng ý làm video, mẹ cho tôi thời hạn ba tháng. Tôi rất lo với tốc độ chậm chạp như vậy, không biết bao giờ mới thấy được kết quả\", chàng trai nói.\nVideo thứ ba được đăng lên vào một buổi chiều nắng nóng đầu mùa hè. Trên đoạn đường dài hơn 40km về nhà, mẹ con đã dừng lại để nghỉ ngơi và đã cùng chia sẻ trên kênh video của họ. Chỉ sau vài phút, video này đã thu hút hơn 10.000 lượt xem. Trên con đường về nhà, Chiêu cảm thấy bồi hồi, mong rằng mình sẽ \"bắn trúng mục tiêu.\"\nChiêu và chị Trinh đã chứng minh rằng dù bất kỳ tình huống nào, hãy dám thay đổi và khám phá, vì đôi khi, sẽ có những điều kỳ diệu xảy ra khi bạn dám bước ra khỏi vùng thoải mái và thách thức chính mình.",
      "category":2,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Hình ảnh hiếm hoi Thanh Hằng và chồng nhạc trưởng đứng chung một khung hình",
    "imageURL": "../assets/image_article/image_article7.jpg",
    "article": {
      "id": "da0e6f3a-0011-4bc7-99ef-d0cbc88137dd",
      "title":"Hé lộ lí do chồng nhạc trưởng 'đánh cắp trái tim' Thanh Hằng",
      "postTime":"2023-01-01T02:15:10",
      "summary":"Thanh Hằng đã có câu trả lời đầy lãng mạn, 'tình bể bình' khi được hỏi về chồng sắp cưới.",
      "content":"Khi ngày cưới đã đến rất gần, Thanh Hằng ngày càng trở nên cởi mở hơn trong việc chia sẻ về cuộc sống đời tư với khán giả.\nMới đây khi trả lời phỏng với Tạp chí Đẹp, nữ siêu mẫu đã khéo léo hé lộ lí do chồng nhạc trưởng \"đánh cắp trái tim\".\nCụ thể người đẹp hạnh phúc cho biết: \"Vì anh ấy cần một nốt nhạc cuối cùng để hoàn thành bản giao hưởng hạnh phúc mà anh đã biên soạn nhiều năm. Và Thanh Hằng có nốt nhạc đắt giá đó!\".{img}Câu trả lời của nữ siêu mẫu đã nhanh chóng thu hút sự chú ý từ phía cư dân mạng. Đa số khán giả đều không ngừng để lại bình luận chúc phúc cho Thanh Hằng: \"Cuối cùng ngày này cũng đến. Chúc mừng chị ạ em vui lây luôn\", \"Mê bà Hằng quá trời. Thích bả ấy đến giờ cũng phải mười mấy năm luôn rồi\", \"Mắt cô dâu long lanh, không giấu được niềm hạnh phúc\"....\nĐược biết Thanh Hằng và nhạc trưởng Trần Nhật Minh đã có một thời gian tìm hiểu, hẹn hò nhất định trước khi tiến đến việc \"về chung một nhà\". Đám cưới của cặp đôi đình đám sẽ diễn ra vào ngày 22/10 sắp tới, hiện nữ siêu mẫu đã gửi thiệp mời tới tất cả bạn bè, đồng nghiệp thân thiết. Những vị khách trong hôn lễ sắp tới của người đẹp đều thể hiện sự phấn khích, hào hứng khi chuẩn bị sắp được chứng kiến khoảnh khắc thiêng liêng giữa Thanh Hằng và \"nửa kia\".",
      "category":3,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Tổng thống Mỹ Joe Biden trao đổi với Thủ tướng Israel Benjamin Netanyahu tại Tel Aviv, ngày 18/10. Ảnh: AP",
    "imageURL": "../assets/image_article/image_article8.jpg",
    "article": {
      "id": "da0e6f3a-0100-4bc7-99ef-d0cbc88137dd",
      "title":"Tổng thống Mỹ đến Israel ủng hộ cuộc chiến chống Hamas",
      "postTime":"2023-01-01T05:01:10",
      "summary":"Ngày 18/10, Tổng thống Mỹ Joe Biden đặt chân đến Israel để trao đổi về tình hình chiến sự đang leo thang ở Dải Gaza, cũng như tái khẳng định lập trường của Washington trong việc ủng hộ và hỗ trợ đồng minh Tel Aviv.",
      "content":"CNN đưa tin, chuyên cơ Air Force One chở Tổng thống Mỹ Joe Biden đã hạ cánh xuống sân bay Ben Gurion ở Tel Aviv, giữa lúc cuộc chiến của Israel và lực lượng Hamas đang diễn ra căng thẳng.\nThủ tướng Israel Benjamin Netanyahu và Tổng thống Israel Isaac Herzog đã ra tận chân cầu thang máy bay để đón Tổng thống Biden. Vừa bước xuống máy bay, ông Biden đã ôm chầm lấy hai nhà lãnh đạo Israel.{img}Trong cuộc gặp song phương với Thủ tướng Israel Netanyahu, Tổng thống Joe Biden chia sẻ rằng: \"Tôi vô cùng đau buồn và phẫn nộ trước vụ nổ tại bệnh viện ở Gaza ngày hôm qua. Dựa trên những gì tôi đã thấy, có vẻ như vụ việc đó được thực hiện bởi nhóm khác chứ không phải các bạn\".\nTổng thống Biden khẳng định: \"Tôi muốn có mặt ở đây hôm nay vì lý do đơn giản là tôi muốn người dân Israel, người dân trên thế giới biết lập trường của Mỹ. Chúng tôi sẽ tiếp tục hợp tác với các bạn và các đối tác trong khu vực để ngăn chặn thêm thảm kịch đối với thường dân vô tội\".\nNgười đứng đầu Nhà Trắng đã lên án cuộc tấn công ngày 7/10 của lực lượng Hamas vào lãnh thổ Israel, nói rằng nhóm này đã \"phạm tội ác chiến tranh và có những hành động tàn bạo\". Tuy nhiên, ông Biden cũng thừa nhận rằng mặc dù Israel có quyền tự vệ nhưng \"chúng ta cũng phải nhớ rằng Hamas không đại diện cho tất cả người dân Palestine\".\nVề phần mình, Thủ tướng Netanyahu cảm ơn ông Biden về chuyến thăm Israel - \"chuyến thăm đầu tiên của một tổng thống Mỹ tới Israel vào thời điểm chiến tranh\".{img}\"Điều này vô cùng cảm động, thể hiện sự sâu sắc trong cam kết cá nhân của ông đối với Israel, đối với tương lai của dân tộc Do Thái và nhà nước Do Thái duy nhất. Vì vậy, tôi biết mình đại diện cho tất cả người dân Israel khi nói lời cảm ơn, thưa ngài Tổng thống\", ông nói.\nChuyến thăm Israel của Tổng thống Biden nhằm thể hiện tình đoàn kết và sự ủng hộ của Washington với đồng minh Tel Aviv, trong bối cảnh các cuộc giao tranh ngày càng leo thang tại Dải Gaza.\nMột ngày trước chuyến thăm của Tổng thống Mỹ đến Israel, cơ quan y tế Gaza do Hamas điều hành cáo buộc quân đội Israel đã không kích vào bệnh viện Al-Ahli ở Dải Gaza, khiến ít nhất 500 người thiệt mạng. Đây là số người chết cao nhất trong một ngày tại Dải Gaza kể từ khi cuộc xung đột giữa Israel và Hamas nổ ra.\nHamas gọi vụ nổ bệnh viện là \"vụ thảm sát kinh hoàng\" do cuộc tấn công của Israel gây ra. Lực lượng này cho biết vụ nổ chủ yếu khiến những dân thường đang đi sơ tán thiệt mạng. Bộ Ngoại giao và Bộ Y tế Palestine cáo buộc Israel thực hiện \"vụ thảm sát\" tại bệnh viện Al-Ahli.\nTrong khi đó, Israel phủ nhận cáo buộc rằng quân đội nước này đã đánh trúng bệnh viện Al-Ahli. Người phát ngôn của Lực lượng Phòng vệ Israel (IDF) cho rằng bệnh viện tại Gaza bị nổ là do \"vụ phóng tên lửa thất bại\" của lực lượng vũ trang Hồi giáo thánh chiến (Islamic Jihad) - đồng minh của Hamas. IDF khẳng định \"không nhắm mục tiêu vào các bệnh viện\" mà \"nhắm vào các thành trì, kho vũ khí và nhóm khủng bố Hamas\". Tuy nhiên, Islamic Jihad cũng phủ nhận trách nhiệm.\nTheo CNN, việc nhà máy điện duy nhất của Gaza hết nhiên liệu vào tuần trước đã khiến các nhà máy khử mặn nước biển trong khu vực ngừng hoạt động. Điều này đã ảnh hưởng tới nguồn cung nước uống của hàng trăm nghìn dân thường. Trong khi đó, các bệnh viện trong khu vực đang phải đối mặt với tình trạng thiếu nguồn cung thiết bị y tế.",
      "category":4,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Tổng thống Mỹ Joe Biden ôm Thủ tướng Israel Benjamin Netanyahu trên đường băng sân bay Ben Gurion, Tel Aviv, ngày 18/10. Ảnh: AP",
    "imageURL": "../assets/image_article/image_article9.jpg",
    "article": {
      "id": "da0e6f3a-0100-4bc7-99ef-d0cbc88137dd",
      "title":"Tổng thống Mỹ đến Israel ủng hộ cuộc chiến chống Hamas",
      "postTime":"2023-01-01T05:01:10",
      "summary":"Ngày 18/10, Tổng thống Mỹ Joe Biden đặt chân đến Israel để trao đổi về tình hình chiến sự đang leo thang ở Dải Gaza, cũng như tái khẳng định lập trường của Washington trong việc ủng hộ và hỗ trợ đồng minh Tel Aviv.",
      "content":"CNN đưa tin, chuyên cơ Air Force One chở Tổng thống Mỹ Joe Biden đã hạ cánh xuống sân bay Ben Gurion ở Tel Aviv, giữa lúc cuộc chiến của Israel và lực lượng Hamas đang diễn ra căng thẳng.\nThủ tướng Israel Benjamin Netanyahu và Tổng thống Israel Isaac Herzog đã ra tận chân cầu thang máy bay để đón Tổng thống Biden. Vừa bước xuống máy bay, ông Biden đã ôm chầm lấy hai nhà lãnh đạo Israel.{img}Trong cuộc gặp song phương với Thủ tướng Israel Netanyahu, Tổng thống Joe Biden chia sẻ rằng: \"Tôi vô cùng đau buồn và phẫn nộ trước vụ nổ tại bệnh viện ở Gaza ngày hôm qua. Dựa trên những gì tôi đã thấy, có vẻ như vụ việc đó được thực hiện bởi nhóm khác chứ không phải các bạn\".\nTổng thống Biden khẳng định: \"Tôi muốn có mặt ở đây hôm nay vì lý do đơn giản là tôi muốn người dân Israel, người dân trên thế giới biết lập trường của Mỹ. Chúng tôi sẽ tiếp tục hợp tác với các bạn và các đối tác trong khu vực để ngăn chặn thêm thảm kịch đối với thường dân vô tội\".\nNgười đứng đầu Nhà Trắng đã lên án cuộc tấn công ngày 7/10 của lực lượng Hamas vào lãnh thổ Israel, nói rằng nhóm này đã \"phạm tội ác chiến tranh và có những hành động tàn bạo\". Tuy nhiên, ông Biden cũng thừa nhận rằng mặc dù Israel có quyền tự vệ nhưng \"chúng ta cũng phải nhớ rằng Hamas không đại diện cho tất cả người dân Palestine\".\nVề phần mình, Thủ tướng Netanyahu cảm ơn ông Biden về chuyến thăm Israel - \"chuyến thăm đầu tiên của một tổng thống Mỹ tới Israel vào thời điểm chiến tranh\".{img}\"Điều này vô cùng cảm động, thể hiện sự sâu sắc trong cam kết cá nhân của ông đối với Israel, đối với tương lai của dân tộc Do Thái và nhà nước Do Thái duy nhất. Vì vậy, tôi biết mình đại diện cho tất cả người dân Israel khi nói lời cảm ơn, thưa ngài Tổng thống\", ông nói.\nChuyến thăm Israel của Tổng thống Biden nhằm thể hiện tình đoàn kết và sự ủng hộ của Washington với đồng minh Tel Aviv, trong bối cảnh các cuộc giao tranh ngày càng leo thang tại Dải Gaza.\nMột ngày trước chuyến thăm của Tổng thống Mỹ đến Israel, cơ quan y tế Gaza do Hamas điều hành cáo buộc quân đội Israel đã không kích vào bệnh viện Al-Ahli ở Dải Gaza, khiến ít nhất 500 người thiệt mạng. Đây là số người chết cao nhất trong một ngày tại Dải Gaza kể từ khi cuộc xung đột giữa Israel và Hamas nổ ra.\nHamas gọi vụ nổ bệnh viện là \"vụ thảm sát kinh hoàng\" do cuộc tấn công của Israel gây ra. Lực lượng này cho biết vụ nổ chủ yếu khiến những dân thường đang đi sơ tán thiệt mạng. Bộ Ngoại giao và Bộ Y tế Palestine cáo buộc Israel thực hiện \"vụ thảm sát\" tại bệnh viện Al-Ahli.\nTrong khi đó, Israel phủ nhận cáo buộc rằng quân đội nước này đã đánh trúng bệnh viện Al-Ahli. Người phát ngôn của Lực lượng Phòng vệ Israel (IDF) cho rằng bệnh viện tại Gaza bị nổ là do \"vụ phóng tên lửa thất bại\" của lực lượng vũ trang Hồi giáo thánh chiến (Islamic Jihad) - đồng minh của Hamas. IDF khẳng định \"không nhắm mục tiêu vào các bệnh viện\" mà \"nhắm vào các thành trì, kho vũ khí và nhóm khủng bố Hamas\". Tuy nhiên, Islamic Jihad cũng phủ nhận trách nhiệm.\nTheo CNN, việc nhà máy điện duy nhất của Gaza hết nhiên liệu vào tuần trước đã khiến các nhà máy khử mặn nước biển trong khu vực ngừng hoạt động. Điều này đã ảnh hưởng tới nguồn cung nước uống của hàng trăm nghìn dân thường. Trong khi đó, các bệnh viện trong khu vực đang phải đối mặt với tình trạng thiếu nguồn cung thiết bị y tế.",
      "category":4,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Chủ tịch nước Võ Văn Thưởng gặp Tổng Thư ký Liên hợp quốc Antonio Guterres. Ảnh: TTXVN",
    "imageURL": "../assets/image_article/image_article10.jpg",
    "article": {
      "id": "da0e6f3a-0101-4bc7-99ef-d0cbc88137dd",
      "title":"Đề nghị Liên hợp quốc tiếp tục hỗ trợ Việt Nam thực hiện các cam kết quốc tế",
      "postTime":"2023-01-01T06:01:10",
      "summary":"(PLVN) - Chủ tịch nước Võ Văn Thưởng đề nghị Liên hợp quốc tiếp tục hỗ trợ Việt Nam thực hiện các cam kết quốc tế, trong đó có Chương trình Nghị sự chung của chúng ta (OCA) cũng như trong quá trình thực hiện các mục tiêu phát triển quốc gia.",
      "content":"Nhân dịp tham dự Diễn đàn cấp cao hợp tác quốc tế Vành đai và Con đường lần thứ ba, chiều 18/10 (giờ địa phương), Chủ tịch nước Võ Văn Thưởng đã tiếp Tổng Thư ký Liên hợp quốc (LHQ) António Guterres.\nChủ tịch nước chúc mừng Tổng Thư ký Guterres nhân kỉ niệm ngày thành lập LHQ 24/10 và chúc Tổng Thư ký trên cương vị của mình tiếp tục thúc đẩy hoàn thành Mục tiêu phát triển bền vững, đem lại hoà bình, hợp tác và thịnh vượng cho người dân trên toàn thế giới.{img}Trong không khí chân thành, cởi mở, hai nhà lãnh đạo bày tỏ vui mừng lần đầu tiên gặp nhau.\nChủ tịch nước đánh giá cao vai trò và đóng góp của Tổng Thư ký và LHQ cho hoà bình, ổn định, an ninh quốc tế, đồng thời khẳng định Việt Nam luôn sẵn sàng ủng hộ và tích cực đóng góp vào các nỗ lực chung đó.\nChủ tịch nước khẳng định Việt Nam luôn coi LHQ là tổ chức hàng đầu vì hòa bình, hợp tác, phát triển trên thế giới và người bạn tin cậy, thủy chung, gắn bó lâu dài của Việt Nam trong mọi chặng đường phát triển đất nước.\nChủ tịch nước Võ Văn Thưởng cho biết Việt Nam đang tích cực phối hợp với các tổ chức trong hệ thống LHQ triển khai nhiều hoạt động hợp tác như thực hiện các Mục tiêu phát triển bền vững, ứng phó với biến đổi khí hậu, chuyển đổi số, chuyển đổi xanh, bảo đảm công bằng xã hội, tham gia lực lượng gìn giữ hoà bình.\nChủ tịch nước đề nghị LHQ tiếp tục hỗ trợ Việt Nam thực hiện các cam kết quốc tế, trong đó có Chương trình Nghị sự chung của chúng ta (OCA) cũng như trong quá trình thực hiện các mục tiêu phát triển quốc gia.\nTổng Thư ký LHQ António Guterres bày tỏ vui mừng được gặp Chủ tịch nước Võ Văn Thưởng, đồng thời chuyển lời thăm hỏi và lời chúc sức khỏe đến Tổng Bí thư Nguyễn Phú Trọng và lãnh đạo Đảng, Nhà nước Việt Nam.\nTổng Thư ký cảm ơn sự hợp tác và ủng hộ tuyệt vời của Việt Nam dành cho LHQ trên tất cả các lĩnh vực hoạt động ưu tiên, đặc biệt là gìn giữ hòa bình, an ninh quốc tế, biến đổi khí hậu, phát triển bền vững, bảo đảm an ninh nguồn nước, an ninh lương thực.\nTổng Thư ký nhấn mạnh Việt Nam là một hình mẫu tốt cho nhiều nước đang phát triển và là đối tác quan trọng của LHQ, đồng thời bày tỏ trông đợt đối với đóng góp ngày càng lớn của Việt Nam vào quản trị toàn cầu.\nBên cạnh đó, Tổng Thư ký António Guterres hoàn toàn nhất trí, chia sẻ các quan điểm của Việt Nam về đề cao chủ nghĩa đa phương, luật pháp quốc tế, nâng cao hiệu quả của các thể chế quốc tế.\nTổng Thư ký chúc Chính phủ và nhân dân Việt Nam thực hiện thành công các mục tiêu về hoà bình, thịnh vượng và tiếp tục có đóng góp, thể hiện vai trò trách nhiệm đối với thế giới và LHQ.\n\nTổng thư ký khẳng định sẽ hết sức hỗ trợ Việt Nam trong quá trình thực hiện các cam kết của mình về phát triển bền vững và ứng phó biến đổi khí hậu.\n\nChia sẻ về tình hình khu vực, hai nhà lãnh đạo nhất trí về sự cần thiết phải đề cao thượng tôn pháp luật, phát huy vai trò của các cơ chế đối thoại, hợp tác giữa các tổ chức khu vực và LHQ, ủng hộ vai trò trung tâm của ASEAN.",
      "category":5,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Mẫu giáo án theo Công văn 5512/BGDĐT-GDTrH chỉ quy định ở học kì 2 năm học 2020-2021?",
    "imageURL": "../assets/image_article/image_article11.jpg",
    "article": {
      "id": "da0e6f3a-0110-4bc7-99ef-d0cbc88137dd",
      "title":"Không có văn bản nào bắt GV soạn giáo án theo phụ lục CV 5512, thầy cô cần rõ",
      "postTime":"2023-01-01T06:05:10",
      "summary":"GDVN- Giáo viên khó có thể dạy thành công Chương trình giáo dục phổ thông 2018 nếu ngành giáo dục địa phương \"ép\" thầy cô soạn giáo án theo Công văn 5512/BGDĐT-GDTrH.",
      "content":"Từ năm học 2021-2022 đến nay, theo ghi nhận của tôi (giáo viên bậc trung học phổ thông), Bộ Giáo dục và Đào tạo không có văn bản nào chỉ đạo giáo viên trung học cơ sở, trung học phổ thông phải soạn Kế hoạch bài dạy (giáo án) theo Công văn 5512/BGDĐT-GDTrH.\nTuy vậy, nhiều đồng nghiệp trên khắp cả nước chia sẻ với tôi rằng, ngành giáo dục ở một số địa phương nơi thầy cô đang công tác vẫn \"ép\" họ soạn Kế hoạch bài dạy (giáo án) theo mẫu Phụ lục 4 Công văn 5512/BGDĐT-GDTrH.\nPhải chăng, địa phương nào \"ép\" giáo viên soạn Kế hoạch bài dạy (giáo án) theo mẫu Phụ lục 4 Công văn 5512/BGDĐT-GDTrH là chưa hiểu rõ tinh thần chỉ đạo về đổi mới phương pháp giảng dạy qua các văn bản của ngành giáo dục?{img}Ngày 18/12/2020, Bộ Giáo dục và Đào tạo ban hành Công văn số 5512/BGDĐT-GDTrH về việc xây dựng và tổ chức thực hiện kế hoạch giáo dục của nhà trường.\nTheo đó, mẫu kế hoạch giáo dục của giáo viên và kế hoạch bài dạy (giáo án) được quy định như sau:\n\"Căn cứ vào Kế hoạch dạy học các môn học của tổ chuyên môn, giáo viên được phân công dạy học môn học ở các khối lớp xây dựng Kế hoạch giáo dục của giáo viên trong năm học (theo Khung kế hoạch giáo dục của giáo viên tại Phụ lục 3); trên cơ sở đó xây dựng các Kế hoạch bài dạy (theo Khung kế hoạch bài dạy tại Phụ lục 4) để tổ chức dạy học\".\nNhư thế, theo người viết, mẫu kế hoạch bài dạy (giáo án) theo Công văn 5512/BGDĐT-GDTrH chỉ quy định ở học kì 2 năm học 2020-2021 vì ngày ban hành Công văn là 18/12/2020 (gần hết học kì 1 của năm học này).\nTuy vậy, vào thời điểm này, ngành giáo dục Thành phố Hồ Chí Minh vẫn không yêu cầu giáo viên phải soạn kế hoạch bài dạy (giáo án) theo mẫu Công văn 5512/BGDĐT-GDTrH.\nNhiều giáo viên ở Thành phố lập luận, phần mục tiêu chung của Công văn 5512/BGDĐT-GDTrH có nội dung: \"Phát huy tính chủ động, sáng tạo của tổ chuyên môn và giáo viên trong việc thực hiện chương trình; khai thác, sử dụng hiệu quả cơ sở vật chất, thiết bị dạy học đáp ứng yêu cầu thực hiện các phương pháp dạy học và kiểm tra, đánh giá theo yêu cầu phát triển phẩm chất, năng lực học sinh\" nên không cần phải soạn giáo án theo mẫu nào cả.\nTừ năm học 2021-2022, người viết nhận thấy, Bộ Giáo dục và Đào tạo cũng không có quy định giáo viên phải soạn kế hoạch bài dạy (giáo án) theo mẫu Công văn số 5512/BGDĐT-GDTrH.\nTừ những căn cứ như đã phân tích, theo tôi, địa phương nào \"ép\" giáo viên soạn kế hoạch bài dạy (giáo án) theo mẫu Phụ lục 4 Công văn 5512/BGDĐT-GDTrH là đi ngược lại quan điểm dạy học của Chương trình giáo dục phổ thông 2018 và của Bộ Giáo dục và Đào tạo.\nHơn ai hết, giáo viên phải dựa vào hành lang pháp lí, Chương trình giáo dục phổ thông 2018 (của từng bộ môn) và thực tiễn dạy học để soạn cho mình một kế hoạch bài dạy (giáo án) phù hợp theo từng đối tượng học sinh thì việc dạy học mới mang lại hiệu quả cao nhất.",
      "category":6,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Ông Duke Hipp, Giám đốc Đối ngoại và Hợp tác Chiến lược (CropLife châu Á) phát biểu- Ảnh: VGP/Đỗ Hương",
    "imageURL": "../assets/image_article/image_article12.jpg",
    "article": {
      "id": "da0e6f3a-0111-4bc7-99ef-d0cbc88137dd",
      "title":"CropLife châu Á đồng hành phát triển ứng dụng khoa học công nghệ nông nghiệp Việt Nam",
      "postTime":"2023-01-01T01:45:10",
      "summary":"Vụ Khoa học công nghệ và Môi trường (Bộ NN&PTNT) và Hiệp hội CropLife châu Á đã ký Biên bản ghi nhớ hợp tác về hợp tác thúc đẩy nghiên cứu phát triển và ứng dụng giải pháp, công nghệ tiên tiến giai đoạn 2023-2030.",
      "content":"Bà Nguyễn Giang Thu, Phó Vụ trưởng Vụ Khoa học công nghệ và Môi trường cho rằng, cần huy động mọi nguồn lực để phát triển có trọng điểm với mục tiêu và sản phẩm cụ thể, hiệu quả; tăng nguồn lực tài chính trong nghiên cứu nông nghiệp, ưu tiên đầu tư trong một số lĩnh vực công nghệ, đặc biệt là công nghệ cao. Đồng thời, nâng cấp, hoàn thiện hạ tầng nông nghiệp; ứng dụng nông nghiệp số, nông nghiệp tuần hoàn.\nBên cạnh đó cũng cần xây dựng cơ chế thúc đẩy nghiên cứu, chuyển giao công nghệ trong nông nghiệp; cơ chế công tư (PPP) hiệu quả hơn; nâng cao chất lượng nguồn nhân lực khoa học công nghệ. Phát triển các tổ chức trung gian của thị trường khoa học công nghệ nhằm đa dạng hóa dịch vụ.{img}Ông Duke Hipp, Giám đốc Đối ngoại và Hợp tác chiến lược (CropLife châu Á) cho rằng, các đổi mới sáng tạo trong lĩnh vực bảo vệ thực vật và cây trồng công nghệ sinh học giúp giảm bớt phát thải khí nhà kính.\nĐồng thời cho biết, mạng lưới của CropLife trên toàn cầu đã triển khai hơn 300 dự án hợp tác với các đối tác trong chuỗi giá trị để triển khai tập huấn cho các nông hộ nhỏ, bảo đảm canh tác cây trồng một cách bền vững (tính tới nay đã tập huấn cho khoảng 4 triệu hộ nông dân).{img}\"Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc (FAO) ước tính rằng, sản lượng lương thực toàn cầu sẽ thâm hụt gấp đôi nếu nông dân không sử dụng thuốc bảo vệ thực vật. Hiện chúng tôi cũng đang đi đầu trong các hoạt động thu gom, tiêu huỷ và tái chế bao gói thuốc bảo vệ thực vật bằng nhựa một cách an toàn và có trách nhiệm\", ông Duke Hipp nói.\nCũng theo ông Duke Hipp, bùng nổ thương mại điện tử (TMĐT) trong nông nghiệp tại khu vực là một điểm sáng của đổi mới sáng tạo. Việt Nam trở thành thị trường TMĐT lớn thứ 2 tại khu vực Đông Nam Á trong nửa đầu năm 2022, tới đầu năm 2022, đã có hơn 5,2 triệu tài khoản nông hộ bán sản phẩm của họ trên các nền tảng số. Thị trường TMĐT của Việt Nam được kỳ vọng sẽ tăng trưởng mạnh mẽ và đạt giá trị khoảng 39 tỷ USD vào năm 2025 và bán hoa quả, nông sản tươi qua hình thức phát video trực tiếp (livestreaming) được dự đoán là sẽ bùng nổ mạnh tại Việt Nam.\n\"Các giải pháp khoa học thực vật tiên tiến như công nghệ sinh học và bảo vệ thực vật, nông nghiệp số và chính xác đang hỗ trợ nông dân giảm thiểu và thích ứng với biến đổi khí hậu, đồng thời tăng cường bảo vệ tài nguyên thiên nhiên và nâng cao năng suất. Những đổi mới về giống cây trồng, như khả năng chống chịu thuốc trừ cỏ và cải thiện khả năng kiểm soát cỏ dại đã giúp cô lập hơn 300 triệu tấn CO2 trong 25 năm qua. Con số này tương đương với lượng khí thải hàng năm của bang California.\nTrong khi đó, với công nghệ chỉnh sửa gene, các nhà lai tạo giống cây trồng có thể phát triển ra những giống có khả năng thu giữ carbon, kháng sâu bệnh và mầm bệnh tốt hơn; thậm chí đẩy nhanh quá trình thuần hóa các loài cây trồng mới\", ông Duke Hipp nhấn mạnh.\nTheo biên bản hợp tác, hai bên sẽ thúc đẩy các hoạt động truyền thông, chia sẻ thông tin, tư vấn chính sách, đào tạo tập huấn, hội thảo khoa học chuyên sâu để cập nhật, khuyến khích ứng dụng các giải pháp, thành tựu của khoa học công nghệ và đổi mới sáng tạo tiên tiến trong nông nghiệp, cũng như hỗ trợ nông dân tiếp cận, ứng dụng các tiến bộ khoa học mới trong nông nghiệp, hướng tới mục tiêu phát triển nông nghiệp bền vững của Việt Nam.",
      "category":7,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Lễ ký Biên bản ghi nhớ hợp tác về hợp tác thúc đẩy nghiên cứu phát triển và ứng dụng giải pháp, công nghệ tiên tiến giai đoạn 2023-2030 - Ảnh: VGP/Đỗ Hương",
    "imageURL": "../assets/image_article/image_article13.jpg",
    "article": {
      "id": "da0e6f3a-0111-4bc7-99ef-d0cbc88137dd",
      "title":"CropLife châu Á đồng hành phát triển ứng dụng khoa học công nghệ nông nghiệp Việt Nam",
      "postTime":"2023-01-01T01:45:10",
      "summary":"Vụ Khoa học công nghệ và Môi trường (Bộ NN&PTNT) và Hiệp hội CropLife châu Á đã ký Biên bản ghi nhớ hợp tác về hợp tác thúc đẩy nghiên cứu phát triển và ứng dụng giải pháp, công nghệ tiên tiến giai đoạn 2023-2030.",
      "content":"Bà Nguyễn Giang Thu, Phó Vụ trưởng Vụ Khoa học công nghệ và Môi trường cho rằng, cần huy động mọi nguồn lực để phát triển có trọng điểm với mục tiêu và sản phẩm cụ thể, hiệu quả; tăng nguồn lực tài chính trong nghiên cứu nông nghiệp, ưu tiên đầu tư trong một số lĩnh vực công nghệ, đặc biệt là công nghệ cao. Đồng thời, nâng cấp, hoàn thiện hạ tầng nông nghiệp; ứng dụng nông nghiệp số, nông nghiệp tuần hoàn.\nBên cạnh đó cũng cần xây dựng cơ chế thúc đẩy nghiên cứu, chuyển giao công nghệ trong nông nghiệp; cơ chế công tư (PPP) hiệu quả hơn; nâng cao chất lượng nguồn nhân lực khoa học công nghệ. Phát triển các tổ chức trung gian của thị trường khoa học công nghệ nhằm đa dạng hóa dịch vụ.{img}Ông Duke Hipp, Giám đốc Đối ngoại và Hợp tác chiến lược (CropLife châu Á) cho rằng, các đổi mới sáng tạo trong lĩnh vực bảo vệ thực vật và cây trồng công nghệ sinh học giúp giảm bớt phát thải khí nhà kính.\nĐồng thời cho biết, mạng lưới của CropLife trên toàn cầu đã triển khai hơn 300 dự án hợp tác với các đối tác trong chuỗi giá trị để triển khai tập huấn cho các nông hộ nhỏ, bảo đảm canh tác cây trồng một cách bền vững (tính tới nay đã tập huấn cho khoảng 4 triệu hộ nông dân).{img}\"Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc (FAO) ước tính rằng, sản lượng lương thực toàn cầu sẽ thâm hụt gấp đôi nếu nông dân không sử dụng thuốc bảo vệ thực vật. Hiện chúng tôi cũng đang đi đầu trong các hoạt động thu gom, tiêu huỷ và tái chế bao gói thuốc bảo vệ thực vật bằng nhựa một cách an toàn và có trách nhiệm\", ông Duke Hipp nói.\nCũng theo ông Duke Hipp, bùng nổ thương mại điện tử (TMĐT) trong nông nghiệp tại khu vực là một điểm sáng của đổi mới sáng tạo. Việt Nam trở thành thị trường TMĐT lớn thứ 2 tại khu vực Đông Nam Á trong nửa đầu năm 2022, tới đầu năm 2022, đã có hơn 5,2 triệu tài khoản nông hộ bán sản phẩm của họ trên các nền tảng số. Thị trường TMĐT của Việt Nam được kỳ vọng sẽ tăng trưởng mạnh mẽ và đạt giá trị khoảng 39 tỷ USD vào năm 2025 và bán hoa quả, nông sản tươi qua hình thức phát video trực tiếp (livestreaming) được dự đoán là sẽ bùng nổ mạnh tại Việt Nam.\n\"Các giải pháp khoa học thực vật tiên tiến như công nghệ sinh học và bảo vệ thực vật, nông nghiệp số và chính xác đang hỗ trợ nông dân giảm thiểu và thích ứng với biến đổi khí hậu, đồng thời tăng cường bảo vệ tài nguyên thiên nhiên và nâng cao năng suất. Những đổi mới về giống cây trồng, như khả năng chống chịu thuốc trừ cỏ và cải thiện khả năng kiểm soát cỏ dại đã giúp cô lập hơn 300 triệu tấn CO2 trong 25 năm qua. Con số này tương đương với lượng khí thải hàng năm của bang California.\nTrong khi đó, với công nghệ chỉnh sửa gene, các nhà lai tạo giống cây trồng có thể phát triển ra những giống có khả năng thu giữ carbon, kháng sâu bệnh và mầm bệnh tốt hơn; thậm chí đẩy nhanh quá trình thuần hóa các loài cây trồng mới\", ông Duke Hipp nhấn mạnh.\nTheo biên bản hợp tác, hai bên sẽ thúc đẩy các hoạt động truyền thông, chia sẻ thông tin, tư vấn chính sách, đào tạo tập huấn, hội thảo khoa học chuyên sâu để cập nhật, khuyến khích ứng dụng các giải pháp, thành tựu của khoa học công nghệ và đổi mới sáng tạo tiên tiến trong nông nghiệp, cũng như hỗ trợ nông dân tiếp cận, ứng dụng các tiến bộ khoa học mới trong nông nghiệp, hướng tới mục tiêu phát triển nông nghiệp bền vững của Việt Nam.",
      "category":7,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Mẹo rán thức ăn không bị nát dù chảo chống dính đã hết lớp chống dính.",
    "imageURL": "../assets/image_article/image_article14.jpg",
    "article": {
      "id": "da0e6f3a-1000-4bc7-99ef-d0cbc88137dd",
      "title":"Một cách duy nhất, cực đơn giản để rán thức ăn 'lành lặn' khi chảo chống dính bị bong tróc",
      "postTime":"2023-01-01T06:30:10",
      "summary":"Với mẹo nhỏ được học từ bộ đội này, các chị em nội trợ sẽ không phải lo chiên, dán đồ ăn bị nát vì chảo chống dính bị hỏng.",
      "content":"Sau một thời gian sử dụng, dù chảo chống dính có là loại 'xịn xò' đến mấy thì lớp chống dính của chảo sẽ bị bong tróc, hết lớp chống dính. Nhiều chị em nội trợ muốn chiên, rán thì luôn gặp tình trạng đồ ăn bị xát, dẫn tới nát, không còn trông đẹp mắt, ngon miệng nữa.{img}Trong 1 lần đi công tác tại các đơn vị quân đội, tôi học được mộtmẹo rán thức ăncực kỳ hữu ích từ các chú bộ đội bộ phận hậu cần: Dù chảo chống dính bị bong hết lớp chống dính hay thậm chí là các loại chảo gang, chảo thông thường thì vẫn rán đậu, chiên cá cực kỳ 'mượt'.\nCách làm như sau:\n- Luôn rửa chảo thật sạch, để khô.\n- Bắc chảo lên bếp, chờ chảo nóng nhẹ thì đổ một lượng rất ít dầu vào chảo, láng khắp mặt chảo và để 10 -15 giây.\n- Sau đó tắt bếp, lấy một ít nước lọc đổ vào chảo đang có dầu, láng đều mặt chảo rồi đổ cả nước và dầu trong chảo ra ngoài.\n- Đổ xong, đặt lại chảo lên bếp, bật bếp, chờ chảo nóng, đổ dầu vào, chờ dầu sôi và cho thức ăn vào rán.\nVới cách làm trên, đảm bảo dù gặp bất kỳ chảo nào thì việc rán thức ăn cũng trở nên cực kỳ đơn giản, không còn lo đồ ăn bị nát, vỡ miếng nữa. Lý do là bởi, khi mặt chảo được láng 1 lớp dầu và 1 lớp nước thì sẽ trơn tuột, khi cho dầu mỡ vào thì đồ ăn sẽ không bao giờ bị xát chảo nữa.\nChị em hãy làm theo cách trên ngay từ hôm nay để tự tin rán thức ăn rất ngon mắt nhé!",
      "category":8,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Hình ảnh bữa ăn dành cho học sinh bán trú gây nhiều tranh cãi trước đó. ",
    "imageURL": "../assets/image_article/image_article15.jpg",
    "article": {
      "id": "da0e6f3a-1001-4bc7-99ef-d0cbc88137dd",
      "title":"Gây tranh cãi suất cơm nghèo nàn, trường THCS ở Hà Nội tạm dừng bếp ăn",
      "postTime":"2023-01-01T05:38:10",
      "summary":"(VTC News) - Ban Giám hiệu trường THCS Yên Nghĩa ra thông báo tạm dừng bếp ăn do phục vụ suất cơm không đảm bảo dinh dưỡng tới phụ huynh chiều 18/10.",
      "content":"Cụ thể, chiều 18/10, phụ huynh học sinh trường THCS Yên Nghĩa (Hà Đông, Hà Nội) nhận được thông báo của nhà trường gửi tới các nhóm lớp thông qua các nhóm chat với nội dung:\n\"Để đảm bảo công tác chăm sóc bán trú được tốt hơn, theo sự chỉ đạo của cấp trên, Ban Giám hiệu trường THCS Yên Nghĩa xin thông báo tới các bậc phụ huynh tạm thời dừng ăn bán trú từ ngày 19/10/2023. Thời khóa biểu học thêm của các lớp bán trú sẽ thay đổi từ tuần 8. Rất mong phụ huynh học sinh phối hợp và thực hiện\".\nThông báo bất ngờ trên khiến nhiều phụ huynh hoang mang và lo lắng do không kịp chuẩn bị phương án khác cho việc ăn uống buổi trưa của con em mình.{img}Có hai con nhỏ đang theo học tại trường THCS Yên Nghĩa, chị Phạm Thuý Nga chia sẻ: “Tôi rất bất ngờ và bị động trước thông báo của nhà trường. Với công việc bận rộn và nhà ít người, tôi chưa thể lên phương án sắp xếp bữa trưa cho hai con của mình”.\nTâm lý trên của chị Nga cũng như nhiều phụ huynh có con học tại trường THCS Yên Nghĩa là điều dễ hiểu do nhiều gia đình ở xa trường học. Ngoài ra, do tính chất công việc, các phụ huynh khó lòng sắp xếp công việc để đón con ăn trưa rồi lại quay trở lại trường.\nMặc dù trước đó trong cuộc họp 3 bên diễn ra vào chiều 17/10, phụ huynh cùng nhà trường và bếp ăn đã thống nhất duy trì thời gian hoạt động đến hết tháng. Trường hợp phụ huynh thấy không ổn mới tạm dừng hoặc đổi đơn vị khác. Vậy nên việc thay đổi này khiến nhiều phụ huynh không kịp trở tay.{img}Ngay trong chiều 18/10, Ban Phụ huynh học sinh đã có buổi làm việc với nhà trường. Tuy nhiên, theo nhà trường, quyết định tạm dừng bếp bán trú là do quận chỉ đạo, chính vì thế nhà trường chỉ có thể sắp xếp lại lịch học cho học sinh phù hợp trong thời gian tới.\nNgày 18/10, bà Hoàng Thị Thu Trinh, Hiệu trưởng THCS Yên Nghĩa xác nhận, trước mắt, nhà trường sẽ xem xét tạm dừng cung cấp các suất ăn bán trú cho học sinh. Bà Trinh cho biết, trong ngày, trường đã báo cáo sự việc gửi đến Phòng GD&ĐT quận Hà Đông.\nVề phía nhà trường, trong trường hợp tiếp tục giữ lại bếp ăn, cung cấp suất ăn cho học sinh, trường sẽ thay đổi một số khâu trong quản lý bán trú để hiệu quả công việc được tốt hơn. Tăng cường công tác quản lý, giám sát các khâu bếp ăn nếu tiếp tục thực hiện bếp ăn. Nhà trường sẽ cho lắp camera trong nhà bếp và tiếp thu ý kiến của phụ huynh phản ánh về bếp để có biện pháp khắc phục, thay đổi kịp thời.\nBà Trinh cho biết, việc dừng cung cấp bếp ăn là biện pháp trước mắt. Thời gian tới, nếu các phụ huynh vẫn mong muốn nhà trường cung cấp suất ăn cho học sinh, các bên liên quan sẽ bàn lại và xem xét nhà cung cấp dịch vụ nào đủ năng lực sẽ hợp tác.\nTrao đổi với báo chí, bà Phạm Thị Hòa, Phó Chủ tịch UBND quận Hà Đông cho biết, quận vừa có chỉ đạo trường THCS Yên Nghĩa tạm thời dừng tổ chức ăn bán trú, bắt đầu từ ngày 19/10.\nTheo bà Hoà, bậc học trung học cơ sở không bắt buộc tổ chức ăn bán trú tại trường nên công tác quản lý của các trường còn nhiều lúng túng. Vì vậy, UBND quận tạm thời chỉ đạo trường dừng ăn bán trú để nhà trường và phụ huynh tìm được tiếng nói chung, xem xét, bàn bạc, phân tích chặt chẽ, đi đến sự thống nhất cao, có biện pháp tốt nhất để cùng triển khai thực hiện.\n“Chúng tôi chỉ cho tạm dừng bếp ăn, khi nào phụ huynh và nhà trường không còn bất cứ hiểu lầm nào nữa sẽ tiếp tục thực hiện bán trú, tạo điều kiện học tập tốt nhất cho học sinh\", bà Hòa cho biết thêm.\nVề phía phòng đơn vị quản lý giáo dục, bà Phạm Thị Lệ Hằng, Trưởng Phòng Giáo dục và Đào tạo quận Hà Đông cho biết, trường THCS Yên Nghĩa thông báo tạm dừng bếp ăn bán trú do không thể bố trí đủ nguồn lực, giáo viên tham gia giám sát quy trình hoạt động của bếp ăn. Do đó, trường đã xin tạm dừng bếp ăn bán trú để nghiên cứu, lựa chọn phương án phù hợp.\nTheo bà Hằng, với bậc THCS, giáo viên không có nghiệp vụ chăm nuôi, giám sát bếp ăn bán trú như ở bậc mầm non. Do đó, việc tổ chức cung cấp, giám sát hoạt động ăn uống của học sinh còn nhiều hạn chế.\n“Mong rằng, phụ huynh có chia sẻ với các cô, động viên nhà trường. Nếu sau này tìm được phương pháp, định hướng phù hợp sẽ tiếp tục tổ chức bữa ăn bán trú\", bà Hằng nói.\nChiều 17/10, tại cuộc họp ba bên liên quan bao gồm nhà trường, đại diện Công ty Hoa Sữa - đơn vị cung cấp suất ăn bán trú và Ban đại diện phụ huynh các lớp, Hiệu trưởng Hoàng Thị Thu Trinh kiến nghị, phụ huynh phối hợp với nhà trường tiếp tục giám sát bếp ăn đến hết tháng 10/2023.\nNếu công ty làm tốt, phụ huynh đồng ý, nhà trường tiếp tục duy trì bếp ăn bán trú với công ty này. Ngược lại, nhà trường sẽ tạm dừng bếp ăn trong một thời gian để tìm hiểu các đơn vị cung cấp thực phẩm khác.",
      "category":9,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Tin nhắn thông báo tạm dừng cung cấp bữa ăn bán trú được gửi tới phụ huynh trường THCS Yên Nghĩa. ",
    "imageURL": "../assets/image_article/image_article16.jpg",
    "article": {
      "id": "da0e6f3a-1001-4bc7-99ef-d0cbc88137dd",
      "title":"Gây tranh cãi suất cơm nghèo nàn, trường THCS ở Hà Nội tạm dừng bếp ăn",
      "postTime":"2023-01-01T05:38:10",
      "summary":"(VTC News) - Ban Giám hiệu trường THCS Yên Nghĩa ra thông báo tạm dừng bếp ăn do phục vụ suất cơm không đảm bảo dinh dưỡng tới phụ huynh chiều 18/10.",
      "content":"Cụ thể, chiều 18/10, phụ huynh học sinh trường THCS Yên Nghĩa (Hà Đông, Hà Nội) nhận được thông báo của nhà trường gửi tới các nhóm lớp thông qua các nhóm chat với nội dung:\n\"Để đảm bảo công tác chăm sóc bán trú được tốt hơn, theo sự chỉ đạo của cấp trên, Ban Giám hiệu trường THCS Yên Nghĩa xin thông báo tới các bậc phụ huynh tạm thời dừng ăn bán trú từ ngày 19/10/2023. Thời khóa biểu học thêm của các lớp bán trú sẽ thay đổi từ tuần 8. Rất mong phụ huynh học sinh phối hợp và thực hiện\".\nThông báo bất ngờ trên khiến nhiều phụ huynh hoang mang và lo lắng do không kịp chuẩn bị phương án khác cho việc ăn uống buổi trưa của con em mình.{img}Có hai con nhỏ đang theo học tại trường THCS Yên Nghĩa, chị Phạm Thuý Nga chia sẻ: “Tôi rất bất ngờ và bị động trước thông báo của nhà trường. Với công việc bận rộn và nhà ít người, tôi chưa thể lên phương án sắp xếp bữa trưa cho hai con của mình”.\nTâm lý trên của chị Nga cũng như nhiều phụ huynh có con học tại trường THCS Yên Nghĩa là điều dễ hiểu do nhiều gia đình ở xa trường học. Ngoài ra, do tính chất công việc, các phụ huynh khó lòng sắp xếp công việc để đón con ăn trưa rồi lại quay trở lại trường.\nMặc dù trước đó trong cuộc họp 3 bên diễn ra vào chiều 17/10, phụ huynh cùng nhà trường và bếp ăn đã thống nhất duy trì thời gian hoạt động đến hết tháng. Trường hợp phụ huynh thấy không ổn mới tạm dừng hoặc đổi đơn vị khác. Vậy nên việc thay đổi này khiến nhiều phụ huynh không kịp trở tay.{img}Ngay trong chiều 18/10, Ban Phụ huynh học sinh đã có buổi làm việc với nhà trường. Tuy nhiên, theo nhà trường, quyết định tạm dừng bếp bán trú là do quận chỉ đạo, chính vì thế nhà trường chỉ có thể sắp xếp lại lịch học cho học sinh phù hợp trong thời gian tới.\nNgày 18/10, bà Hoàng Thị Thu Trinh, Hiệu trưởng THCS Yên Nghĩa xác nhận, trước mắt, nhà trường sẽ xem xét tạm dừng cung cấp các suất ăn bán trú cho học sinh. Bà Trinh cho biết, trong ngày, trường đã báo cáo sự việc gửi đến Phòng GD&ĐT quận Hà Đông.\nVề phía nhà trường, trong trường hợp tiếp tục giữ lại bếp ăn, cung cấp suất ăn cho học sinh, trường sẽ thay đổi một số khâu trong quản lý bán trú để hiệu quả công việc được tốt hơn. Tăng cường công tác quản lý, giám sát các khâu bếp ăn nếu tiếp tục thực hiện bếp ăn. Nhà trường sẽ cho lắp camera trong nhà bếp và tiếp thu ý kiến của phụ huynh phản ánh về bếp để có biện pháp khắc phục, thay đổi kịp thời.\nBà Trinh cho biết, việc dừng cung cấp bếp ăn là biện pháp trước mắt. Thời gian tới, nếu các phụ huynh vẫn mong muốn nhà trường cung cấp suất ăn cho học sinh, các bên liên quan sẽ bàn lại và xem xét nhà cung cấp dịch vụ nào đủ năng lực sẽ hợp tác.\nTrao đổi với báo chí, bà Phạm Thị Hòa, Phó Chủ tịch UBND quận Hà Đông cho biết, quận vừa có chỉ đạo trường THCS Yên Nghĩa tạm thời dừng tổ chức ăn bán trú, bắt đầu từ ngày 19/10.\nTheo bà Hoà, bậc học trung học cơ sở không bắt buộc tổ chức ăn bán trú tại trường nên công tác quản lý của các trường còn nhiều lúng túng. Vì vậy, UBND quận tạm thời chỉ đạo trường dừng ăn bán trú để nhà trường và phụ huynh tìm được tiếng nói chung, xem xét, bàn bạc, phân tích chặt chẽ, đi đến sự thống nhất cao, có biện pháp tốt nhất để cùng triển khai thực hiện.\n“Chúng tôi chỉ cho tạm dừng bếp ăn, khi nào phụ huynh và nhà trường không còn bất cứ hiểu lầm nào nữa sẽ tiếp tục thực hiện bán trú, tạo điều kiện học tập tốt nhất cho học sinh\", bà Hòa cho biết thêm.\nVề phía phòng đơn vị quản lý giáo dục, bà Phạm Thị Lệ Hằng, Trưởng Phòng Giáo dục và Đào tạo quận Hà Đông cho biết, trường THCS Yên Nghĩa thông báo tạm dừng bếp ăn bán trú do không thể bố trí đủ nguồn lực, giáo viên tham gia giám sát quy trình hoạt động của bếp ăn. Do đó, trường đã xin tạm dừng bếp ăn bán trú để nghiên cứu, lựa chọn phương án phù hợp.\nTheo bà Hằng, với bậc THCS, giáo viên không có nghiệp vụ chăm nuôi, giám sát bếp ăn bán trú như ở bậc mầm non. Do đó, việc tổ chức cung cấp, giám sát hoạt động ăn uống của học sinh còn nhiều hạn chế.\n“Mong rằng, phụ huynh có chia sẻ với các cô, động viên nhà trường. Nếu sau này tìm được phương pháp, định hướng phù hợp sẽ tiếp tục tổ chức bữa ăn bán trú\", bà Hằng nói.\nChiều 17/10, tại cuộc họp ba bên liên quan bao gồm nhà trường, đại diện Công ty Hoa Sữa - đơn vị cung cấp suất ăn bán trú và Ban đại diện phụ huynh các lớp, Hiệu trưởng Hoàng Thị Thu Trinh kiến nghị, phụ huynh phối hợp với nhà trường tiếp tục giám sát bếp ăn đến hết tháng 10/2023.\nNếu công ty làm tốt, phụ huynh đồng ý, nhà trường tiếp tục duy trì bếp ăn bán trú với công ty này. Ngược lại, nhà trường sẽ tạm dừng bếp ăn trong một thời gian để tìm hiểu các đơn vị cung cấp thực phẩm khác.",
      "category":9,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Audi Q8 đang là dòng xe lớn, sang và mạnh hàng đầu đội hình thương hiệu chủ quản hiện thời",
    "imageURL": "../assets/image_article/image_article17.jpg",
    "article": {
      "id": "da0e6f3a-1010-4bc7-99ef-d0cbc88137dd",
      "title":"Chi tiết Audi Q8 2024 vừa ra mắt: Hầm hố hơn, máy vẫn mạnh nhưng tiết kiệm xăng hơn nhờ một công nghệ",
      "postTime":"2023-01-01T04:55:10",
      "summary":"Đây là bản nâng cấp lớn đầu tiên của Audi Q8 kể từ khi ra mắt. Mẫu xe này được thay đổi \"nhẹ nhàng\" để hợp thời hơn.",
      "content":"Chủ lực dẫn đầu đội hình SUV Audi là Audi Q8 đã được công bố bản facelift giữa vòng đời triển lãm Qatar 2023 đang diễn ra. So với nguyên bản ra mắt lần đầu vào 2018, bản facelift đã được tinh chỉnh thiết kế với nhiều thay đổi khá dễ nhận ra.\nĐổi mới dễ quan sát nhất trên Audi Q8 2024 là đầu xe hầm hố hơn nhờ tản nhiệt khổng lồ mới, đèn pha ma trận LED tinh chỉnh giao diện và hốc gió lớn hơn. Như Audi đã hé lộ từ trước, đèn này cho người dùng khả năng tự thiết kế giao diện đèn chiếu sáng thông qua màn trung tâm tại táp lô.{img}Tiếp đến, các bề mặt ngoài xe cũng đã được trau chuốt mượt mà hơn đáng kể. Đèn hậu mới nay được trang trí bằng ốp bóng, bên cạnh là logo mới của Audi đã loại bỏ chrome. Cuối cùng, hệ thống ống xả mới giúp nhấn mạnh rõ hơn tiếng gầm từ động cơ.\nBên dưới ca pô Audi Q8 2024 vẫn là dàn động cơ như trước với bản chủ lực SQ8 vẫn chạy máy V8 4.0L tăng áp kép 493 mã lực giống Porsche Cayenne Turbo/Lamborghini Urus. Tuy nhiên, dòng động cơ này có tính năng ngắt xy-lanh xuống còn tối thiểu 4 để hạn chế tiêu thụ nhiên liệu khi vận hành nhẹ.\nCác bản thấp hơn chạy máy V6 tăng áp với công suất dao động từ 224 tới 335 mã lực. Một bản RS Q8 thể thao ra mắt sau hứa hẹn nâng khả năng vận hành Q8 lên ngang hàng 2 dòng SUV đỉnh cao nói trên.\nNội thất Audi Q8 2024 không có nhiều thay đổi trong thiết kế. Tuy nhiên, hệ thống thông tin giải trí nay cho phép chạy ứng dụng từ bên thứ 3 lần đầu tiên, qua đó cho phép người dùng tiếp cận các phương thức giải trí trực tuyến dễ dàng hơn bao giờ hết. Đồ họa khoang lái ảo Audi cũng đã được cập nhật sắc nét hơn.{img}Ngay từ bản thấp nhất, Audi Q8 facelift đã sở hữu các trang bị như ghế thể thao chỉnh điện, chìa khóa thông minh, khoang lái ảo, màn HUD, điều hòa 4 vùng và loa Bang & Olufsen.\nGiá khởi điểm cho Audi Q8 2024 là 75.500 bảng tương đương 2,24 tỉ đồng. Phiên bản cao cấp nhất của xe là RS Q8 cũng sẽ được cập nhật vào nửa đầu 2024 nhưng thông số chưa rõ.\nTriển lãm Qatar (tên đầy đủ là Geneva International Motor Show Qatar 2023) nơi Audi Q8 facelift ra mắt là \"phụ bản\" của triển lãm Geneva - một trong những sự kiện hàng đầu của làng xe thể giới tổ chức 2 năm một lần. Tuy nhiên, triển lãm tổ chức lần đầu này đã không thu hút được sự chú ý như kỳ vọng.",
      "category":10,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Khoang lái cực kỳ hiện đại và hàng ghế sau rộng rãi, tiện nghi là 2 yếu tố chính trong cabin Q8",
    "imageURL": "../assets/image_article/image_article18.jpg",
    "article": {
      "id": "da0e6f3a-1010-4bc7-99ef-d0cbc88137dd",
      "title":"Chi tiết Audi Q8 2024 vừa ra mắt: Hầm hố hơn, máy vẫn mạnh nhưng tiết kiệm xăng hơn nhờ một công nghệ",
      "postTime":"2023-01-01T04:55:10",
      "summary":"Đây là bản nâng cấp lớn đầu tiên của Audi Q8 kể từ khi ra mắt. Mẫu xe này được thay đổi \"nhẹ nhàng\" để hợp thời hơn.",
      "content":"Chủ lực dẫn đầu đội hình SUV Audi là Audi Q8 đã được công bố bản facelift giữa vòng đời triển lãm Qatar 2023 đang diễn ra. So với nguyên bản ra mắt lần đầu vào 2018, bản facelift đã được tinh chỉnh thiết kế với nhiều thay đổi khá dễ nhận ra.\nĐổi mới dễ quan sát nhất trên Audi Q8 2024 là đầu xe hầm hố hơn nhờ tản nhiệt khổng lồ mới, đèn pha ma trận LED tinh chỉnh giao diện và hốc gió lớn hơn. Như Audi đã hé lộ từ trước, đèn này cho người dùng khả năng tự thiết kế giao diện đèn chiếu sáng thông qua màn trung tâm tại táp lô.{img}Tiếp đến, các bề mặt ngoài xe cũng đã được trau chuốt mượt mà hơn đáng kể. Đèn hậu mới nay được trang trí bằng ốp bóng, bên cạnh là logo mới của Audi đã loại bỏ chrome. Cuối cùng, hệ thống ống xả mới giúp nhấn mạnh rõ hơn tiếng gầm từ động cơ.\nBên dưới ca pô Audi Q8 2024 vẫn là dàn động cơ như trước với bản chủ lực SQ8 vẫn chạy máy V8 4.0L tăng áp kép 493 mã lực giống Porsche Cayenne Turbo/Lamborghini Urus. Tuy nhiên, dòng động cơ này có tính năng ngắt xy-lanh xuống còn tối thiểu 4 để hạn chế tiêu thụ nhiên liệu khi vận hành nhẹ.\nCác bản thấp hơn chạy máy V6 tăng áp với công suất dao động từ 224 tới 335 mã lực. Một bản RS Q8 thể thao ra mắt sau hứa hẹn nâng khả năng vận hành Q8 lên ngang hàng 2 dòng SUV đỉnh cao nói trên.\nNội thất Audi Q8 2024 không có nhiều thay đổi trong thiết kế. Tuy nhiên, hệ thống thông tin giải trí nay cho phép chạy ứng dụng từ bên thứ 3 lần đầu tiên, qua đó cho phép người dùng tiếp cận các phương thức giải trí trực tuyến dễ dàng hơn bao giờ hết. Đồ họa khoang lái ảo Audi cũng đã được cập nhật sắc nét hơn.{img}Ngay từ bản thấp nhất, Audi Q8 facelift đã sở hữu các trang bị như ghế thể thao chỉnh điện, chìa khóa thông minh, khoang lái ảo, màn HUD, điều hòa 4 vùng và loa Bang & Olufsen.\nGiá khởi điểm cho Audi Q8 2024 là 75.500 bảng tương đương 2,24 tỉ đồng. Phiên bản cao cấp nhất của xe là RS Q8 cũng sẽ được cập nhật vào nửa đầu 2024 nhưng thông số chưa rõ.\nTriển lãm Qatar (tên đầy đủ là Geneva International Motor Show Qatar 2023) nơi Audi Q8 facelift ra mắt là \"phụ bản\" của triển lãm Geneva - một trong những sự kiện hàng đầu của làng xe thể giới tổ chức 2 năm một lần. Tuy nhiên, triển lãm tổ chức lần đầu này đã không thu hút được sự chú ý như kỳ vọng.",
      "category":10,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Quang cảnh hội nghị. Ảnh: Văn Điệp/TTXVN",
    "imageURL": "../assets/image_article/image_article19.jpg",
    "article": {
      "id": "da0e6f3a-1011-4bc7-99ef-d0cbc88137dd",
      "title":"Hội nghị EROPA 2023: Đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế - xã hội",
      "postTime":"2023-01-01T05:01:10",
      "summary":"Trong khuôn khổ Hội nghị thường niên Tổ chức Hành chính miền Đông thế giới - EROPA 2023, ngày 18/10, đã diễn ra ba phiên họp chuyên đề với các chủ đề: Phục hồi và phát triển kinh tế – xã hội: vấn đề đặt ra và nhu cầu đổi mới quản trị công; Đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế – xã hội; Xây dựng năng lực quản trị công nhằm thúc đẩy phục hồi phát triển kinh tế – xã hội.",
      "content":"Đối với tiểu chủ đề 1 về “Phục hồi và phát triển kinh tế - xã hội: vấn đề đặt ra và nhu cầu đổi mới quản trị công”, các báo cáo viên đã trao đổi, thảo luận sâu về thực tiễn phục hồi và phát triển kinh tế - xã hội của các quốc gia, những cơ hội, thách thức và vấn đề đặt ra đối với quản trị công, ý nghĩa của quản trị công và các yếu tố ảnh hưởng tới quản trị công, quan hệ giữa quản trị công với phục hồi và phát triển kinh tế - xã hội, yêu cầu đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế - xã hội, vai trò của nhà nước trong thúc đẩy quản trị công nhằm phục hồi và phát triển kinh tế - xã hội, xu thế phát triển của quản trị công trên thế giới và trong khu vực. Đồng thời, các học giả, nhà thực tiễn trong khu vực cũng chia sẻ kinh nghiệm của nhiều quốc gia trong đổi mới quản trị công nhằm phục hồi và phát triển kinh tế - xã hội, quản trị công vì mục tiêu phát triển bền vững.{img}Trong tiểu chủ đề 2 “Đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế - xã hội”, các đại biểu đề cập đến yêu cầu đổi mới tư duy quản trị với những thách thức đặt ra đối với tư duy và mô hình quản lý nhà nước truyền thống. Các nội dung được trao đổi tại phiên chuyên đề này tập trung vào xây dựng, hoàn thiện Nhà nước pháp quyền theo yêu cầu đổi mới quản trị công, đổi mới tổ chức, hoạt động của Chính phủ, bộ, cơ quan ngang bộ vì mục tiêu quản trị công tốt, đổi mới phân cấp, phân quyền giữa trung ương - địa phương; sự phối hợp giữa trung ương và địa phương theo yêu cầu quản trị công tốt, thực tiễn thực hiện công khai minh bạch, trách nhiệm giải trình đáp ứng yêu cầu quản trị công tốt. \nCác đại biểu cũng chia sẻ về việc huy động sự tham gia của người dân và chủ thể trong xã hội hướng tới mục tiêu quản trị công tốt, xây dựng quan hệ đối tác, hợp tác để thúc đẩy quản trị công tốt, kiểm soát tham nhũng trong quản trị công, đổi mới cung ứng dịch vụ công đáp ứng yêu cầu quản trị công tốt, áp dụng công nghệ, chuyển đổi số thúc đẩy quản trị công tốt…\nChú thích ảnh\nQuang cảnh hội nghị. Ảnh: Văn Điệp/TTXVN\nĐối với tiểu chủ đề 1 về “Phục hồi và phát triển kinh tế - xã hội: vấn đề đặt ra và nhu cầu đổi mới quản trị công”, các báo cáo viên đã trao đổi, thảo luận sâu về thực tiễn phục hồi và phát triển kinh tế - xã hội của các quốc gia, những cơ hội, thách thức và vấn đề đặt ra đối với quản trị công, ý nghĩa của quản trị công và các yếu tố ảnh hưởng tới quản trị công, quan hệ giữa quản trị công với phục hồi và phát triển kinh tế - xã hội, yêu cầu đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế - xã hội, vai trò của nhà nước trong thúc đẩy quản trị công nhằm phục hồi và phát triển kinh tế - xã hội, xu thế phát triển của quản trị công trên thế giới và trong khu vực. Đồng thời, các học giả, nhà thực tiễn trong khu vực cũng chia sẻ kinh nghiệm của nhiều quốc gia trong đổi mới quản trị công nhằm phục hồi và phát triển kinh tế - xã hội, quản trị công vì mục tiêu phát triển bền vững.\n\nTrong tiểu chủ đề 2 “Đổi mới quản trị công nhằm thúc đẩy phục hồi và phát triển kinh tế - xã hội”, các đại biểu đề cập đến yêu cầu đổi mới tư duy quản trị với những thách thức đặt ra đối với tư duy và mô hình quản lý nhà nước truyền thống. Các nội dung được trao đổi tại phiên chuyên đề này tập trung vào xây dựng, hoàn thiện Nhà nước pháp quyền theo yêu cầu đổi mới quản trị công, đổi mới tổ chức, hoạt động của Chính phủ, bộ, cơ quan ngang bộ vì mục tiêu quản trị công tốt, đổi mới phân cấp, phân quyền giữa trung ương - địa phương; sự phối hợp giữa trung ương và địa phương theo yêu cầu quản trị công tốt, thực tiễn thực hiện công khai minh bạch, trách nhiệm giải trình đáp ứng yêu cầu quản trị công tốt. \n\nCác đại biểu cũng chia sẻ về việc huy động sự tham gia của người dân và chủ thể trong xã hội hướng tới mục tiêu quản trị công tốt, xây dựng quan hệ đối tác, hợp tác để thúc đẩy quản trị công tốt, kiểm soát tham nhũng trong quản trị công, đổi mới cung ứng dịch vụ công đáp ứng yêu cầu quản trị công tốt, áp dụng công nghệ, chuyển đổi số thúc đẩy quản trị công tốt…\n\nTiểu chủ đề 3: “Xây dựng năng lực quản trị công nhằm thúc đẩy phục hồi phát triển kinh tế – xã hội”, nhấn mạnh tới bản chất đa chủ thể, đa trung tâm và nhiều cấp độ của quản trị công, với sự tham gia của nhiều chủ thể khác nhau, những người phải có kiến thức và kỹ năng để đạt hiệu quả. Do đó, điều quan trọng là phải xây dựng năng lực quản trị công cho các chủ thể tham gia, đặc biệt là công chức với tư cách là chủ thể chính trong thúc đẩy phục hồi và phát triển kinh tế - xã hội. \nNội dung được tập trung trao đổi trong tiểu chủ đề này là quá trình phục hồi và phát triển kinh tế - xã hội: cơ hội, thách thức, yêu cầu đặt ra đối với nâng cao năng lực quản trị công của lãnh đạo, quản lý, quản lý, phát triển nguồn nhân lực trong quản trị công nhằm thúc đẩy phục hồi, phát triển kinh tế xã hội, năng lực lãnh đạo, quản lý đáp ứng yêu cầu quản trị công tốt.\nNgoài ra, đại biểu trao đổi về đổi mới công tác đào tạo, bồi dưỡng nhằm nâng cao chất lượng đội ngũ công chức, đáp ứng yêu cầu đổi mới quản trị công nhằm thúc đẩy phục hồi, phát triển kinh tế- xã hội; nâng cao năng lực quản trị công, hợp tác quốc tế trong xây dựng năng lực quản trị công tốt, đáp ứng yêu cầu phục hồi, phát triển kinh tế - xã hội và phát triển bền vững.",
      "category":11,
      "imageArticles":[],
      "publisher":{
        "id": 1,
        "name":"DanTri",
        "imageURLBrand":"../assets/publisher/dantri.png",
        "articles":[]
      }
    }
  },





  {
    "title": "Milan mở rộng tay đón Maguire",
    "imageURL": "../assets/image_article/image_article20.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e1-d0cbc88137dd",
      "title":"AC Milan ra tay giải cứu Maguire",
      "postTime":"2023-01-01T00:55:10",
      "summary":"AC Milan triển khai kế hoạch sung hàng thủ trong kỳ chuyển nhượng mùa đông, với mục tiêu Harry Maguire, trung vệ bị thất sủng ở MU.",
      "content":"Harry Maguire đang xem xét tương lai của mình bằng cách cân nhắc việc theo bước Chris Smalling, người tìm thấy cuộc sống mới ở AS Roma.\nGiới truyền thông Italy đưa tin, AC Milan bắt đầu đánh tiếng với Maguire về thương vụ chuyển nhượng trong tháng Giêng tới.{img}Bản thân Maguire cũng để ngỏ khả năng gia nhập Milan và đá cặp với Tomori, người bạn của anh trong đội tuyển Anh.\nWest Ham hiện cũng quan tâm đến Maguire, nhưng cựu đội trưởng MU muốn tìm kiếm nhiều lựa chọn hơn cho đến khi thị trường mở cửa.\nTrong những năm gần đây, nhiều cầu thủ Anh chuyển sang Serie A và thi đấu khá thành công.\nNgoài Smalling và Tomori, còn có những gương mặt như Ashley Young (đã chuyển đến Everton), Abraham (hiện chấn thương).\nMaguire không được HLV Erik ten Hag tin tưởng. Người hâm mộ MU cũng nhiều lần mỉa mai những sai lầm của anh.Ngược lại, cựu cầu thủ Leicester vẫn được HLV Gareth Southgate trao một suất trong đội tuyển Anh.Maguire vừa đóng vai trò giúp Anh thắng Italy 3-1 và chính thức giành vé tham dự giải vô địch bóng đá châu Âu 2024 (EURO) ở Đức.Khi EURO đang đến gần, Maguire cần thi đấu thường xuyên để có được phong độ tốt nhất.\nMilan đang là một trong các đội đua tranh danh hiệu Serie A, cũng như tham vọng vào vòng knock-out Champions League.Điều này phần nào tạo sức hút đối với Maguire, giúp anh có cơ hội được giành danh hiệu (mới chỉ có League Cup 2022-23).Milan có khả năng đề nghị mượn Maguire kèm điều khoản mua đứt vào cuối mùa, giống như công thức từng áp dụng với Tomori.",
      "category":0,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Ninh Bình trong những năm qua luôn là điểm đến hấp dẫn đối với du khách trong nước và quốc tế.",
    "imageURL": "../assets/image_article/image_article21.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e2-d0cbc88137dd",
      "title":"Ninh Bình: Đón trên 5,86 triệu lượt khách du lịch",
      "postTime":"2023-01-01T06:25:10",
      "summary":"(Xây dựng) – Theo số liệu của Cục Thống kê tỉnh Ninh Bình, trong 10 tháng năm 2023 số lượt khách đến tham quan tại các điểm du lịch trên địa bàn tỉnh trên 5,86 triệu lượt, gấp hơn 1,9 lần so với cùng kỳ năm trước.",
      "content":"Số lượt khách đến tham quan tại các điểm du lịch trên địa bàn tỉnh trong tháng 10 ước đạt trên 334.000 lượt, tăng 10,58% so với cùng kỳ năm trước. Số lượng khách nghỉ tại các cơ sở lưu trú ước đạt 119.000 lượt, tăng 21,53%; số khách lưu trú ước đạt trên trên 161.000 ngày khách, tăng 22,43% so với tháng cùng kỳ năm trước. Doanh thu du lịch trong tháng 10 đạt trên 437,2 tỷ đồng, tăng 39,56% so với cùng kỳ.{img}Cộng dồn 10 tháng năm 2023, số lượt khách đến tham quan tại các điểm, khu du lịch trên địa bàn toàn tỉnh ước đạt trên 5,86 triệu lượt khách, gấp 1,9 lần so với cùng kỳ. Doanh thu du lịch cộng dồn 10 tháng ước đạt trên 5.509 tỷ đồng, gấp hơn 2,1 lần. Trong đó, lĩnh vực lưu trú ước đạt trên 554,8 tỷ đồng gấp hơn 1,4 lần; lĩnh vực nhà hàng ước đạt trên 2.642,4 tỷ đồng gấp 2,3 lần; lĩnh vực vận chuyển ước đạt trên 875,2 tỷ đồng gấp hơn 2,6 lần; vé tham quan ước đạt trên 381,5 tỷ đồng gấp 2,3 lần; bán hàng hóa, quà lưu niệm ước đạt trên 468,9 tỷ đồng gấp hơn 1,9 lần; các dịch vụ khác doanh thu ước đạt trên 586,4 tỷ đồng gấp hơn 2 lần.\nƯớc tính cả năm 2023, số lượt khách đến tham quan đạt trên 6,55 triệu lượt khách, gấp hơn 1,7 lần so với cùng kỳ năm trước. Doanh thu du lịch ước tính cả năm 2023 đạt trên 6.375,4 tỷ đồng gấp hơn 1,9 lần so với cùng kỳ.",
      "category":1,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Ảnh minh họa.",
    "imageURL": "../assets/image_article/image_article22.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e2-d0cbc88137dd",
      "title":"Chán yêu vì chồng lắm điều",
      "postTime":"2023-01-01T00:55:10",
      "summary":"GĐXH - Chồng tôi rất lắm điều. Anh ấy hay cằn nhằn với những thứ nhỏ nhặt khi không vừa ý. Tôi đặt bát sai chỗ sau khi rửa, nhìn thấy anh cũng cằn nhằn.",
      "content":"Tôi chưa kịp phơi quần áo, anh vừa làm giúp vừa cằn nhằn. Tôi nấu cơm để thừa nhiều thức ăn anh cũng lên tiếng... Tất cả những điều đó khiến tôi ngột ngạt và cảm thấy khó chịu. Điều này ảnh hưởng lớn đến chất lượng cuộc sống gia đình, đặc biệt là ảnh hưởng đến \"chuyện yêu\" của hai vợ chồng. Tôi ngày nào nghe tiếng cằn nhằn là ngày đó tôi mất cảm hứng gần gũi. Anh thì nói xong là hết nhưng tôi không vượt qua được cảm xúc khó chịu khi bị \"soi\" kiểu đó. Vì vậy mà tình cảm gia đình ngày càng nhạt khiến tôi không còn cảm hứng bên chồng. Tôi biết anh tốt tính và khó tìm, nhưng cứ kéo dài thế này thì hạnh phúc gia đình sẽ tan nát. Tôi phải làm sao?{img}BS Hạnh Phúc trả lời:\nDường như bất cứ ai đạt tới vị trí cao trong xã hội đều là một ví dụ tốt cho tinh thần của chủ nghĩa hoàn hảo. Dẫu ai cũng biết rằng sự hoàn hảo thực sự vốn là điều không tưởng, nhưng không phải vì thế mà người ta ngừng đặt ra các yêu cầu cao cho mình.\nMột người cầu toàn thường có xu hướng nhìn vào khiếm khuyết hơn là nhìn vào những gì đã đạt được. Họ muốn cải thiện những sai lầm, khiếm khuyết của cả mình và người khác. Do đó, khi ngắm một bức tranh, họ chỉ nhìn thấy một nửa vẻ đẹp, bởi một nửa tâm trí còn băn khoăn xem tranh có chỗ nào cần sửa chữa hay không.\nTrong cuộc sống gia đình, chồng bạn có thể vì muốn tất cả phải vẹn toàn mà quên mất niềm vui được ở cạnh người bạn đời. Thay vì dành cho nhau những lời động viên, khen ngợi sau ngày dài bận rộn, ta lại sa vào chuỗi phàn nàn về chuyện đồ đạc chưa đúng chỗ, hàng rào tỉa chưa đúng cách… và khiến không khí gia đình trở nên căng thẳng.\nKhi bạn hiểu đặc điểm này của chồng, bạn sẽ có cái nhìn cảm thông hơn. Nếu sức chịu đựng của bạn đã bị chạm tới, hãy nói chuyện với chồng. Hãy chia sẻ với anh ấy để cả hai thông cảm và hiểu cho nhau hơn. Bạn nên mạnh dạn hơn với chồng để anh ấy điều chỉnh bản thân trong những lần gặp gỡ. Hiểu nhau rồi, cả hai sẽ có cuộc \"yêu\" vừa vặn hơn.",
      "category":2,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Tân Hoa hậu trái đất Việt Nam - Đỗ Thị Lan Anh sẽ đại diện Việt Nam tham dự đấu trường Miss Earth năm nay",
    "imageURL": "../assets/image_article/image_article23.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e3-d0cbc88137dd",
      "title":"Hoa hậu Đỗ Thị Lan Anh chính thức đại diện Việt Nam tham dự \"Miss Earth 2023\"",
      "postTime":"2023-01-01T01:50:10",
      "summary":"ANTD.VN - Cuộc thi Miss Earth Việt Nam 2023 vừa chính thức khép lại một hành trình kéo dài gần 3 tháng để tìm ra gương mặt bước lên ngôi vị cao nhất. Và hoa hậu của Miss Earth Việt Nam năm nay, cũng chính là đại diện tham dự cuộc thi Miss Earth 2023 được tổ chức tại Việt Nam vào cuối tháng 12/2023 .",
      "content":"Tại buổi họp báo chiều ngày 16/10 tại TP. Hồ Chí Minh, bà Lorraine Schuck – Phó chủ tịch Miss Earth và Chủ tịch Miss Earth Việt Nam Trương Ngọc Ánh đã cùng trao sash cho tân Miss Earth Việt Nam 2023 Đỗ Thị Lan Anh - đại diện Việt Nam tham dự Miss Earth 2023 vào tháng 12/2023 tại TP Hồ Chí Minh.{img}Cuộc thi \"Hoa hậu Trái đất - Miss Earth 2023\" lần này sẽ diễn ra tại TP.HCM với sự góp mặt của đại diện sắc đẹp đến từ 114 quốc gia và vùng lãnh thổ. Theo quy chế của Miss Earth, những đại diện sắc đẹp này có thể là Hoa hậu của Miss Earth nước đó, hoặc là gương mặt được cử đi bởi đơn vị giữ bản quyền Miss Earth của từng nước.{img}\"Hoa hậu Trái đất - Miss Earth\" là một trong 4 cuộc thi sắc đẹp danh giá nhất trên thế giới hiện nay. Bên cạnh đó, Miss Earth còn tạo thêm một dấu ấn đặc biệt nữa, khác với những cuộc thi sắc đẹp khác, là tìm ra những hoa hậu không chỉ có sắc vóc, trí tuệ mà còn có tình yêu mãnh liệt dành cho môi trường và cộng đồng.\nSau hơn 1 thập kỷ trở lại Việt Nam, \"Miss Earth 2023\" sẽ do công ty TNA Entertainment đăng cai tổ chức. Việc mang Miss Earth 2023 về Việt Nam và tổ chức ở TP.HCM là cách mà TNA Entertainment mong muốn người dân Việt Nam có thể giao lưu, tìm hiểu về văn hóa các nước thông qua các gương mặt người đẹp đại diện. Từ đó có thể tiếp thu những giá trị đặc sắc của văn hóa và con người ở khắp mọi nơi.\nTổ chức \"Miss Earth 2023\" đồng thời cũng là một cơ hội để quảng bá du lịch TP. HCM nói riêng và Việt Nam nói chung ra bạn bè quốc tế. Vì bên cạnh những phần thi có trong cuộc thi, thí sinh đến từ các nước sẽ tham gia rất nhiều các hoạt động tham quan, gặp gỡ… để hiểu rõ hơn về văn hóa, lịch sử và con người Việt Nam.\nĐây cũng là tiền đề cho những hoạt động giao lưu, biểu diễn quốc tế… trong tương lai gần sẽ được tổ chức tại Việt Nam nhiều hơn nữa. Góp phần gia tăng vị thế của TP. HCM nói riêng và Việt Nam nói chung trong khu vực và thế giới.\nTheo kế hoạch, Miss Earth 2023 diễn ra từ ngày 01 - 22/12/2023 tại TP.HCM. Miss Earth 2023 sẽ có rất nhiều vòng thi phụ trước khi đi đến Đêm chung kết vào ngày 22/12/2023, trong đó có những phần thi rất quan trọng như: Thi Trang phục Quốc gia bằng chất liệu tái chế và thân thiện với môi trường; Trình diễn trang phục áo tắm; Phần thi Tài năng…{img}Đêm Chung kết Hoa hậu Trái đất - Miss Earth 2023dự kiến diễn ra tại Trung tâm Hội chợ và Triển lãm Sài Gòn - SECC (Quận 7, TP. HCM) sẽ bao gồm các phần thi: Trình diễn trang phục áo dài; Trình diễn trang phục áo tắm; Trình diễn trang phục dạ hội và Phần thi thuyết trình để chọn ra Top 4 thí sinh vào phần thi ứng xử.\nVà cuối cùng, Ban giám khảo sẽ công bố các giải phụ cũng như chọn và công bố Miss Earth, Miss Air, Miss Water cùng Miss Fire.",
      "category":3,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Chủ tịch Miss Earth Việt Nam - Trương Ngọc Ánh cùng các Miss Earth 2022",
    "imageURL": "../assets/image_article/image_article24.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e3-d0cbc88137dd",
      "title":"Hoa hậu Đỗ Thị Lan Anh chính thức đại diện Việt Nam tham dự \"Miss Earth 2023\"",
      "postTime":"2023-01-01T01:50:10",
      "summary":"ANTD.VN - Cuộc thi Miss Earth Việt Nam 2023 vừa chính thức khép lại một hành trình kéo dài gần 3 tháng để tìm ra gương mặt bước lên ngôi vị cao nhất. Và hoa hậu của Miss Earth Việt Nam năm nay, cũng chính là đại diện tham dự cuộc thi Miss Earth 2023 được tổ chức tại Việt Nam vào cuối tháng 12/2023 .",
      "content":"Tại buổi họp báo chiều ngày 16/10 tại TP. Hồ Chí Minh, bà Lorraine Schuck – Phó chủ tịch Miss Earth và Chủ tịch Miss Earth Việt Nam Trương Ngọc Ánh đã cùng trao sash cho tân Miss Earth Việt Nam 2023 Đỗ Thị Lan Anh - đại diện Việt Nam tham dự Miss Earth 2023 vào tháng 12/2023 tại TP Hồ Chí Minh.{img}Cuộc thi \"Hoa hậu Trái đất - Miss Earth 2023\" lần này sẽ diễn ra tại TP.HCM với sự góp mặt của đại diện sắc đẹp đến từ 114 quốc gia và vùng lãnh thổ. Theo quy chế của Miss Earth, những đại diện sắc đẹp này có thể là Hoa hậu của Miss Earth nước đó, hoặc là gương mặt được cử đi bởi đơn vị giữ bản quyền Miss Earth của từng nước.{img}\"Hoa hậu Trái đất - Miss Earth\" là một trong 4 cuộc thi sắc đẹp danh giá nhất trên thế giới hiện nay. Bên cạnh đó, Miss Earth còn tạo thêm một dấu ấn đặc biệt nữa, khác với những cuộc thi sắc đẹp khác, là tìm ra những hoa hậu không chỉ có sắc vóc, trí tuệ mà còn có tình yêu mãnh liệt dành cho môi trường và cộng đồng.\nSau hơn 1 thập kỷ trở lại Việt Nam, \"Miss Earth 2023\" sẽ do công ty TNA Entertainment đăng cai tổ chức. Việc mang Miss Earth 2023 về Việt Nam và tổ chức ở TP.HCM là cách mà TNA Entertainment mong muốn người dân Việt Nam có thể giao lưu, tìm hiểu về văn hóa các nước thông qua các gương mặt người đẹp đại diện. Từ đó có thể tiếp thu những giá trị đặc sắc của văn hóa và con người ở khắp mọi nơi.\nTổ chức \"Miss Earth 2023\" đồng thời cũng là một cơ hội để quảng bá du lịch TP. HCM nói riêng và Việt Nam nói chung ra bạn bè quốc tế. Vì bên cạnh những phần thi có trong cuộc thi, thí sinh đến từ các nước sẽ tham gia rất nhiều các hoạt động tham quan, gặp gỡ… để hiểu rõ hơn về văn hóa, lịch sử và con người Việt Nam.\nĐây cũng là tiền đề cho những hoạt động giao lưu, biểu diễn quốc tế… trong tương lai gần sẽ được tổ chức tại Việt Nam nhiều hơn nữa. Góp phần gia tăng vị thế của TP. HCM nói riêng và Việt Nam nói chung trong khu vực và thế giới.\nTheo kế hoạch, Miss Earth 2023 diễn ra từ ngày 01 - 22/12/2023 tại TP.HCM. Miss Earth 2023 sẽ có rất nhiều vòng thi phụ trước khi đi đến Đêm chung kết vào ngày 22/12/2023, trong đó có những phần thi rất quan trọng như: Thi Trang phục Quốc gia bằng chất liệu tái chế và thân thiện với môi trường; Trình diễn trang phục áo tắm; Phần thi Tài năng…{img}Đêm Chung kết Hoa hậu Trái đất - Miss Earth 2023dự kiến diễn ra tại Trung tâm Hội chợ và Triển lãm Sài Gòn - SECC (Quận 7, TP. HCM) sẽ bao gồm các phần thi: Trình diễn trang phục áo dài; Trình diễn trang phục áo tắm; Trình diễn trang phục dạ hội và Phần thi thuyết trình để chọn ra Top 4 thí sinh vào phần thi ứng xử.\nVà cuối cùng, Ban giám khảo sẽ công bố các giải phụ cũng như chọn và công bố Miss Earth, Miss Air, Miss Water cùng Miss Fire.",
      "category":3,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Trình diễn trang phục dạ hội và Phần thi thuyết trình để chọn ra Top 4 thí sinh vào phần thi ứng xử",
    "imageURL": "../assets/image_article/image_article25.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e3-d0cbc88137dd",
      "title":"Hoa hậu Đỗ Thị Lan Anh chính thức đại diện Việt Nam tham dự \"Miss Earth 2023\"",
      "postTime":"2023-01-01T01:50:10",
      "summary":"ANTD.VN - Cuộc thi Miss Earth Việt Nam 2023 vừa chính thức khép lại một hành trình kéo dài gần 3 tháng để tìm ra gương mặt bước lên ngôi vị cao nhất. Và hoa hậu của Miss Earth Việt Nam năm nay, cũng chính là đại diện tham dự cuộc thi Miss Earth 2023 được tổ chức tại Việt Nam vào cuối tháng 12/2023 .",
      "content":"Tại buổi họp báo chiều ngày 16/10 tại TP. Hồ Chí Minh, bà Lorraine Schuck – Phó chủ tịch Miss Earth và Chủ tịch Miss Earth Việt Nam Trương Ngọc Ánh đã cùng trao sash cho tân Miss Earth Việt Nam 2023 Đỗ Thị Lan Anh - đại diện Việt Nam tham dự Miss Earth 2023 vào tháng 12/2023 tại TP Hồ Chí Minh.{img}Cuộc thi \"Hoa hậu Trái đất - Miss Earth 2023\" lần này sẽ diễn ra tại TP.HCM với sự góp mặt của đại diện sắc đẹp đến từ 114 quốc gia và vùng lãnh thổ. Theo quy chế của Miss Earth, những đại diện sắc đẹp này có thể là Hoa hậu của Miss Earth nước đó, hoặc là gương mặt được cử đi bởi đơn vị giữ bản quyền Miss Earth của từng nước.{img}\"Hoa hậu Trái đất - Miss Earth\" là một trong 4 cuộc thi sắc đẹp danh giá nhất trên thế giới hiện nay. Bên cạnh đó, Miss Earth còn tạo thêm một dấu ấn đặc biệt nữa, khác với những cuộc thi sắc đẹp khác, là tìm ra những hoa hậu không chỉ có sắc vóc, trí tuệ mà còn có tình yêu mãnh liệt dành cho môi trường và cộng đồng.\nSau hơn 1 thập kỷ trở lại Việt Nam, \"Miss Earth 2023\" sẽ do công ty TNA Entertainment đăng cai tổ chức. Việc mang Miss Earth 2023 về Việt Nam và tổ chức ở TP.HCM là cách mà TNA Entertainment mong muốn người dân Việt Nam có thể giao lưu, tìm hiểu về văn hóa các nước thông qua các gương mặt người đẹp đại diện. Từ đó có thể tiếp thu những giá trị đặc sắc của văn hóa và con người ở khắp mọi nơi.\nTổ chức \"Miss Earth 2023\" đồng thời cũng là một cơ hội để quảng bá du lịch TP. HCM nói riêng và Việt Nam nói chung ra bạn bè quốc tế. Vì bên cạnh những phần thi có trong cuộc thi, thí sinh đến từ các nước sẽ tham gia rất nhiều các hoạt động tham quan, gặp gỡ… để hiểu rõ hơn về văn hóa, lịch sử và con người Việt Nam.\nĐây cũng là tiền đề cho những hoạt động giao lưu, biểu diễn quốc tế… trong tương lai gần sẽ được tổ chức tại Việt Nam nhiều hơn nữa. Góp phần gia tăng vị thế của TP. HCM nói riêng và Việt Nam nói chung trong khu vực và thế giới.\nTheo kế hoạch, Miss Earth 2023 diễn ra từ ngày 01 - 22/12/2023 tại TP.HCM. Miss Earth 2023 sẽ có rất nhiều vòng thi phụ trước khi đi đến Đêm chung kết vào ngày 22/12/2023, trong đó có những phần thi rất quan trọng như: Thi Trang phục Quốc gia bằng chất liệu tái chế và thân thiện với môi trường; Trình diễn trang phục áo tắm; Phần thi Tài năng…{img}Đêm Chung kết Hoa hậu Trái đất - Miss Earth 2023dự kiến diễn ra tại Trung tâm Hội chợ và Triển lãm Sài Gòn - SECC (Quận 7, TP. HCM) sẽ bao gồm các phần thi: Trình diễn trang phục áo dài; Trình diễn trang phục áo tắm; Trình diễn trang phục dạ hội và Phần thi thuyết trình để chọn ra Top 4 thí sinh vào phần thi ứng xử.\nVà cuối cùng, Ban giám khảo sẽ công bố các giải phụ cũng như chọn và công bố Miss Earth, Miss Air, Miss Water cùng Miss Fire.",
      "category":3,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Bộ trưởng Bộ Thống nhất Hàn Quốc Kim Yung-ho. Ảnh: YONHAP/TTXVN",
    "imageURL": "../assets/image_article/image_article26.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e4-d0cbc88137dd",
      "title":"Hàn Quốc thẩm định Kế hoạch cơ bản về phát triển quan hệ liên Triều giai đoạn 2023 - 2027",
      "postTime":"2023-01-01T03:15:10",
      "summary":"Theo phóng viên TTXVN tại Seoul, ngày 18/10, Chính phủ Hàn Quốc đã tổ chức cuộc họp Ủy ban phát triển quan hệ liên Triều, dưới sự chủ trì của Bộ trưởng Thống nhất kiêm Chủ tịch Ủy ban Kim Yung-ho, tiến hành thẩm định dự thảo Kế hoạch cơ bản về phát triển quan hệ liên Triều lần thứ 4 và dự thảo Kế hoạch thực hiện năm 2023.",
      "content":"Theo Luật phát triển quan hệ liên Triều, Chính phủ Hàn Quốc phải lập kế hoạch cơ bản về phát triển quan hệ liên Triều giai đoạn 5 năm. Kế hoạch lần thứ 4 đề ra phương hướng phát triển quan hệ hai miền Nam - Bắc trong giai đoạn 2023 - 2027.{img}Trong kế hoạch được trình lên lần này, Hàn Quốc đề ra mục tiêu thiết lập hòa bình trên bán đảo Triều Tiên và bình thường hóa quan hệ liên Triều, với 5 nhiệm vụ trọng tâm và 21 giải pháp thực thi cụ thể. 5 nhiệm vụ trọng tâm bao gồm: Xúc tiến phi hạt nhân hóa Triều Tiên và thiết lập hòa bình Bán đảo Triều Tiên; bình thường hóa quan hệ liên Triều dựa trên nguyên tắc; giải quyết vấn đề vấn đề nhân đạo liên Triều; tăng cường phân tích tình báo miền Bắc; cùng người dân và cộng đồng quốc tế chuẩn bị cho thống nhất.\nNội dung kế hoạch lần này có sự khác biệt lớn với kế hoạch lần 3 đưa ra cách đây 5 năm, được lập dưới thời Chính phủ cựu Tổng thống Moon Jae-in, có nội dung chính là giải quyết vấn đề hạt nhân miền Bắc, thiết lập hòa bình vĩnh viễn, phát triển bền vững quan hệ liên Triều, xây dựng một cộng đồng kinh tế mới trên Bán đảo Triều Tiên.\nBộ trưởng Thống nhất Kim Yung-ho cho biết chính phủ đương nhiệm một mặt sẽ đối phó cứng rắn với các động thái khiêu khích của miền Bắc song vẫn chủ trương xúc tiến giao lưu, hợp tác liên Triều một cách có trật tự, với mục tiêu phát triển đôi bên cùng có lợi. Trong quá trình này, Seoul sẽ xúc tiến viện trợ nhân đạo cần thiết cho Bình Nhưỡng một cách minh bạch và hiệu quả, tách biệt với tình hình chính trị. Chính phủ cũng sẽ tích cực đặt vấn đề về vấn đề nhân đạo, trong đó có việc gia đình bị ly tán trong chiến tranh, tù nhân chiến tranh, con tin bị bắt cóc.\nBộ Thống nhất sẽ phản ánh kết quả thảo luận cùng ngày tại Ủy ban phát triển quan hệ liên Triều vào Kế hoạch cơ bản lần 4, sau đó trình tiếp lên cuộc họp cấp Thứ trưởng và cuộc họp Nội các. Nếu được thông qua, dự thảo sẽ được báo cáo tiếp lên Quốc hội, và dự kiến được công bố rộng rãi tới người dân trong cuối năm nay.",
      "category":4,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Hinh minh hoa",
    "imageURL": "../assets/image_article/image_article27.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e5-d0cbc88137dd",
      "title":"Tạm giam hai đối tượng 'thông chốt', thách thức Cảnh sát giao thông",
      "postTime":"2023-01-01T00:55:10",
      "summary":"Tối 18/10, thông tin từ Cục Cảnh sát giao thông cho biết, Cơ quan Cảnh sát điều tra Công an huyện Kim Bôi (Hòa Bình) đã bắt tạm giam về tội gây rối trật tự công cộng đối với nhóm thanh niên lạng lách đánh võng, thông chốt, thách thức lực lượng Cảnh sát giao thông đang làm nhiệm vụ.",
      "content":"Trước đó, tối 11/10, một nhóm thanh, thiếu niên điều khiển mô tô nhiều lần đi qua Tổ công tác tuần tra, kiểm soát giao thông của Công an huyện Kim Bôi đang làm nhiệm vụ tại Km25, thuộc địa phận thị trấn Bo (Kim Bôi, Hòa Bình). Khi đi qua Tổ công tác, các đối tượng không đội mũ bảo hiểm, không chấp hành hiệu lệnh của Tổ công tác, phóng nhanh, lạng lách, đánh võng, bấm còi inh ỏi, “thông chốt” nhiều lượt để thể hiện bản thân, thách thức lực lượng Cảnh sát giao thông, gây mất an ninh trật tự, nguy hiểm cho người tham gia giao thông và Tổ công tác.\nĐến 0 giờ 25, ngày 12/10, Công an xã Nuông Dăm (Kim Bôi) đã truy bắt được các đối tượng và tạm giữ phương tiện vi phạm. Các đối tượng đều ở huyện Kim Bôi, gồm: Bùi Phi Hùng (sinh năm 2007), trú tại khu Lục Đồi, thị trấn Bo; Bùi Thị Ngọc Ảnh (sinh năm 2003) và Bùi Đức Duy (sinh năm 2007), cùng trú tại xóm Dăm, xã Nuông Dăm; Bùi Chí Tài (sinh năm 2009), trú tại xóm Trò, xã Kim Lập. {img}Ngày 17/10, Cơ quan Cảnh sát điều tra Công an huyện Kim Bôi đã ra quyết định khởi tố bị can và bắt tạm giam đối với Bùi Thị Ngọc Ảnh và Bùi Đức Duy, tạm giam Bùi Thị Ngọc Ảnh 60 ngày và Bùi Đức Duy 40 ngày, kể từ ngày 18/10. Hai đối tượng này không có nghề nghiệp ổn định, thường xuyên đi làm ăn xa. \nĐối với hai đối tượng Bùi Phi Hùng và Bùi Chí Tài, Cơ quan Cảnh sát điều tra Công an huyện Kim Bôi đang tiếp tục điều tra, củng cố thông tin, tài liệu để xử lý theo quy định của pháp luật.\nĐây là hồi chuông cảnh tỉnh cho những ai đang có ý định coi thường pháp luật, không chấp hành Luật Giao thông đường bộ. Cục Cảnh sát giao thông đề nghị các bậc phụ huynh, gia đình, người thân và thanh, thiếu niên khi thấy con, em, bạn mình có hành vi biểu hiện vi phạm Luật Giao thông đường bộ hãy tuyên truyền, nhắc nhở để họ biết, hiểu rõ mức độ nghiêm trọng của vụ việc, không phạm phải.",
      "category":5,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Ảnh minh họa: Thanh Tùng/TTXVN",
    "imageURL": "../assets/image_article/image_article28.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e6-d0cbc88137dd",
      "title":"Hà Nội sẽ tổ chức Phiên giải trình về xây dựng trường công lập đạt chuẩn quốc gia",
      "postTime":"2023-01-01T06:45:10",
      "summary":"Thông tin từ Văn phòng Đoàn đại biểu Quốc hội và HĐND thành phố Hà Nội, ngày 17/10, HĐND thành phố sẽ tổ chức Phiên giải trình về công tác xây dựng trường công lập đạt chuẩn quốc gia và việc đầu tư cải tạo, xây mới trường mầm non, trường phổ thông của thành phố Hà Nội.",
      "content":"Phiên giải trình nhằm mục đích giám sát, đánh giá thực trạng công tác xây dựng trường công lập đạt chuẩn quốc gia và việc đầu tư cải tạo, xây mới trường mầm non, trường phổ thông của thành phố Hà Nội; làm rõ những tồn tại, hạn chế bất cập và những khó khăn vướng mắc liên quan, xác định nguyên nhân, trách nhiệm của các cấp, ngành, đơn vị. Trên cơ sở đó, đề xuất, kiến nghị giải pháp đối với các cơ quan có thẩm quyền để tháo gỡ khó khăn, vướng mắc trong thời gian tới.{img}Tại phiên giải trình, đại biểu HĐND thành phố Hà Nội sẽ nghe báo cáo cụ thể về một số nội dung: Thực trạng quy mô, cơ sở vật chất, trang thiết bị giáo dục đào tạo của từng cấp học; quy mô học sinh các bậc học mầm non, tiểu học, trung học cơ sở, trung học phổ thông; số lượng, tỷ lệ các trường mầm non, tiểu học, trung học cơ sở, trung học phổ thông trên địa bàn thành phố đáp ứng chất lượng thiết bị dạy học; kết quả thực hiện chương trình kiên cố hóa trường, lớp học tại các trường mầm non, trường phổ thông công lập trên địa bàn,...\nBên cạnh đó, đại biểu HĐND thành phố Hà Nội cũng sẽ nghe về công tác lãnh đạo, chỉ đạo và kết quả xây dựng, công nhận trường chuẩn quốc gia các cấp học của thành phố đến tháng 9/2023 như: Số trường đạt chuẩn quốc gia ở các cấp học, mức độ đạt chuẩn; đánh giá kết quả đạt được so sánh với chỉ tiêu Đại hội Đảng bộ thành phố Hà Nội nhiệm kỳ 2020 - 2025 đề ra; công tác kiểm tra, giám sát việc thực hiện kế hoạch hàng năm xây dựng và công nhận trường mầm non, phổ thông công lập đạt chuẩn quốc gia của thành phố Hà Nội; việc thực hiện kế hoạch đầu tư công trung hạn trong việc xây dựng, cải tạo trường học công lập để đủ điều kiện đạt chuẩn quốc gia trong giai đoạn 2022 - 2025 và các năm tiếp theo (gồm các dự án sử dụng ngân sách thành phố và địa phương); việc thực hiện Nghị quyết số 21/2022/NQ-HĐND ngày 12/9/2022 của HĐND thành phố về phân cấp quản lý nhà nước một số lĩnh vực kinh tế - xã hội trên địa bàn thành phố Hà Nội (đối với lĩnh vực giáo dục-đào tạo); tình hình thực hiện kế hoạch đầu tư xây dựng cơ sở vật chất, thiết bị trường học đối với các trường công lập và việc xây dựng trường học tại các khu đô thị trên địa bàn từ năm 2020 đến nay.\nTheo kế hoạch, đối tượng giải trình gồm lãnh đạo UBND thành phố, thủ trưởng, giám đốc các Sở: Giáo dục và Đào tạo, Kế hoạch và Đầu tư, Xây dựng, Quy hoạch-Kiến trúc, Tài nguyên và Môi trường, Tài chính, Nội vụ, Công an thành phố, Chủ tịch UBND các quận, huyện, thị xã...",
      "category":6,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Trung tâm phân phối của Amazon tại Las Vegas, bang Nevada, Mỹ. Ảnh: AFP/TTXVN",
    "imageURL": "../assets/image_article/image_article29.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e7-d0cbc88137dd",
      "title":"Microsoft đàm phán thỏa thuận hơn 1 tỷ USD với Amazon",
      "postTime":"2023-01-01T05:55:10",
      "summary":"Tập đoàn phần mềm Microsoft đang chuẩn bị đưa Amazon trở thành khách hàng của các công cụ đám mây 365 của họ trong một thỏa thuận trị giá hơn 1 tỷ USD.",
      "content":"Theo báo cáo, \"gã khổng lồ\" thương mại điện tử đã cam kết chi số tiền này trong hơn 5 năm và đảm bảo hơn một triệu chỗ có giấy phép Microsoft 365.{img}Giá cổ phiếu của Microsoft tăng gần 1% trong phiên giao dịch sau báo cáo trên. Amazon và Microsoft này từ chối bình luận về thông tin trên.\nBáo cáo cho biết, Amazon dự kiến sẽ bắt đầu thiết lập các hệ thống mới vào đầu tháng 11/2023, đồng thời cho biết thêm rằng công ty hiện đang sử dụng phiên bản cục bộ, tiền đề của các sản phẩm Office của Microsoft.",
      "category":7,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Gian phở hoa hồi vàng Autralia được người dân Thủ đô đón nhận nồng nhiệt.",
    "imageURL": "../assets/image_article/image_article30.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e8-d0cbc88137dd",
      "title":"Phở, bún thang, cốm Hà Nội náo nức những ngày Thu",
      "postTime":"2023-01-01T00:55:10",
      "summary":"Đến với “Không gian giới thiệu ẩm thực Hà Nội”, du khách sẽ được trải nghiệm và thưởng thức ẩm thực Việt qua bàn tay tài hoa của các nghệ nhân ẩm thực, đầu bếp đã được vinh danh tại các sự kiện ẩm thực.",
      "content":"\"Không gian giới thiệu Ẩm thực Hà Nội\" với chủ đề “Tinh hoa ẩm thực Việt” là hoạt động nằm  trong khuôn khổ chương trình “Festival Thu Hà Nội năm 2023”, diễn ra từ nay đến hêt ngày 1/10, tại Cung Thiếu nhi Hà Nội.{img}Không gian quy tụ 51 gian hàng của các hội nghề nghiệp, nghệ nhân, doanh nghiệp, cơ sở ẩm thực nổi tiếng tại Hà Nội và cả nước giới thiệu các món ăn hấp dẫn như phở bò, phở gà, bún thang, chả cá, chả cốm đèn lồng, bún ốc Hồ Tây,...\nĐiểm nhấn tại đây là không gian của Phở Hà Nội, nét tiêu biểu của ẩm thực Hà Thành và một số thương hiệu Phở nổi tiếng khác. Du khách sẽ được trải nghiệm quy trình tạo ra nguyên liệu làm nên món ăn đặc trưng của bún, miến, phở…{img}Song song với đó, chương trình cũng giới thiệu ẩm thực đặc sắc của các quận, huyện, làng nghề trên địa bàn thành phố Hà Nội. Các nghệ nhân trình diễn quy trình làm nên những món ăn đặc sản địa phương như: Rượu hũ làng Ngâu (Thanh Trì), Bún xào cần (Đông Anh), Tương Cự Đà (Thanh Oai), Tương nếp Làng cổ Đường Lâm (Sơn Tây), Xôi Phú Thượng...\nTại đây cũng có không gian ẩm thực quốc tế và các món ăn đương đại và đặc biệt là không gian quảng bá các cơ sở ẩm thực đạt giải Michelin, điểm đến du lịch ẩm thực của Thủ đô. Trong đó, giới thiệu một số cơ sở ẩm thực đã đạt danh hiệu giải thưởng Michelin (được đưa vào Michelin guide - chuyên trang ẩm thực hàng đầu thế giới để quảng bá tới du khách tiêu biểu như: Tầm Vị, GIA (1 sao Michelin); Phở bò Ấu Triệu, Phở gà Nguyệt, Chả cá Thăng Long, Tuyết bún chả 34 (Bib Gourmand)...\nDu khách tham gia Festival cũng được thưởng thức “Không gian cốm - Hương vị mùa thu”, với câu chuyện về việc hình thành và phát triển nghề sản xuất cốm của người Hà Nội, từ sản phẩm thô đến hiện đại, phù hợp tiêu chuẩn quốc gia và quốc tế; thưởng thức các sản phẩm từ cốm đặc biệt thơm ngon đậm hương vị mùa thu Hà Nội.{img}Festival Thu Hà Nội năm 2023 và Không gian giới thiệu ẩm thực Hà Nội năm 2023 là một trong những sự kiện quảng bá, xúc tiến du lịch lớn nhất của Thành phố nhân dịp kỷ niệm ngày Giải phóng Thủ đô (10/10/1954-10/10/2023). Đồng hành cùng chương trình có: Tổng công ty bia rượu nước giải khát Hà Nội - Habeco (Bia Hà Nội), Công ty Cổ phần tiêu dùng Masan (Chin-Su, Phở Story), Hiệp hội nước mắm Việt Nam, nhãn hàng nước đóng chai Blue Zone, Câu lạc bộ áo dài Việt Nam, Hiệp hội văn hóa ẩm thực Việt Nam - VCCA, Hội Đầu bếp Hoàng Gia, Hội Đầu bếp Việt Nam, Hội Đầu bếp Trẻ HCM, CLB Phở xưa - Hiệp hội văn hóa Ẩm thực Nam Định, Nghệ nhân ẩm thực Ánh Tuyết và các nghệ nhân, đầu bếp có uy tín của Hà Nội và các tỉnh thành phố.\n“Tôi mong muốn thời gian tới doanh nghiệp du lịch tích cực phối hợp với các nhà hàng xây dựng tour ẩm thực nhằm đẩy mạnh quảng bá ẩm thực Hà thành, thu hút du khách trong nước và quốc tế chọn Hà Nội làm điểm đến”, nghệ nhân Nguyễn Thị Ánh Tuyết - người đưa tinh hoa ẩm thực Việt ra thế giới bày tỏ.",
      "category":8,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Không gian phở Ngô, phở Nhớ Phố Núi độc đáo.",
    "imageURL": "../assets/image_article/image_article31.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e8-d0cbc88137dd",
      "title":"Phở, bún thang, cốm Hà Nội náo nức những ngày Thu",
      "postTime":"2023-01-01T00:55:10",
      "summary":"Đến với “Không gian giới thiệu ẩm thực Hà Nội”, du khách sẽ được trải nghiệm và thưởng thức ẩm thực Việt qua bàn tay tài hoa của các nghệ nhân ẩm thực, đầu bếp đã được vinh danh tại các sự kiện ẩm thực.",
      "content":"\"Không gian giới thiệu Ẩm thực Hà Nội\" với chủ đề “Tinh hoa ẩm thực Việt” là hoạt động nằm  trong khuôn khổ chương trình “Festival Thu Hà Nội năm 2023”, diễn ra từ nay đến hêt ngày 1/10, tại Cung Thiếu nhi Hà Nội.{img}Không gian quy tụ 51 gian hàng của các hội nghề nghiệp, nghệ nhân, doanh nghiệp, cơ sở ẩm thực nổi tiếng tại Hà Nội và cả nước giới thiệu các món ăn hấp dẫn như phở bò, phở gà, bún thang, chả cá, chả cốm đèn lồng, bún ốc Hồ Tây,...\nĐiểm nhấn tại đây là không gian của Phở Hà Nội, nét tiêu biểu của ẩm thực Hà Thành và một số thương hiệu Phở nổi tiếng khác. Du khách sẽ được trải nghiệm quy trình tạo ra nguyên liệu làm nên món ăn đặc trưng của bún, miến, phở…{img}Song song với đó, chương trình cũng giới thiệu ẩm thực đặc sắc của các quận, huyện, làng nghề trên địa bàn thành phố Hà Nội. Các nghệ nhân trình diễn quy trình làm nên những món ăn đặc sản địa phương như: Rượu hũ làng Ngâu (Thanh Trì), Bún xào cần (Đông Anh), Tương Cự Đà (Thanh Oai), Tương nếp Làng cổ Đường Lâm (Sơn Tây), Xôi Phú Thượng...\nTại đây cũng có không gian ẩm thực quốc tế và các món ăn đương đại và đặc biệt là không gian quảng bá các cơ sở ẩm thực đạt giải Michelin, điểm đến du lịch ẩm thực của Thủ đô. Trong đó, giới thiệu một số cơ sở ẩm thực đã đạt danh hiệu giải thưởng Michelin (được đưa vào Michelin guide - chuyên trang ẩm thực hàng đầu thế giới để quảng bá tới du khách tiêu biểu như: Tầm Vị, GIA (1 sao Michelin); Phở bò Ấu Triệu, Phở gà Nguyệt, Chả cá Thăng Long, Tuyết bún chả 34 (Bib Gourmand)...\nDu khách tham gia Festival cũng được thưởng thức “Không gian cốm - Hương vị mùa thu”, với câu chuyện về việc hình thành và phát triển nghề sản xuất cốm của người Hà Nội, từ sản phẩm thô đến hiện đại, phù hợp tiêu chuẩn quốc gia và quốc tế; thưởng thức các sản phẩm từ cốm đặc biệt thơm ngon đậm hương vị mùa thu Hà Nội.{img}Festival Thu Hà Nội năm 2023 và Không gian giới thiệu ẩm thực Hà Nội năm 2023 là một trong những sự kiện quảng bá, xúc tiến du lịch lớn nhất của Thành phố nhân dịp kỷ niệm ngày Giải phóng Thủ đô (10/10/1954-10/10/2023). Đồng hành cùng chương trình có: Tổng công ty bia rượu nước giải khát Hà Nội - Habeco (Bia Hà Nội), Công ty Cổ phần tiêu dùng Masan (Chin-Su, Phở Story), Hiệp hội nước mắm Việt Nam, nhãn hàng nước đóng chai Blue Zone, Câu lạc bộ áo dài Việt Nam, Hiệp hội văn hóa ẩm thực Việt Nam - VCCA, Hội Đầu bếp Hoàng Gia, Hội Đầu bếp Việt Nam, Hội Đầu bếp Trẻ HCM, CLB Phở xưa - Hiệp hội văn hóa Ẩm thực Nam Định, Nghệ nhân ẩm thực Ánh Tuyết và các nghệ nhân, đầu bếp có uy tín của Hà Nội và các tỉnh thành phố.\n“Tôi mong muốn thời gian tới doanh nghiệp du lịch tích cực phối hợp với các nhà hàng xây dựng tour ẩm thực nhằm đẩy mạnh quảng bá ẩm thực Hà thành, thu hút du khách trong nước và quốc tế chọn Hà Nội làm điểm đến”, nghệ nhân Nguyễn Thị Ánh Tuyết - người đưa tinh hoa ẩm thực Việt ra thế giới bày tỏ.",
      "category":8,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Không gian phở Lý Quóc Sư.",
    "imageURL": "../assets/image_article/image_article32.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e8-d0cbc88137dd",
      "title":"Phở, bún thang, cốm Hà Nội náo nức những ngày Thu",
      "postTime":"2023-01-01T00:55:10",
      "summary":"Đến với “Không gian giới thiệu ẩm thực Hà Nội”, du khách sẽ được trải nghiệm và thưởng thức ẩm thực Việt qua bàn tay tài hoa của các nghệ nhân ẩm thực, đầu bếp đã được vinh danh tại các sự kiện ẩm thực.",
      "content":"\"Không gian giới thiệu Ẩm thực Hà Nội\" với chủ đề “Tinh hoa ẩm thực Việt” là hoạt động nằm  trong khuôn khổ chương trình “Festival Thu Hà Nội năm 2023”, diễn ra từ nay đến hêt ngày 1/10, tại Cung Thiếu nhi Hà Nội.{img}Không gian quy tụ 51 gian hàng của các hội nghề nghiệp, nghệ nhân, doanh nghiệp, cơ sở ẩm thực nổi tiếng tại Hà Nội và cả nước giới thiệu các món ăn hấp dẫn như phở bò, phở gà, bún thang, chả cá, chả cốm đèn lồng, bún ốc Hồ Tây,...\nĐiểm nhấn tại đây là không gian của Phở Hà Nội, nét tiêu biểu của ẩm thực Hà Thành và một số thương hiệu Phở nổi tiếng khác. Du khách sẽ được trải nghiệm quy trình tạo ra nguyên liệu làm nên món ăn đặc trưng của bún, miến, phở…{img}Song song với đó, chương trình cũng giới thiệu ẩm thực đặc sắc của các quận, huyện, làng nghề trên địa bàn thành phố Hà Nội. Các nghệ nhân trình diễn quy trình làm nên những món ăn đặc sản địa phương như: Rượu hũ làng Ngâu (Thanh Trì), Bún xào cần (Đông Anh), Tương Cự Đà (Thanh Oai), Tương nếp Làng cổ Đường Lâm (Sơn Tây), Xôi Phú Thượng...\nTại đây cũng có không gian ẩm thực quốc tế và các món ăn đương đại và đặc biệt là không gian quảng bá các cơ sở ẩm thực đạt giải Michelin, điểm đến du lịch ẩm thực của Thủ đô. Trong đó, giới thiệu một số cơ sở ẩm thực đã đạt danh hiệu giải thưởng Michelin (được đưa vào Michelin guide - chuyên trang ẩm thực hàng đầu thế giới để quảng bá tới du khách tiêu biểu như: Tầm Vị, GIA (1 sao Michelin); Phở bò Ấu Triệu, Phở gà Nguyệt, Chả cá Thăng Long, Tuyết bún chả 34 (Bib Gourmand)...\nDu khách tham gia Festival cũng được thưởng thức “Không gian cốm - Hương vị mùa thu”, với câu chuyện về việc hình thành và phát triển nghề sản xuất cốm của người Hà Nội, từ sản phẩm thô đến hiện đại, phù hợp tiêu chuẩn quốc gia và quốc tế; thưởng thức các sản phẩm từ cốm đặc biệt thơm ngon đậm hương vị mùa thu Hà Nội.{img}Festival Thu Hà Nội năm 2023 và Không gian giới thiệu ẩm thực Hà Nội năm 2023 là một trong những sự kiện quảng bá, xúc tiến du lịch lớn nhất của Thành phố nhân dịp kỷ niệm ngày Giải phóng Thủ đô (10/10/1954-10/10/2023). Đồng hành cùng chương trình có: Tổng công ty bia rượu nước giải khát Hà Nội - Habeco (Bia Hà Nội), Công ty Cổ phần tiêu dùng Masan (Chin-Su, Phở Story), Hiệp hội nước mắm Việt Nam, nhãn hàng nước đóng chai Blue Zone, Câu lạc bộ áo dài Việt Nam, Hiệp hội văn hóa ẩm thực Việt Nam - VCCA, Hội Đầu bếp Hoàng Gia, Hội Đầu bếp Việt Nam, Hội Đầu bếp Trẻ HCM, CLB Phở xưa - Hiệp hội văn hóa Ẩm thực Nam Định, Nghệ nhân ẩm thực Ánh Tuyết và các nghệ nhân, đầu bếp có uy tín của Hà Nội và các tỉnh thành phố.\n“Tôi mong muốn thời gian tới doanh nghiệp du lịch tích cực phối hợp với các nhà hàng xây dựng tour ẩm thực nhằm đẩy mạnh quảng bá ẩm thực Hà thành, thu hút du khách trong nước và quốc tế chọn Hà Nội làm điểm đến”, nghệ nhân Nguyễn Thị Ánh Tuyết - người đưa tinh hoa ẩm thực Việt ra thế giới bày tỏ.",
      "category":8,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Bệnh nhân T. đến tái khám tại bệnh viện Bình Dân sau thời gian lọc thận. Ảnh: P. D",
    "imageURL": "../assets/image_article/image_article33.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-99e9-d0cbc88137dd",
      "title":"Cảnh báo suy thận nặng vì uống cỏ mực, dùng viên uống trắng da",
      "postTime":"2023-01-01T06:00:10",
      "summary":"Thời gian gần đây, Bệnh viện Bình Dân liên tục tiếp nhận nhiều trường hợp bị suy thận cấp, phải lọc máu vì uống cỏ mực hoặc dùng viên uống làm trắng da được rao bán trôi nổi trên mạng.",
      "content":"Suy thận nặng vì uống cỏ mực, viên làm trắng da\nTại phòng khám chuyên khoa Nội thận của Bệnh viện Bình Dân, bệnh nhân L.T.T (45 tuổi, ngụ Đồng Nai) đến tái khám để đánh giá lại chức năng thận sau đợt phải lọc máu cấp cứu vì rơi vào suy thận cấp, tổn thương thận mức độ 5. Chị T. cho biết, đến giờ chị vẫn còn bàng hoàng vì phải lọc máu cấp cứu và không dám uống bất kỳ loại chất nào bán trôi nổi không rõ nguồn gốc nữa.{img}Chị L.T. T kể, cách đây gần một năm chị thấy trên mạng giới thiệu loại thuốc làm trắng da, đẹp da nên đã đặt hàng về uống. Chị mua một lọ thuốc làm trắng da này với giá tầm 600.000 đồng, một lọ 60 viên và uống mỗi ngày 6 viên. Khi uống đến lọ thứ 7 thì chị thấy đau bụng dữ dội, mệt, khó thở, nôn ói liên tục phải đi cấp cứu. Bác sĩ cho biết, chị bị suy thận cấp mức độ 5, nếu không kịp thời lọc máu có thể tử vong.\nSau khi được cấp cứu tại bệnh viện địa phương, chị T được chuyển lên Bệnh viện Bình Dân để tiếp tục thăm khám và điều trị lâu dài. Các bác sĩ Bệnh viện Bình Dân cho biết, rất may mắn, kết quả xét nghiệm chức năng thận của bênh nhân T trong hai tháng gần đây nhất đều đã ổn định. Tuy chức năng thận hồi phục tốt, chị T. đã trở lại với công việc bình thường nhưng chị vẫn phải uống thuốc và theo dõi chức năng thận.\nTheo Bệnh viện Bình Dân, bên cạnh trường hợp nhập viện bị suy thận cấp độ nặng vì uống thuốc làm trắng da không rõ nguồn gốc bán trên mạng, gần đây bệnh viện còn tiếp nhận nhiều bệnh nhân nhập viện điều trị suy thận mức độ nặng trên nền suy thận mạn do có liên quan đến việc uống cỏ mực. \nĐiển hình như trường hợp bệnh nhân P.V.H (47 tuổi, Vĩnh Long), vốn là bệnh nhân bị suy thận độ 3 và phải thăm khám điều trị tại Bệnh viện Bình Dân. Tuy nhiên, theo lời mách bảo uống cỏ mực và đậu đen xanh lòng để trị bệnh thận, bệnh nhân này đã bỏ uống thuốc và tái khám theo lịch hẹn tái khám.\nAnh H. cho biết: “Tôi thấy người không đau mệt, nghĩ không có bệnh nữa nên không uống thuốc nữa khi đã điều trị một thời gian. Tôi nghe nói uống cỏ mực và đậu đen xanh lòng có thể trị bệnh thận nên mỗi ngày, tôi uống khoảng một nắm tay cỏ mực và 2 đến 3 muỗng đậu đen xanh lòng để trị bệnh”.\nTuy nhiên, chỉ sau 3 tháng liên tục uống cỏ mực và đậu đen xanh lòng, anh H. thấy ăn uống kém, da xanh xao, chân đau nhức không rõ nguyên do và cơ thể mệt mỏi, anh đã quay lại bệnh viện khám. Qua thăm khám, bác sĩ chẩn đoán anh bị suy thận mức độ nặng.\nBác sĩ chuyên khoa 2 Lê Thị Đan Thùy, Trưởng khoa Nội thận - Lọc máu Bệnh viện Bình Dân cho biết, kết quả các xét nghiệm đánh giá chức năng thận cho thấy, bệnh nhân H rơi vào suy thận cấp trên nền suy thận mạn, độ lọc cầu thận (glomerular filtration rate-GFR) của anh H. chỉ còn 4 ml/phút/1,73m2. Trong khi đó, chỉ số GFR < 15 ml/phút/1,73m2 đã là suy thận giai đoạn 5, là giai đoạn nghiêm trọng nhất và tính mạng của bệnh nhân đang rất nguy hiểm. Bệnh nhân được tư vấn nhập viện để lọc máu nhằm tránh nguy cơ hôn mê, tử vong do các biến chứng suy thận cấp gây ra.\nSau 2 ngày điều trị, tình trạng đau nhức chân cùng các triệu chứng suy thận khác của anh H. đã giảm, chức năng thận được cải thiện. “Tuy nhiên, nếu đáp ứng điều trị bằng thuốc kém, chức năng thận không phục hồi tốt hơn, anh H. sẽ phải lọc máu định kỳ suốt đời”, bác sĩ chuyên khoa 2 Lê Thị Đan Thùy cho biết thêm.\nThận trọng với các bài thuốc bán trên mạng\nTheo bác sĩ chuyên khoa 2 Lê Thị Đan Thùy, cỏ mực, có nhiều tên gọi như nhọ nồi, hạn liên thảo, bạch hoa thảo, thủy hạn liên… Trong Đông y, cỏ mực không độc, có vị chua, ngọt, tính hàn, thường dùng chữa sốt cao, chảy máu cam, mề đay, chảy máu cam, viêm họng, suy nhược. Tuy nhiên, chưa có nghiên cứu khoa học nào chỉ rõ tác dụng chữa suy thận bằng cỏ mực.\nĐặc biệt, trên người bệnh thận mạn, chức năng thận vốn đã kém nên việc dùng các hoạt chất từ cây cỏ, thuốc, ngay cả ăn uống thường ngày đều cần phải cẩn trọng để tránh tiến triển suy thận nặng hơn. Bên cạnh đó, bệnh nhân suy thận mạn cần phải được thăm khám, điều trị bằng thuốc, kiểm soát thường xuyên các chỉ số như protein niệu, các xét nghiệm đánh giá chức năng thận.\nBác sĩ Lê Thị Đan Thùy cho biết thêm, người suy thận cần tuân thủ điều trị và có chế độ ăn uống, dinh dưỡng hợp lý thì mới kiểm soát tốt biến chứng trên thận. Những bệnh nhân tuân thủ điều trị có thể bảo tồn chức năng thận ổn định dù phát hiện suy thận nhiều năm. Thế nhưng, thực tế có những bệnh nhân tự ngưng điều trị, tự thay thế hoặc uống kèm thêm các loại lá cây không rõ nguồn gốc theo lời mách bảo trên internet. Điều này dẫn tới hậu quả đáng tiếc là bệnh nhân rơi vào suy thận không thể hồi phục, phải lọc máu suốt đời.\n“Hiện nay, ngoài cỏ mực thì trên mạng internet còn lan truyền nhiều “bài thuốc” lợi tiểu, “tốt cho thận” như cây rễ gió, cây mộc thông, cây nhạc ngựa, mộc phòng kỷ... Tất cả các cây này đều có chứa chất độc acid aristolochic gây tổn thương thận, suy thận nhưng đáng ngại là, những loại cây này đang được một số người lấy ngâm rượu uống với mục đích chữa bệnh, “tẩm bổ””, bác sĩ Lê Thị Đan Thuỳ thông tin.\nTheo các bác sĩ, suy thận mạn là một bệnh lý thường được phát hiện muộn do những tổn thương tiến triển âm thầm, hầu hết người bệnh không tự phát hiện được khi suy thận ở mức độ nhẹ. Bệnh nhân cần tuân thủ chế độ điều trị để giữ tốt chức năng thận còn lại, tránh tự ý dùng các chất có thể làm suy thận cấp nguy hiểm tính mạng, tổn thương không hồi phục chức năng thận phải lọc máu suốt đời.",
      "category":9,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Logo hãng Toyota. Ảnh minh họa: EPA/TTXVN",
    "imageURL": "../assets/image_article/image_article34.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-9910-d0cbc88137dd",
      "title":"Hãng xe Toyota tạm dừng 10 dây chuyền sản xuất ở Nhật Bản do thiếu linh kiện",
      "postTime":"2023-01-01T01:00:10",
      "summary":"Ngày 17/10, Tập đoàn sản xuất ô tô Toyota cho biết đã tạm ngừng hoạt động 10 dây chuyền sản xuất tại 6 nhà máy ở miền Trung Nhật Bản do gặp khó khăn trong việc mua linh kiện ô tô sau vụ nổ tại tại nhà máy của hãng Chuo Spring Co., một trong những nhà cung cấp linh kiện cho Toyota.",
      "content":"Vụ nổ xảy ra hôm 16/10 tại nhà máy của Chuo Spring Co. ở thành phố Toyota, tỉnh Aichi. Theo hãng Toyota, nhà sản xuất ô tô này sẽ đóng cửa các dây chuyền sản xuất bị ảnh hưởng trong suốt ngày 17/10 và chưa rõ có thể nối lại hoạt động vào ngày 18/10 hay không.{img}Khoảng 2 tháng trước, Toyota cũng đã cho tạm ngừng hoạt động 25 dây chuyền sản xuất tại 12 trong số 14 nhà máy lắp ráp xe ở Nhật Bản do lỗi hệ thống máy tính.\nĐược thành lập vào năm 1937, ngày nay, Toyota là công ty dẫn đầu thị trường thế giới về doanh số bán xe hybrid (chạy cả bằng xăng và điện) và là một trong những công ty lớn nhất khuyến khích áp dụng thị trường xe hybrid trên toàn cầu.\nNgoài ra, đây cũng là công ty dẫn đầu thị trường thế giới về xe chạy bằng pin nhiên liệu hydro. Toyota hiện có 14 nhà máy lắp ráp ô tô trên khắp lãnh thổ Nhật Bản. Những nhà máy này sản xuất ô tô cho cả thị trường trong và ngoài nước.",
      "category":10,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  },
  {
    "title": "Tổng cục Thuế",
    "imageURL": "../assets/image_article/image_article35.jpg",
    "article": {
      "id": "da0e6f3a-0000-4bc7-9911-d0cbc88137dd",
      "title":"Công bố danh sách 1.000 doanh nghiệp nộp thuế lớn nhất Việt Nam",
      "postTime":"2023-01-01T04:27:10",
      "summary":"Tổng cục Thuế vừa ban hành Công văn số 4586/TCT-KK công khai danh sách 1.000 doanh nghiệp nộp thuế thu nhập doanh nghiệp lớn nhất (V.1000) trong năm 2022.",
      "content":"Theo đó, các tiêu chí xác định danh sách xếp hạng V.1000 trong năm 2022 bao gồm: doanh nghiệp thành lập theo pháp luật Việt Nam, doanh nghiệp nước ngoài, các tổ chức khác có hoạt động sản xuất kinh doanh có thu nhập chịu thuế thu nhâp doanh nghiệp theo quy định của Luật Thuế thu nhập doanh nghiệp.\nMức nộp thuế thu nhập doanh nghiệp là tổng số tiền thuế thu nhập doanh nghiệp mà doanh nghiệp đã nộp ngân sách nhà nước trong năm 2022. Doanh nghiệp có các chi nhánh, đơn vị trực thuộc (được cấp mã số thuế đơn vị trực thuộc 13 số) bao gồm số tiền thuế thu nhập doanh nghiệp đã nộp của trụ sở chính và các chi nhánh, đơn vị trực thuộc{img}Đối với doanh nghiệp đến thời điểm xác định để công khai đã hoặc đang làm thủ tục đóng mã số thuế với các lý do sáp nhập vào doanh nghiệp khác (theo quy định hiện hành doanh nghiệp bị sáp nhập phải đóng mã số thuế), giải thể, ngừng hoạt động thì loại ra khỏi danh sách.\nTổng cục Thuế xác định: danh sách xếp hạng V.1000 trên cơ sở mức nộp thuế thu nhập doanh nghiệp vào ngân sách nhà nước của các doanh nghiệp hàng năm, không xem xét đến tính tuân thủ pháp luật thuế. V.1000 năm 2022 không nhằm mục đính tôn vinh doanh nghiệp thực hiện tốt pháp luật thuế. Trong quá trình hoạt động, nếu doanh nghiệp bị cơ quan thuế, cơ quan có thẩm quyền phát hiện sai phạm, thì tùy vào mức độ vẫn bị xử lý vi phạm theo đúng quy định.\nTheo kết quả thống kê của Tổng cục Thuế, tổng số thuế thu nhập doanh nghiệp đã nộp của các doanh nghiệp trong V.1000 năm 2022 chiếm 58,2%, tổng thu ngân sách về thuế thu nhập doanh nghiệp và bằng 85,1% so với số đã nộp các doanh nghiệp trong V.1000 năm 2021. Qua 6 năm thực hiện, có 301 doanh nghiệp có 7 năm liên tiếp nằm trong V.1000 của năm 2022, 2021, 2020, 2019, 2018, 2017 và 2016.\nTrong V.1000 năm 2022 có 331 doanh nghiệp trong V.1000 năm 2021 bị loại ra; đồng thời, có 331 doanh nghiệp bổ sung vào V.1000 năm 2022. Tổng cục Thuế cho biết, nguyên nhân chủ yếu của 331 doanh nghiệp bị loại ra khỏi V.1000 năm 2022 là do được lùi thời gian thực hiện tạm nộp thuế thu nhập doanh nghiệp năm 2022 vào đầu năm 2023 theo Nghị định số 91/2022/NĐ- CP sửa đổi, bổ sung một số điều của Nghị định số 126/2020/NĐ-CP thì doanh nghiệp phải nộp 80% thuế thu nhập doanh nghiệp của năm 2022, thời hạn cuối cùng là ngày 30/1/2023.\nTrong số 331 doanh nghiệp bổ sung vào V.1000 năm 2022 chủ yếu là nhờ doanh nghiệp nộp thuế thu nhập doanh nghiệp cho hoạt động phát sinh không thường xuyên như chuyển nhượng bất động sản, chuyển nhượng vốn, hoạt động khác; nộp cho quyết định truy thu của các cơ quan có thẩm quyền trong năm 2021.\nNgoài ra, một số doanh nghiệp có số tạm nộp trong năm 2022 lớn hơn số phát sinh phải nộp; doanh nghiệp tăng vốn, mở rộng hoạt động kinh doanh, tăng hiệu quả hoạt động dẫn đến tăng doanh thu, thu nhập 2022; doanh nghiệp hoàn thành dự án, nghiệm thu công trình đi vào hoạt động chính thức có doanh thu.",
      "category":11,
      "imageArticles":[],
      "publisher":{
        "id": 2,
        "name":"NguoiLaoDong",
        "imageURLBrand":"../assets/publisher/nguoilaodong.png",
        "articles":[]
      }
    }
  }
]