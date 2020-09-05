import React from 'react';
import {  Text, ScrollView,View,StyleSheet} from 'react-native';
import { Button, Input,Icon} from 'react-native-elements';


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
                    <Input placeholder="Enter a Place to Mark on Map" style={{ height: 40, width: 200}} onChangeText={(place) => this.setState({place})} value={this.state.place} ></Input>
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
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
        borderColor: '#f4511e'
    },
    buttons: {
        flexDirection: 'row',
        marginLeft: 130,
    }
});

export default SahiMap;
