import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanScreen from "../screens/scanner/scanner";
import VerifyScreen from "../screens/url-verify/url-verify";
import WarningScreen from "../screens/warning/warning";

const linking = {
  prefixes: ['veralink://'],
  config: {
    initialRouteName: 'Verify',
    screens: {
      Scanner: {
        path: 'verify'
      },
    }
  }
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Scanner" component={ScanScreen} />
        <RootStack.Screen name="Verify" component={VerifyScreen} />
        <RootStack.Screen name="Warning" component={WarningScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
