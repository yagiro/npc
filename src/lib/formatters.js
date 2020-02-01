export const currencyCodes = {
    usd: '$',
};

export const formatCurrency = (num=0, code=currencyCodes.usd) =>
    `${code}${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
;
