module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Remove this line
      // 'expo-router/babel'
    ],
  };
};
