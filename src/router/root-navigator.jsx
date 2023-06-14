import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native/types";
import ScanScreen from "../screens/scanner/scanner";
import VerifyScreen from "../screens/url-verify/url-verify";

const linking = {
  prefixes: ['veralink://'],
  config: {
    initialRouteName: 'Scanner',
    screens: {
      Scanner: {
        path: 'scanner'
      },
    }
  }
};

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}
    >
      <RootStack.Navigator>
        <RootStack.Screen name="Scanner" component={ScanScreen} />
        <RootStack.Screen name="Verify" component={VerifyScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;