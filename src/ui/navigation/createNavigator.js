import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ScreenConstants from "../../constants/ScreenConstants";
import {createStackNavigator} from "@react-navigation/stack";
import CartButton from "../components/CartButton";
import CartScreen from "../screens/CartScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={ScreenConstants.HomeNavigation.name}
                    component={HomeNavigation}
                />
                <Stack.Screen
                    name={ScreenConstants.CartScreen.name}
                    options={{
                        title: ScreenConstants.CartScreen.title,
                        headerShown: true,
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

const HomeNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={ScreenConstants.HomeScreen.name} component={HomeScreen}
                           options={({navigation}) => ({
                               title: ScreenConstants.HomeScreen.title,
                               headerRight: () => {
                                   return (<CartButton navigation={navigation}/>)
                               }
                           })}/>
            <Drawer.Screen name={ScreenConstants.CreateScreen.title} component={AddScreen}/>
        </Drawer.Navigator>
    )
}

export default CustomNavigation;