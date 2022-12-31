import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import TopicsApi from '../Apis/TopicsApi'

// import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../Componennts/Header'
// import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width }}>
        <Header/>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch',marginTop:40 }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>
            Welcome To Joyosree Roy Coaching
          </Text>
        </View>
        <View style={{ margin: 15, marginTop: 75, marginBottom: 55 }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>
            Our Topics
          </Text>
          <FlatList
            data={TopicsApi}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => { navigation.navigate('Subject', { Name: item.name }) }}>
                  <View style={{ backgroundColor: 'white', width: 1 / 2 * width - 30, height: 100, borderRadius: 30, margin: 15, alignItems: 'center', justifyContent: 'space-around' ,marginTop:60}}>
                    <Text style={{ fontSize: 14, fontWeight: '700', margin: 15 }}>
                      {item.name}
                    </Text>
                    <AntDesign name="arrowright" size={28} color="black" style={{ margin: 15 }} />
                  </View>
                </TouchableOpacity>
              )
            }}
          />
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