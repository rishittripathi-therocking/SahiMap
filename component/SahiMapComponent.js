import React from 'react';
import { ScrollView,  Text, View,StyleSheet, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

class SahiMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            location:null,
            errorMess: null
        }
    }
    
    componentDidMount() {
        this.functionLocationAsync();
    }

    functionLocation = () => {
        let watchId = navigator.geolocation.watchPosition((pos) => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            });
        },(error) => {

            alert(error.message);
        },
        {enableHighAccuracy: true,timeout: 20000,maximumAge: 1000}
        )
    }

    functionLocationAsync =async() => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if( status !== 'granted') {
            this.setState({
                errorMess: 'Permission not granted for location'
            });
        }
        else{
            this.functionLocation();
        }
        let location = await Location.getCurrentPositionAsync();
        this.setState({location});
    };

    render() {
        let text='';
        if(this.state.errorMess){
            text=this.state.errorMess;
        }
        else if(this.state.location) {
            text=this.state.location;
        }
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
                                latitudeDelta: 0.0043,
                                longitudeDelta: 0.034
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
