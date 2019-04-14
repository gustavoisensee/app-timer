import { AsyncStorage } from 'react-native';

export const storeData = async(key, value) => {
  try {
    await AsyncStorage.setItem(`@MyFinances:${key}`, JSON.stringify(value));
  } catch (error) {
    console.log('Error saving data: ', error);
    return null;
  }
};

export const retrieveData = async(key) => {
  try {
    const value = await AsyncStorage.getItem(`@MyFinances:${key}`);
    console.log('--- retrieve: ', value);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error retrieving data: ', error);
    return null;
  }
};

export const removeData = async(key) => {
  try {
    await AsyncStorage.removeItem(`@MyFinances:${key}`);
  } catch (error) {
    console.log('Error removing data: ', error);
    return null;
  }
};
