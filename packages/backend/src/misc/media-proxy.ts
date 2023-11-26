import crypto from 'node:crypto';

export const getMediaProxySign = (targetUrl: string, pepper: string): string => {
    return crypto.createHash('sha256').update(`${targetUrl}_${pepper}`).digest('hex');
}
