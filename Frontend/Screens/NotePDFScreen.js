import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import * as OpenAnything from 'react-native-openanything'
// import { WebView } from 'react-native-webview'


import { FontAwesome5 } from '@expo/vector-icons';

export default function NotePDFScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', height: height, width: width }}>
        <Text style={{ fontSize: 30, fontWeight: '600', color: 'white', top: 50 }}>
          Notes
        </Text>
        <View style={{ width: width - 20, backgroundColor: 'white', height: 75, borderRadius: 30, top: 70, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="file-pdf" size={40} color="#D22B2B" style={{ margin: 15 }} />
          </View>
          <TouchableOpacity style={{ justifyContent: 'center', width: width - 20 }} onPress={() => { OpenAnything.Youtube('Coding Deb') }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '600', }}>
                All Chapters
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D22B2B',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})