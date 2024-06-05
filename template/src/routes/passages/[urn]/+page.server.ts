import { error } from '@sveltejs/kit';
import { loadPassage } from 'kodon';

export const prerender = true;

export const load = async ({ params: { urn = '' } }) => {
    if (urn === '' || typeof urn === 'undefined') {
        return error(404);
    }

    const loadPassageFn = loadPassage('config/commentary.toml', 'out/editions');

    return loadPassageFn(urn);
};