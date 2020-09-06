import React, {useState} from 'react';
import { ScrollView,  Text, View,StyleSheet, Dimensions} from 'react-native';
import { Button, Icon} from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import GooglePlacesInput from './GoogleAutoComplete';

class SahiMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place:'',
        }
    }

    render() {
        
        return(
            <React.Fragment>
                <Text style={{ textAlign: 'center', margin: 10, color: '#514DA8', fontWeight: 'bold' }}>Search Places And Mark Them on Map</Text>
                <GooglePlacesInput />
                <ScrollView style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                    <View style={styles.container}>
                        <MapView style={styles.mapview}
                            initialRegion={{
                                latitude: 22.5726,
                                longitude: 88.3639,
                                latitudeDelta: 0.05,
                                longitudeDelta: 0.05
                            }}
                            >
                                <Marker coordinate={{latitude: 22.5726, longitude:88.3639}}></Marker>
                            </MapView>
                    </View>
                </ScrollView>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
    },
    mapview: {
        width: Dimensions.get('window').width,
        height: 480,
        
    }
});

export default SahiMap;
