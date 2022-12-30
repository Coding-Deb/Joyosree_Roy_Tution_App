import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function SubjectScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SubjectScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})