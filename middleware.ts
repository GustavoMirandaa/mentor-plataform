import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/newproject(.*)'])

type UserMetadata = {
    admin?: boolean
}

export default clerkMiddleware(async (auth, req) => {
    console.log('[Middleware] Request para:', req.nextUrl.pathname)

    if (isProtectedRoute(req)) {
        const { userId, sessionClaims } = await auth()

        console.log('[Middleware] userId:', userId)
        console.log('[Middleware] sessionClaims.metadata:', sessionClaims?.metadata)

        if (!userId) {
            console.log('[Middleware] Usuário não autenticado. Redirecionando para /unauthorized')
            const url = req.nextUrl.clone()
            url.pathname = '/unauthorized'
            return NextResponse.redirect(url)
        }

        const { admin } = sessionClaims?.metadata as UserMetadata
        const isAdmin = admin === true

        console.log('[Middleware] isAdmin:', isAdmin)

        if (!isAdmin) {
            console.log('[Middleware] Usuário sem permissão admin. Redirecionando para /unauthorized')
            const url = req.nextUrl.clone()
            url.pathname = '/unauthorized'
            return NextResponse.redirect(url)
        }
    }

    console.log('[Middleware] Permitindo acesso')
    return NextResponse.next()
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}