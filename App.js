//imports all the libraries I will need.
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Alert, ImageBackground, Text, View, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Builds my intro screen.
function IntroScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <View style={{ flex: 2, backgroundColor: 'coral' }}>
                <ImageBackground style={{ width: '110%', height: '100%', position: "absolute", bottom: 0 }} source={require('./assets/MarsBckgrnd.jpg')}>
                    <Text style={{ color: 'black', fontSize: 35, alignContent: 'center', fontWeight: 'bold', padding: 30, lineHeight: 55 }}>{"\n"}
        NAMED AFTER THE ROMAN GOD OF WAR, MARS IS A VERY UNIQUE PLANET GLOWING
        IN RED</Text>
                </ImageBackground>
            </View>
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, alignContent: 'center', fontWeight: 'bold', padding: 40, lineHeight: 14 }}>{"\n"}
                IF YOU ARE READY FOR A VERY EXCITING EXPERIENCE, CLICK THE BUTTON BELOW</Text>
                <Button
                    color="yellow"
                    title="TAKE A LEAP ONTO MARS"
                    onPress={() => navigation.navigate('MARS EXPERIENCE')} />
            </View>
        </View>
    );
}

//Function that acts as my main screen.
//This is a completely different screen.
function MainScreen({ navigation }) {
    return (
        <ImageBackground style={{ width: '100%', height: '100%', position: "absolute", bottom: 0 }} source={require('./assets/Crater.jpg')}>
            <Text style={{ color: 'black', fontSize: 22, fontStyle: 'italic', alignContent: 'center', fontWeight: 'bold', padding: 30, lineHeight: 25 }}>{"\n"}
            EACH TILE YOU SEE LEADS TO A DIFFERENT EXPERIENCE</Text>
            <View>
                <Pressable
                    onPress={() => navigation.navigate('MARS')}
                >
                    <Text style={{ color: 'black', fontSize: 18, fontStyle: 'italic', alignContent: 'center', fontWeight: 'bold', padding: 30, lineHeight: 25 }}>{"\n"}
            WHEN YOU ARE READY, PICK A TILE</Text>
                </Pressable>

            </View>
        </ImageBackground>
    );
}

//Creates my nav component.
const Stack = createStackNavigator();

//Takes care of all navigation to each screen in the entire app.
//Creates my stack navigator.
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MARS">
                <Stack.Screen name="MARS" component={IntroScreen} />
                <Stack.Screen name="MARS EXPERIENCE" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
