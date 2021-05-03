const utils = {
    findMatch: function (rates, from, to) {
        return rates.filter(rate => rate.base === from.toString() && rate.terms === to.toString());
    },
    findIndirectCurrency: function (source, rates, from, to, Intermediate) {
        const result1 = this.findMatch(rates, from, Intermediate);
        const result2 = this.findMatch(rates, Intermediate, to);
        if (result1.length > 0) {
            const res = (source * parseFloat(result1[0].termsValue)).toFixed(2);
            return res;
        }
        if (result2.length > 0) {
            const res = (source * parseFloat(result2[0].termsValue)).toFixed(2);
            return res;
        }
    },
    findCurrency: function (source, crossvia, from, to, rates) {
        if (crossvia[from][to] === '1:1') {
            return source;
        }
        if (crossvia[from][to] === 'D') {
            const result = this.findMatch(rates, from, to);
            if (result.length > 0) {
                return (source * parseFloat(result[0].termsValue)).toFixed(2);
            }
        }
        if (crossvia[from][to] === 'Inv') {
            const result = this.findMatch(rates, to, from);
            if (result.length > 0) {
                return (source * parseFloat(result[0].termsValue)).toFixed(2);
            }
        }
        if (crossvia[from][to].toString() === 'USD') {
            return this.findIndirectCurrency(source, rates, from, to, 'USD');
        }
        if (crossvia[from][to].toString() === 'EUR') {
            return this.findIndirectCurrency(source, rates, from, to, 'EUR');
        }
    }
};

export default utils;