This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


#Libraries
https://www.npmjs.com/package/react-native-fontawesome
npm install react-native-svg

npm install @fortawesome/react-native-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/fontawesome-svg-core

npm install i18next @types/i18next
npm install react-i18next @types/react-i18next
npm install intl-pluralrules

npm i @formatjs/intl-relativetimeformat  

npm i @types/react-native-switch-selector
npm install react-devtools --save
npm install @react-native-async-storage/async-storage
npm install @types/axios
/*NO SE USO https://github.com/henninghall/react-native-date-picker#datepicker*/

https://github.com/mmazzarolo/react-native-modal-datetime-picker
npm i react-native-modal-datetime-picker @react-native-community/datetimepicker



este componente no funciona en ios
npm install @react-native-picker/picker --save
este componente funciona en ios
https://github.com/AdelRedaa97/react-native-select-dropdown
la otra alternativa es pero no esta instalada en el proy
https://github.com/siemiatj/react-native-modal-dropdown o https://hossein-zare.github.io/react-native-dropdown-picker-website/docs
https://github.com/hoaphantn7604/react-native-element-dropdown#readme



npm install react-native-elements
npm install @rneui/themed @rneui/base
npm install --save react-native-vector-icons
https://github.com/oblador/react-native-vector-icons#ios
https://www.youtube.com/watch?v=303rGAVcCA4
#ICONS
Option: With Gradle (recommended)
This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
To customize the files being copied, add the following instead:

project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");