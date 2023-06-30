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

## Step 3: Modifying your App

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```
Add the highlighted code to the body of MainActivity class:

```java
public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

and make sure to add the following import statement at the top of this file below your package statement:

```java
import android.os.Bundle;
```


```bash
npm install @react-navigation/native-stack
npm install @react-navigation/drawer
```

##### install reanimated
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

```bash
npm install react-native-gesture-handler
```

must add in the first line `import 'react-native-gesture-handler'; `

```bash
npm install react-native-keyboard-aware-scroll-view
```

###### Android SupportAndroid Support
First, Android natively has this feature, you can easily enable it by setting windowSoftInputMode in `AndroidManifest.xml`

```bash
android:windowSoftInputMode="adjustPan"
```
----------------------------------
##Para Android:

Abre el archivo android/app/src/main/res/values/styles.xml.
Busca o agrega la siguiente línea:
xml
Copy code
<item name="android:statusBarColor">@color/status_bar_color</item>
Reemplaza @color/status_bar_color con el color que desees utilizar, por ejemplo: #0000FF para azul.


##Para iOS:

Abre el archivo ios/YourProjectName/Info.plist.
Busca o agrega la siguiente línea:
xml
Copy code
<key>UIStatusBarStyle</key>
<string>UIStatusBarStyleLightContent</string>
Reemplaza UIStatusBarStyleLightContent con el estilo de la barra de estado que desees, como UIStatusBarStyleDefault para texto oscuro o UIStatusBarStyleLightContent para texto claro.
Si deseas cambiar el color de fondo, puedes agregar lo siguiente dentro del tag <dict>:
xml
Copy code
<key>UIStatusBarBackgroundColor</key>
<string>#0000FF</string>
Reemplaza #0000FF con el color que desees utilizar.



#push messaging
```bash
npm install --save @react-native-firebase/app
npm i @react-native-firebase/messaging
```

https://rnfirebase.io/messaging/usage
https://rnfirebase.io/messaging/usage/ios-setup
https://rnfirebase.io/messaging/server-integration

```bash
npm install base-64
npm install @types/js-base64 --save-dev
```

###firebase
keytool -list -v -alias androiddebugkey -keystore app/debug.keystore para obtener sha1

follow instructions
https://rnfirebase.io/