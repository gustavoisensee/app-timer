import { AsyncStorage } from 'react-native';

export const storeData = async(key, value) => {
  try {
    await AsyncStorage.setItem(`@AppTimer:${key}`, JSON.stringify(value));
  } catch (error) {
    console.log('Error saving data: ', error);
    return null;
  }
};

export const retrieveData = async(key) => {
  try {
    const value = await AsyncStorage.getItem(`@AppTimer:${key}`);
    console.log('--- retrieve: ', value);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error retrieving data: ', error);
    return null;
  }
};

export const removeData = async(key) => {
  try {
    await AsyncStorage.removeItem(`@AppTimer:${key}`);
  } catch (error) {
    console.log('Error removing data: ', error);
    return null;
  }
};
