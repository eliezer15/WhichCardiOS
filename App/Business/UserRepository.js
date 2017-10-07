'use strict';
import { AsyncStorage } from 'react-native';

const key = "pcjwe-cj29sla-41wkap1lx-ids1";

export default class UserRepository {

    static async getUserAsync() {
        try {
            let user = await AsyncStorage.getItem(key);
            return JSON.parse(user);
        } catch (error) {
            throw 'Cannot find user';
        }
    }
    
    static async saveUserAsync(user) {
        try {
            let jsonUser = JSON.stringify(user);
            console.log(key);
            await AsyncStorage.setItem(key, jsonUser);
        } catch (error) {
            throw 'Error saving user';
        }
    }
}