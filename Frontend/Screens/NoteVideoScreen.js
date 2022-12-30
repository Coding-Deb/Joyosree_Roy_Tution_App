import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NoteVideoScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', height: height, width: width }}>
        <Text style={{ fontSize: 30, fontWeight: '600', color: 'white', top: 50 }}>
          Videos
        </Text>
        <View style={{ width: width - 20, backgroundColor: 'white', height: 75, borderRadius: 30, top: 70 ,flexDirection:'row'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <MaterialCommunityIcons name="video" size={40} color="#097969" style={{ margin: 17 }} />
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize: 18, fontWeight: '600', }}>
              All Chapters
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#097969',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})