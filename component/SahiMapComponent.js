import React from 'react';
import {  ScrollView, Text} from 'react-native';


class SahiMap extends React.Component {
    render() {
        return(
            <ScrollView style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <Text>Hello World</Text>
            </ScrollView>
        );
    }
}

export default SahiMap;
