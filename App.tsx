import React from 'react';
import {Text, View} from 'react-native';
import { GoogleSign } from './GoogleSignin'

const HelloWorldApp = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Hello, world!</Text>
            <GoogleSign></GoogleSign>
        </View>
    );
};
export default HelloWorldApp;
