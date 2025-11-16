import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "cn"];
let defaultLocale = "en";

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    const cookieLocale = request.cookies.get("locale")?.value;
    if (cookieLocale && locales.includes(cookieLocale)) {
        return cookieLocale;
    }
    return defaultLocale;
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const excludedPaths = ['/favicon.ico', '/robots.txt', '/sitemap.xml'];

    // 如果请求的是静态资源，则不做任何处理
    if (excludedPaths.includes(pathname)) {
        return;
    }


    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // "/((?!_next).*)",
        "/((?!_next|images).*)", // 排除 images 文件夹
        // Optional: only run on root (/) URL
        // '/'
    ],
};