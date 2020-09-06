import React from 'react';
import { GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View} from 'react-native';
import { Button, Icon} from 'react-native-elements';


const GooglePlacesInput = () => {
    return(
        <View style={{marginBottom: 30,}}>
            <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={true}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onFail={error => console.log(error)}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
          }}
          query={{
            key: 'AIzaSyCAgRNzVq4-yD_OEbNt8-4kjbqUi4dcNtg',
            language: 'en', // language of the results
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch" 
          debounce={200}
        />
        </View>
    );
};

export default GooglePlacesInput;