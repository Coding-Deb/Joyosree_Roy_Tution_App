import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../assets/LoginPage/LOGO.png')}
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
    )
}

const styles = StyleSheet.create({})