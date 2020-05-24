/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: Each',
    'Warning: Failed',
    // 'Warning: componentWillReceiveProps is deprecated',
]);
// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];


AppRegistry.registerComponent(appName, () => App);
