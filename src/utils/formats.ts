export const formatCurrency = (amount: number) => {
    if(amount === 0 || amount === null){
        return 'GRATIS'
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const formatPhone = (phone: number) => {
    const phoneStr = phone.toString();

    return `(${phoneStr.slice(0,3)}) ${phoneStr.slice(3,6)} ${phoneStr.slice(6,10)}`;
};