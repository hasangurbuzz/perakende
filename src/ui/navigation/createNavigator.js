import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ScreenConstants from "../../constants/ScreenConstants";
import {createStackNavigator} from "@react-navigation/stack";
import CartButton from "../components/CartButton";
import CartScreen from "../screens/CartScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SummaryScreen from "../screens/SummaryScreen";
import {TouchableOpacity} from "react-native";
import IconButton from "../components/IconButton";
import Icons from "../../styles/Icons";

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
                <Stack.Screen
                    name={ScreenConstants.SummaryScreen.name}
                    component={SummaryScreen}
                    options={{
                        title: ScreenConstants.SummaryScreen.title,
                        headerShown: true
                    }
                    }
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