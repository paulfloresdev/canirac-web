const getBaseURL = (op: number): string => {
    switch (op) {
        case 1:
            return 'http://192.168.0.12:8000';
        case 2:
            return 'http://192.168.1.193:8000';
        default:
            return '';
    }
}

export const BASE_URL = getBaseURL(1);
