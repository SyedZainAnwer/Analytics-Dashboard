import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/utils/analytics";

export default async function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/') {
        console.log('TRACK!')
        try {
            analytics.track('pageView', {
                page: '/',
                country: req.geo?.country,
            })
        } catch (error: any) {
            console.error(error)
        }
    }

    return NextResponse.next();
}

export const matcher = {
    matcher: ['/']
}