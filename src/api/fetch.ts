import { BASE_URL } from "../constants/url";

export const fetchIndex = async (model: 'memberships' | 'labels' | 'join-requests' | 'chamber-members' | 'services' | 'social-medias' | 'events', body: BodyInit | FormData | null, language: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}?lang=${language}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body
    });

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}

export const fetchIndexDash = async (model: 'memberships' | 'events' | 'services' | 'chamber-members', body: BodyInit | FormData | null) => {
    const response = await fetch(`${BASE_URL}/api/${model}-dash`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body
    });

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}

export const fetchShow = async (model: 'memberships' | 'labels' | 'events' | 'services' | 'labels' | 'join-requests' | 'social-medias' | 'contacts' | 'chamber-members', id: number, language: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}/${id}?lang=${language}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export const fetchStore = async (model: 'memberships' | 'labels' | 'events' | 'services' | 'join-requests' | 'chamber-members' | 'contacts' | 'social-medias', body: BodyInit | FormData, token: string) => {
    const isForm = model === 'events' || model === 'services' || 'chamber-members';

    const formHeader = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const jsonHeader = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    const response = await fetch(`${BASE_URL}/api/${model}`, {
        method: 'POST',
        headers: isForm ? formHeader : jsonHeader,
        body: body
    });

    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(`Failed to store`);
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export const fetchUpdate = async (model: 'memberships' | 'labels' | 'join-requests' | 'social-medias' | 'contacts', id: string, body: BodyInit | FormData, token: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: body,
    });

    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(`Failed to update`);
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}

export const fetchUpdateData = async (model: 'services' | 'events' | 'chamber-members', id: string, body: FormData | BodyInit, token: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}/${id}/update-data`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: body
    });

    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(`Failed to update ${data}`);
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}

export const fetchUpdateImage = async (model: 'services' | 'events' | 'chamber-members', id: string, body: FormData | BodyInit, token: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}/${id}/update-image`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: body
    });

    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(`Failed to update ${data}`);
    }

    const data = await response.json();
    const imgPath = data.data.img_path;
    console.log(data);

    return imgPath;
}

export const fetchDestroy = async (model: 'memberships' | 'events' | 'services' | 'join-requests' | 'social-medias', id: string, token: string) => {
    const response = await fetch(`${BASE_URL}/api/${model}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to destroy`);
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}