const getBaseURL = (op: number): string => {
    switch (op) {
        case 1:
            return 'http://192.168.0.9:8000';
        case 2:
            return 'https://canirac-api.paulflores.tech';
        default:
            return '';
    }
}

export const BASE_URL = getBaseURL(2);
