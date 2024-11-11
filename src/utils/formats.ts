export const formatCurrency = (amount: number) => {
    if (amount === 0 || amount === null) {
        return 'GRATIS'
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const formatPhone = (phone: number) => {
    const phoneStr = phone.toString();

    return `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)} ${phoneStr.slice(6, 10)}`;
};

export const formatFullDate = (date: string, language: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = parseInt(date.slice(8, 10), 10);

    const monthName = new Date(`${year}-${parseInt(month)}-01`).toLocaleString(language, { month: 'long' });

    return day + ' de ' + monthName + ' del ' + year;
}