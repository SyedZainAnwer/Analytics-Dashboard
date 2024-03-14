import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://us1-quick-dingo-39503.upstash.io',
    token: process.env.REDIS_KEY!,
})