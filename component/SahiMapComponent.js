import React from 'react';
import {  Text, ScrollView, TextInput,View,Button,StyleSheet} from 'react-native';


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
                    <TextInput placeholder="Enter a Place to Mark on Map" style={{ height: 40, width: 200}} value={this.state.place} onChange={this._onChangeHandler}></TextInput>
                </View>
                <View style={styles.buttons}>
                    <Button title="Search" buttonStyle={{ backgroundColor: '#f4511e'}}></Button> 
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
