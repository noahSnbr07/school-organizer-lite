import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    //set the path in headers to make it accessable in server components
    const headers = new Headers(request.headers);
    headers.set("x-current-path", request.nextUrl.pathname);

    //forward request
    return NextResponse.next({ headers });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};