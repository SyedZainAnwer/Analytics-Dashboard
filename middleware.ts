import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/utils/analytics";

export default async function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/analytics') {
        try {
            analytics.track('pageview', {
                page: '/analytics',
                country: req.geo?.country,
            })
        } catch (error: any) {
            console.error(error)
        }
    }

    return NextResponse.next();
}

export const matcher = {
    matcher: ['/analytics']
}