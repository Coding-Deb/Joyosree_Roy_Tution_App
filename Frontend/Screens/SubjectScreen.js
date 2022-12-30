import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import { MaterialIcons } from '@expo/vector-icons';

export default function SubjectScreen() {
  const navigation = useNavigation()
  const Route = useRoute()
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'space-around', height: height, width: width }}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{ fontSize: 22, fontWeight: '800',marginBottom:25 }}>{Route.params.Name}</Text>
          <Image
          source={require('../assets/LoginPage/Cartoon.jpg')}
          style={{width: width-50}}
          resizeMode='stretch'
          />
        </View>
        <View style={{flexDirection:'row',padding:15}}>
          <TouchableOpacity style={{ backgroundColor: '#8B0000', height: 70, width: 180, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderColor: '#8B0000', borderWidth: 2 ,margin:15,flexDirection:'row'}} onPress={()=>navigation.navigate('Notes')}>
            <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Notes</Text>
            <MaterialIcons name="picture-as-pdf" size={30} color="white" style={{height:40,width:40,marginTop:10,marginLeft:12}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#4F7942', height: 70, width: 180, justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderColor: '#4F7942', borderWidth: 2 ,margin:15 ,flexDirection:'row'}} onPress={()=>navigation.navigate('Video')}>
            <Text style={{ fontSize: 22, fontWeight: '800', color: 'white' }}>Video</Text>
            <MaterialIcons name="video-collection" size={30} color="white" style={{height:40,width:40,marginTop:10,marginLeft:12}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})