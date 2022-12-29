import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/LoginPage/Cartoon.jpg')}
              style={{ height: 50, width: 50, borderRadius: 50, marginRight: 3 }}
            />
            <Text style={{ fontSize: 22, fontWeight: '600', marginLeft: 3 }}>
              Joyosree Roy
            </Text>
          </View>
          <TouchableOpacity style={{ alignItems: 'center', left: 130, width: 50 }} onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="logout" size={27} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>
            Our Topics
          </Text>
        </View>
        <View>
           <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',height:130,width:180,margin:15,borderRadius:30}}>
            <Text>
              IOT
            </Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9DCC9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})