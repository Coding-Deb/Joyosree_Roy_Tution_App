import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function LoginScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/LoginPage/Joyosree_Maam_App.jpg')}
                style={{ position: 'absolute' }}
                resizeMode='contain'
            />

            <View style={{ width: width - 30, height: 1 / 1.5 * height, alignItems: 'center', justifyContent: 'space-around', margin: 15, top: 150 }}>
                <View style={{ marginTop: 20, marginBottom: 50, alignItems: 'center', bottom: 100 }}>
                    <Image
                        source={require('../assets/LoginPage/LOGIN.jpg')}
                        style={{ height: 200, width: 230 }}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../assets/LoginPage/Cartoon.jpg')}
                        style={{ height: 120, width: 120 }}
                        resizeMode='center'
                    />
                </View>
                <View style={{bottom:50}}>
                    <TextInput
                        style={{ borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 50, margin: 25, padding: 15, fontSize: 20, fontWeight: '600' }}
                        placeholder='Enter Your Name'
                        placeholderTextColor='white'
                    />
                    <TextInput
                        style={{ borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 50, margin: 25, padding: 15, fontSize: 20, fontWeight: '600' }}
                        placeholder='Enter Your Email'
                        placeholderTextColor='white'
                    />
                    <TextInput
                        style={{ borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 50, margin: 25, padding: 15, fontSize: 20, fontWeight: '600' }}
                        placeholder='Enter Your Password'
                        placeholderTextColor='white'
                    />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#00A36C', width: 1 / 2 * width, height: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 20, top: 50, borderRadius: 30 }} onPress={()=>{navigation.navigate('Home')}} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                        Log IN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})