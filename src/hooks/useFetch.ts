import { useQuery } from 'react-query';
import { fetchIndex, fetchIndexDash, fetchShow } from '../api/fetch';

// GET

//  Show
export const useFetchShow = (model: 'memberships' | 'labels' | 'events' | 'services' | 'labels' | 'join-requests' | 'social-medias' | 'contacts' | 'chamber-members', id: number, language: string) => {
    return useQuery(
        `fetch_show_${id}`,
        () => {
            return fetchShow(model, id, language);
        },
        {}
    );
}

//  Index
export const useFetchIndex = (model: 'memberships' | 'labels' | 'join-requests' | 'chamber-members' | 'services' | 'social-medias' | 'events', body: BodyInit | FormData | null, language: string) => {
    return useQuery(
        `fetch_index_${model}`,
        () => {
            return fetchIndex(model, body, language);
        },
        {}
    );
}

//  IndexDash
export const useFetchIndexDash = (model: 'memberships' | 'events' | 'services' | 'chamber-members', body: BodyInit | FormData | null) => {
    return useQuery(
        `fetch_index_${model}`,
        () => {
            return fetchIndexDash(model, body);
        },
        {}
    );
}
