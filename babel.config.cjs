// Note: We're only using babel for jest
module.exports = {
  presets: [
    // Compile only whatever we need for our node version
    ['@babel/preset-env', {targets: {node: 'current'}}],

    // Yass, typescript 💪
    '@babel/preset-typescript',

    // Needed to make tests run for some reason 🤷‍♂️
    'module:metro-react-native-babel-preset',
  ],
}
