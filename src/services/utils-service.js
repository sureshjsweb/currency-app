const utils = (function () {
    const findMatch = (rates, from, to) => {
        return rates.filter(rate => rate.base === from.toString() && rate.terms === to.toString());
    };
    const findCurrency = (source, crossvia, from, to, rates) => {
        console.log(crossvia[from][to].toString());
        if (crossvia[from][to] === '1:1') {
            return source;
        }
        if (crossvia[from][to] === 'D') {
            const result = findMatch(rates, from, to);
            if (result.length > 0) {
                return (source * parseFloat(result[0].termsValue)).toFixed(2);
            }
        }
        if (crossvia[from][to] === 'Inv') {
            // return source;
        }
        if (crossvia[from][to].toString() === 'USD') {
            const result1 = findMatch(rates, from, 'USD');
            const result2 = findMatch(rates, 'USD', to);
            if (result1.length > 0) {
                return (source * parseFloat(result1[0].termsValue)).toFixed(2);
            }
            if (result2.length > 0) {
                return (source * parseFloat(result2[0].termsValue)).toFixed(2);
            }
        }
        if (crossvia[from][to] === 'EUR') {
            const result1 = findMatch(rates, from, 'EUR');
            const result2 = findMatch(rates, 'EUR', to);
            if (result1.length > 0) {
                return (source * parseFloat(result1[0].termsValue)).toFixed(2);
            }
            if (result2.length > 0) {
                return (source * parseFloat(result2[0].termsValue)).toFixed(2);
            }
        }
    };
    return {
        findCurrency
    };
})();

export default utils;