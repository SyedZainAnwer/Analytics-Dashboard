import { redis } from "@/lib/redis";

type AnalyticsArg = {
    retention?: number;
}

export class Analytics {
    private retention: number = 60 * 60 * 24 * 7;

    constructor(opts?: AnalyticsArg) {
        if(opts?.retention) this.retention = opts.retention;
    }
    
    async track(namespace: string, event: object = {}) {
        const key = `analytics::${namespace}`
        await redis.hincrby(key, JSON.stringify(event), 1);
    }
}

export const analytics = new Analytics()