import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken: string) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        throw new Error('Error storing the auth token');
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        throw new Error('Error getting the auth token');
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        throw new Error('Error removing the auth token');
    }
};

export default {
    getToken,
    removeToken,
    storeToken
};
