import CustomTextInput from "./CustomTextInput";
import {View} from "react-native";
import {mergePriceAndDecimal, separatePriceAndDecimal} from "../util/commonUtil";
import {useState} from "react";

const PriceInput = ({price, priceInputHandler}) => {

    // const [priceInput, decimalInput] = separatePriceAndDecimal(price)

    const [priceInput, setPriceInput] = useState(0)
    const [decimalInput, setDecimalInput] = useState(0)

    // const priceHandler = (input) => {
    //     const price = mergePriceAndDecimal(input, decimalInput);
    //     priceInputHandler(price)
    // }
    //
    // const decimalHandler = (input) => {
    //     const price = mergePriceAndDecimal(priceInput, input);
    //     priceInputHandler(price)
    // }


    const priceHandler = (input) => {
        setPriceInput(input)
        let merged = mergePriceAndDecimal(input, decimalInput)
        priceInputHandler(merged)
    }
    const decimalHandler = (input) => {
        setDecimalInput(input)
        let merged = mergePriceAndDecimal(price, input)
        priceInputHandler(merged)
    }


    return (
        <View style={{flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end'}}>
            <CustomTextInput label={'Ücret giriniz'} input={priceInput} inputHandler={priceHandler}/>
            <CustomTextInput input={decimalInput} inputHandler={decimalHandler}/>
        </View>

    )

}
export default PriceInput;