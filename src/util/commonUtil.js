import CommonConstants from "../constants/CommonConstants";

export const groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export const mergePriceAndDecimal = (price, decimal) => {
    price = price.toString().replace(/[^0-9]/g, '');
    decimal = decimal.toString().replace(/[^0-9]/g, '');
    return `${price}${CommonConstants.DOT}${decimal}`
}

export const formatPriceInput = (input) => {
    let removedFirstZero = input.replace(/^0/, "");
    let onlyNumbers = removedFirstZero.replace(/[^0-9]/g, '');
    return onlyNumbers;
}