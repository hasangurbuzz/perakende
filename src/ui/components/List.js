import {FlatList, Text, View} from "react-native";
import ProductCard from "./ProductCard";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import CardList from "./CardList";
import Styles from "../../styles/Styles";

const List = forwardRef(({DATA, handleScroll}, refer) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useImperativeHandle(refer, () => ({
        scroll(index) {
            refer.scrollToIndex({animated: true, index: index});
        }
    }))

    const _onViewableItemsChanged = React.useCallback(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }, []);

    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 10
    }

    const _onMomentumScrollEnd = () => {
        handleScroll(currentIndex)
    }

    const _renderItem = ({item}) => {
        return (
            <View style={Styles.CategorizedListStyle.item}>
                <Text style={Styles.CategorizedListStyle.title}>{item}</Text>
                <CardList DATA={DATA[item]}/>
            </View>
        )
    }

    return (
        <View style={Styles.CategorizedListStyle.container}>
            <FlatList
                onMomentumScrollEnd={_onMomentumScrollEnd}
                onViewableItemsChanged={_onViewableItemsChanged}
                viewabilityConfig={_viewabilityConfig}
                keyExtractor={(item, index) => index.toString()}
                ref={(ref) => {
                    refer = ref;
                }}
                data={Object.keys(DATA)}
                renderItem={_renderItem}
            />
        </View>
    );
})


export default List;