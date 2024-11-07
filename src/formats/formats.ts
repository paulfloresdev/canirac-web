export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const formatPhone = (phone: number) => {
    const phoneStr = phone.toString();

    return `(${phoneStr.slice(0,3)}) ${phoneStr.slice(3,6)} ${phoneStr.slice(6,9)} ${phoneStr.slice(9,13)}`;
};