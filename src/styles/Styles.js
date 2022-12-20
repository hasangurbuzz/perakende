export default {
    ProductCardStyle: {
        container: {
            alignItems: 'center',
            borderColor: 'orange',
            borderWidth: 1,
            margin: 10,
            borderRadius: 10,
            elevation: 10,
            shadowColor: 'black',
            backgroundColor: 'white'
        },
        image: {
            width: 100, height: 100
        },
        title: {
            flex: 1,
            flexWrap: 'wrap',
            textAlign: 'center'
        },
        price: {},
        amount: {
            container: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                fontSize: 15,
                paddingLeft: 5,
                paddingRight: 5,
                textAlign: 'center'
            }
        }
    },
    CardItemStyle: {
        container: {
            flexDirection: 'row',
            borderColor: 'orange',
            borderWidth: 1,
            margin: 4,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        image: {
            width: 70, height: 70
        },
        title: {
            fontSize: 15,
            flex: 1,
            flexWrap: 'wrap',
            textAlign: 'center'
        },
        quantity: {
            fontSize: 15,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'center'
        }
    },
    ImagePickerStyle: {
        preview: {
            width: 200, height: 200
        }
    },
    CategorizedListStyle: {
        container: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1
        },
        item: {
            flex: 1
        },
        title: {
            fontSize: 19, marginLeft: 10
        }

    }
}