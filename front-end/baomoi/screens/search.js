import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Search() {
    


  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', backgroundColor: '#459ead', justifyContent:'space-around', alignItems:'center', height: 60}}>
          
          <TextInput style={{borderWidth:1, position: 'absolute', left:'5%', paddingLeft:'10%', paddingVertical:3, borderRadius: 5, backgroundColor: '#618785', width: '75%',}} placeholder='Tìm kiếm'/>
          <Image style={{height: 20, width: 20, position: 'absolute', left:'7%'}} source={require('../assets/search.png')}/>
          <Text style={{color:'#FFF', position: 'absolute', right:'7%'}}>Đóng</Text>
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


