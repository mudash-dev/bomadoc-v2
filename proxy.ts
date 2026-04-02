import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { request } from "http";

//list of public routes
const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/api/webhook/clerk'
]);

export default clerkMiddleware(async (auth, request) => {
    if(!isPublicRoute(request)){

        // this protects routes like Doctor/Patient dashbpoards
        await auth.protect();
    }

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files (images, favicon, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    '/(api|trpc)(.*)',
  ],
};