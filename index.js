import {NativeModules, Platform} from 'react-native';

const pixelColor = Platform.OS === 'ios' ? NativeModules.RNPixelColor : NativeModules.GetPixelColor;

export const setImage = (path) => new Promise((resolve, reject) => {
  pixelColor.init(path, (err, isSet) => {
    if (err) {
      return reject(err);
    }
    if (isSet) {
      resolve('Image sucessfully set');
    }
  });
});

export const pickColorAt = (x, y) => new Promise((resolve, reject) => {
  pixelColor.getRGB(x, y, (err, color) => {
    if (err) {
      return reject(err);
    }
    resolve(color);
  });
});

export default {
  setImage,
  pickColorAt,
};
