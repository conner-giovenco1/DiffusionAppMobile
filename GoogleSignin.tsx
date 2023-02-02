import React, { Component } from 'react'
import { Button } from 'react-native'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export function GoogleSign() {
    return(
    <Button title={'Sign in with Google'} onPress={async () => {
        GoogleSignin.configure({
            iosClientId: '552669576534-ninopsfqvitpk59v9kt42mn0r2e4o37h.apps.googleusercontent.com',
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({userInfo});
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }}/>
    )
}
