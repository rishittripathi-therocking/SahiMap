import React from 'react';
import {ScrollView} from 'react-native';
import SahiMap from './SahiMapComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

class Main extends React.Component {
    render() {
        return(
                <NavigationContainer>
                    <Stack.Navigator > 
                        <Stack.Screen 
                            name="SahiMap" 
                            component={SahiMap}
                            />
                    </Stack.Navigator>
                </NavigationContainer>
        );
    }
}


export  default Main;