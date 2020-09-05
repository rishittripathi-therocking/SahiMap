import React from 'react';
import {  Text, ScrollView,View,StyleSheet, Dimensions} from 'react-native';
import { Button, Input,Icon} from 'react-native-elements';
import MapView from 'react-native-maps';


class SahiMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place:'',
        }
    }


    render() {
        return(
            <ScrollView style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <Text style={{ textAlign: 'center', margin: 10, color: '#514DA8', fontWeight: 'bold' }}>Search Places And Mark Them on Map</Text>
                <View style={styles.input}>
                    <Input leftIcon={{ type: 'font-awesome', name: 'map-marker' }} placeholder="Enter a Place to Mark on Map" onChangeText={(place) => this.setState({place})} value={this.state.place} ></Input>
                </View>
                <View style={styles.buttons}>
                    <Button title="Search" 
                        icon={
                            <Icon
                                name='search'
                                type='font-awesome'            
                                size={24}
                                color= 'white'
                            />
                        }
                        buttonStyle={{ backgroundColor: '#f4511e'}}></Button> 
                </View>
                <View style={styles.container}>
                    <MapView style={styles.mapview}
                        initialRegion={{
                            latitude: 22.5726,
                            longitude: 88.3639,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05
                        }}
                        ></MapView>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    input: {
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: '#f4511e',
        padding: 8,
    },
    buttons: {
        flexDirection: 'row',
        marginLeft: 130,
    },
    mapview: {
        width: Dimensions.get('window').width,
        height: 350,
        
    }
});

export default SahiMap;
