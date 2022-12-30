import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import TopicsApi from '../Apis/TopicsApi'

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
        <View style={{ margin: 15, marginTop: 55, marginBottom: 55 }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>
            Our Topics
          </Text>
          <FlatList
            data={TopicsApi}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={()=>{navigation.navigate('Subject')}}>
                  <View style={{ backgroundColor: 'white', width: 1 / 2 * width - 40, height: 100, borderRadius: 30, margin: 15, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', margin: 15 }}>
                      {item.name}
                    </Text>
                    <FontAwesome name="chevron-right" size={26} color="black" style={{ margin: 15 }} />
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            Welcome To Joyosree Roy Coaching Center
          </Text>
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