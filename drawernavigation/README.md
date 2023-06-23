
# react-native-examples
examples react native
This example demonstrates the usage of **Drawer.Navigator** to create a menu with a thumbnail and user name displayed at the top:

 - Start by setting up the Drawer.Navigator component in your application. Refer to the documentation or relevant resources for detailed instructions on its implementation.

 - Create a custom drawer content component to customize the menu appearance. Inside this component, you'll have the flexibility to design and structure the layout according to your preferences.

 - In the custom drawer content component, incorporate the user's thumbnail and name at the desired location. You can retrieve this information from your user data or authentication system.

 - Apply suitable styling to the thumbnail and name elements to ensure they are prominently displayed at the top of the menu.

 - Integrate the custom drawer content component into your Drawer.Navigator configuration, replacing the default drawer content with your custom implementation.

By following these steps, you'll be able to utilize the Drawer.Navigator functionality effectively and enhance the menu by adding a thumbnail and user name at the top.

> *First of all, please refer to the official React Native documentation on environment setup for building the development environment. You can
> find detailed instructions at
> https://reactnative.dev/docs/environment-setup?guide=native.*

start app
npm i
npm start

**commons problem**

    ht' is never used
    node:internal/process/promises:279
                triggerUncaughtException(err, true /* fromPromise */);
                ^
    
    Error: EPERM: operation not permitted, lstat '\node_modules\react-native-reanimated\android\build\intermediates\cxx\Debug\3pb1l6uc\obj\arm64-v8a\libreanimated.so.tmpa804877'
    Emitted 'error' event on NodeWatcher instance at:
        at drawernavigation\node_modules\metro-file-map\src\watchers\NodeWatcher.js:231:14 {
      errno: -4048,
      code: 'EPERM',
      syscall: 'lstat',
      path: 'drawernavigation\\node_modules\\react-native-reanimated\\android\\build\\intermediates\\cxx\\Debug\\3pb1l6uc\\obj\\arm64-v8a\\libreanimated.so.tmpa804877'
    }

If you encounter an error and you believe that clearing data might help resolve the issue, you can try wiping data. Wiping data refers to clearing the application's data stored on your device, including settings, preferences, and cached files. This action essentially resets the app to its initial state.