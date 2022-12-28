import {FlatList, Text, View} from "react-native";
import {useCart} from "../../context/CartContext";
import Divider from "../components/Divider";
import {getCartItemPrice} from "../../util/commonUtil";
import CurrencyConstants from "../../constants/CurrencyConstants";
import CommonConstants from "../../constants/CommonConstants";
import {getTotalPriceOfCart} from "../../helper/CartHelper";
import {useEffect} from "react";
import IconButton from "../components/IconButton";
import Icons from "../../styles/Icons";
import ScreenConstants from "../../constants/ScreenConstants";

const SummaryScreen = ({navigation}) => {

    const {state, deleteAllProductsFromCart} = useCart();

    const handleReturnHome = () => {
        navigation.navigate(ScreenConstants.HomeScreen.name)
        deleteAllProductsFromCart()
    }

    useEffect(() => navigation.setOptions(
            {
                headerLeft: () => {
                    return (
                        <IconButton
                            icon={Icons.HOME}
                            onPress={handleReturnHome}/>
                    )
                }
            })
        , []);


    return (
        <View style={{alignItems: 'center', flex: 1, backgroundColor: '#C4C4C4'}}>
            <FlatList data={state}
                      renderItem={({item, index}) => {
                          return (
                              <View style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  width: 400
                              }}>
                                  <Text
                                      style={{
                                          textTransform: 'uppercase',
                                          maxWidth: 250
                                      }}>
                                      {item.quantity} x {item.product.name.substring(0, 20)} {CommonConstants.DOT}
                                  </Text>
                                  <Text>{getCartItemPrice(item)} {CurrencyConstants.TRY}</Text>
                              </View>
                          );
                      }}
            />
            <Divider/>
            <View style={{
                width: 400,
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <Text style={{
                    textTransform: 'uppercase'
                }}>Toplam</Text>
                <Text>
                    {getTotalPriceOfCart(state)} {CurrencyConstants.TRY}
                </Text>
            </View>

        </View>
    )
}

export default SummaryScreen;