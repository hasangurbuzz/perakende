import CustomTextInput from "./CustomTextInput";
import {Text, View} from "react-native";
import React, {useState} from "react";
import CurrencyConstants from "../../constants/CurrencyConstants";
import CommonConstants from "../../constants/CommonConstants";

const PriceInput = ({price, decimal, priceInputHandler, decimalInputHandler}) => {

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
            <CustomTextInput input={price || 0} inputHandler={priceInputHandler}
                             config={{textAlign: 'right', keyboardType: 'numeric'}}/>
            <Text style={{fontSize: 23}}>{CommonConstants.DOT}</Text>
            <CustomTextInput input={decimal || 0} inputHandler={decimalInputHandler}
                             config={{maxLength: 2, keyboardType: 'numeric'}}/>
            <Text>{CurrencyConstants.TRY}</Text>
        </View>

    )

}
export default PriceInput;