import React from 'react';
import { ScrollView,  Text, View,StyleSheet, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class SahiMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition((pos) => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            });
        },(error) => {
            this.setState({
                error: error.message
            });
        },
        {enableHighAccuracy: false,timeout: 1,maximumAge: 1,distanceFilter: 1}
        )
    }

    render() {
        
        return(
            <React.Fragment>
                <Text style={{ textAlign: 'center', margin: 10, color: '#514DA8', fontWeight: 'bold' }}>Get Your Current Location And Mark Them on Map</Text>
        <Text style={{ textAlign: 'center', margin: 10, color: '#514DA8', fontWeight: 'bold' }}> Your Location is {this.state.latitude}, {this.state.longitude}</Text>
                <ScrollView style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                    <View style={styles.container}>
                        <MapView style={styles.mapview}
                            initialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.05,
                                longitudeDelta: 0.05
                            }}
                            >
                                <Marker coordinate={{latitude: this.state.latitude, longitude:this.state.longitude}}></Marker>
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
