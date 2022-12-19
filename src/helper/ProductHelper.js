import {groupBy} from "../util/commonUtil";

export const getAllCategories = (productList) => {
    let categories = [];
    productList.map(
        (product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        }
    )
    return categories;
}

export const groupByCategories = (productList) => {
    return groupBy(productList, 'category')
}