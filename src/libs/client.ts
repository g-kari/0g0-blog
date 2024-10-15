import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: '0g0-blog',
    apiKey: process.env.API_KEY || '',
});
