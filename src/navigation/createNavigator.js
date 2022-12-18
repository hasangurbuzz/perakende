import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ScreenConstants from "../constants/ScreenConstants";
import {createStackNavigator} from "@react-navigation/stack";
import CartButton from "../components/CartButton";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator();

const CustomNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ScreenConstants.HomeScreen.name}
                    options={({navigation}) => ({
                        title: ScreenConstants.HomeScreen.title,
                        headerRight: () => {
                            return (<CartButton navigation={navigation}/>)
                        }

                    })}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={ScreenConstants.CreateScreen.name}
                    options={{title: ScreenConstants.CreateScreen.title}}
                    component={AddScreen}
                />
                <Stack.Screen
                    name={ScreenConstants.CartScreen.name}
                    options={{
                        title: ScreenConstants.CartScreen.title,
                        headerRight: () => {
                            return (<CartButton/>)
                        }
                    }}
                    component={CartScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default CustomNavigation;