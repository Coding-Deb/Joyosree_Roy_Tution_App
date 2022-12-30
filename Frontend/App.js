import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import NotePDFScreen from './Screens/NotePDFScreen';
import NoteVideoScreen from './Screens/NoteVideoScreen';
import SubjectScreen from './Screens/SubjectScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
        <Stack.Screen name='Home' component={HomeScreen} options={{animation:'slide_from_bottom'}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{animation:'slide_from_left'}}/>
        <Stack.Screen name='Subject' component={SubjectScreen} options={{animation:'slide_from_right'}}/>
        <Stack.Screen name='Notes' component={NotePDFScreen} options={{animation:'slide_from_bottom'}}/>
        <Stack.Screen name='Video' component={NoteVideoScreen} options={{animation:'slide_from_bottom'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
